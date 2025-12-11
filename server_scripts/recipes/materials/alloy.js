ServerEvents.recipes(event => {
    [
        "immersiveengineering:arc_furnace/alloy_brass",
        "immersiveengineering:arc_furnace/alloy_bronze"
    ].forEach(id => {
        event.remove({ id: id })
    })

    event.remove(/alexscaves:.+neodymium_ingot/)
    event.remove("create:mixing/brass_ingot")

    const deduplicateID = (s, i, io) => {
        if (io.length === 1) return s;
        if (io[i]._id) return `${io[i]._id}_${s}`;
        return `${s}_${i}`
    }

    const ignoredEntries = [
        "result",
        "id",
        "flags"
    ]

    for (const [materialName, materialSet] of Object.entries(materials)) {

        // If the material has no defined ingredients, ignore
        // this doesnt necessarily mean it's not an alloy, just that it doesn't use this automatic alloy system
        if (!materialSet._ingredients) continue;

        // ingredients can be an ingredients object or an array of ingredients objects
        // if not array, make an array containing only the provided ingredient object
        let ingredientOptions = materialSet._ingredients
        if (!Array.isArray(materialSet._ingredients)) ingredientOptions = [materialSet._ingredients]

        ingredientOptions.forEach((ingredients, index) => {

            // the ingredients field to be passed to the mixing recipe
            let recipeIngredients = [];
            // the total amount of dust used, by default the amount returned
            let total = 0;
            // iterate over each ingredient
            for (const [ingredient, amount] of Object.entries(ingredients)) {
                // if it's the result field, ignore
                if (ingredient.startsWith("_")) continue;
                // add ingredient to array
                recipeIngredients.push({
                    tag: `forge:dusts/${ingredient}`,
                    count: amount
                });
                // increment total
                total += amount;
            }

            // if a result amount is defined, overwrite the generated total
            if (ingredients.result) { total = ingredients.result }

            // create mixing
            event.custom({
                "type": "create:mixing",
                "ingredients": recipeIngredients,
                "results": [{
                    "count": total,
                    "item": materialSet.dust
                }]
            }).id(`kubejs:mixing/${deduplicateID(`${materialName}_dust`, index, ingredientOptions)}`)

            // unless disabled in flags, a lossy manual crafting recipe
            if (
                !materialSet._flags.includes("-manual_alloy") &&
                !(ingredients._flags && ingredients._flags.includes("-manual_alloy"))
            ) {
                event.shapeless(
                    materialSet.dust,
                    recipeIngredients.map(item => `#${item.tag}`)
                ).id(`kubejs:manual_alloying/${deduplicateID(`${materialName}_dust`, index, ingredientOptions)}`)
            }

            // arc furnace alloying
            // iterate over each for every permutation of items
            for (const [mainIngredientName, mainIngredientAmount] of Object.entries(ingredients)) {
                if (mainIngredientName.startsWith("_")) continue;

                let additives = []
                let realIngredients = []
                for (const [extraIngredientName, extraIngredientAmount] of Object.entries(ingredients)) {
                    if (extraIngredientName.startsWith("_")) continue;
                    if (extraIngredientName !== mainIngredientName) {
                        additives.push({
                            base_ingredient: { tag: `forge:ingot_amount/${extraIngredientName}` },
                            count: extraIngredientAmount
                        })
                        realIngredients.push(extraIngredientName)
                    }
                }

                event.custom({
                    "type": "immersiveengineering:arc_furnace",
                    "additives": additives,
                    "energy": 51200,
                    "input": {
                        "base_ingredient": {
                            "tag": `forge:ingot_amount/${mainIngredientName}`
                        },
                        "count": mainIngredientAmount
                    },
                    "results": [
                        {
                            "base_ingredient": {
                                "item": materialSet.ingot
                            },
                            "count": total
                        }
                    ],
                    "time": 100
                }).id(`kubejs:arc_smelting/${deduplicateID(`${materialName}_from_${mainIngredientName}`, index, ingredientOptions)}`)

                let mixingIngredients = additives.map((i) => {
                    return {
                        base_ingredient: {
                            tag: `forge:dusts/${i.base_ingredient.tag.split("/")[1]}`,
                        },
                        count: i.count
                    }
                })

                // skip if "main" ingredient is not a valid material or has no molten form
                if (!materials[mainIngredientName]) continue;
                if (!materials[mainIngredientName].molten) continue;

                let isMainIngredientHotEnough = (realIngredients.every(i => {
                    // if the material isn't registered, assume it can be melted
                    if (!materials[i]) return true;

                    // if the main ingredient has no set melting point, assume it's hot enough
                    if (!materials[mainIngredientName]._melting_point) return true;

                    // if this ingredient has no set melting point, assume it can be melted
                    if (!materials[i]._melting_point) return true;

                    // otherwise check that the ingredient's melting point is less than or equal to the main ingredient's melting point
                    let ingredientMeltingPoint = materials[i]._melting_point
                    let mainIngredientMeltingPoint = materials[mainIngredientName]._melting_point

                    return ingredientMeltingPoint <= mainIngredientMeltingPoint
                }))

                // if the main (molten) ingredient is not hot enough to melt the others (dust), skip this recipe 
                if (!isMainIngredientHotEnough) continue;

                event.custom({
                    type: "immersiveengineering:mixer",
                    energy: 3200,
                    fluid: {
                        amount: Amount.INGOT * mainIngredientAmount,
                        tag: `forge:${mainIngredientName}`
                    },
                    inputs: mixingIngredients,
                    result: {
                        amount: Amount.INGOT * total,
                        fluid: materialSet.molten
                    }
                }).id(`kubejs:mixing/molten_${deduplicateID(materialName, index, ingredientOptions)}_from_molten_${mainIngredientName}`)
            }
        })
    }
})