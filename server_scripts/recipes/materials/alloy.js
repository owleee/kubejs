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
        if (io[i].id) return `${io[i].id}_${s}`;
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
        if (!materialSet.ingredients) continue;

        // ingredients can be an ingredients object or an array of ingredients objects
        // if not array, make an array containing only the provided ingredient object
        let ingredientOptions = materialSet.ingredients
        if (!Array.isArray(materialSet.ingredients)) ingredientOptions = [materialSet.ingredients]

        ingredientOptions.forEach((ingredients, index) => {

            // the ingredients field to be passed to the mixing recipe
            let recipeIngredients = [];
            // the total amount of dust used, by default the amount returned
            let total = 0;
            // iterate over each ingredient
            for (const [ingredient, amount] of Object.entries(ingredients)) {
                // if it's the result field, ignore
                if (ignoredEntries.includes(ingredient)) continue;
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
                if (ignoredEntries.includes(mainIngredientName)) continue;

                let additives = []
                for (const [extraIngredientName, extraIngredientAmount] of Object.entries(ingredients)) {
                    if (ignoredEntries.includes(extraIngredientName)) continue;
                    if (extraIngredientName !== mainIngredientName) additives.push({
                        base_ingredient: { tag: `forge:ingot_amount/${extraIngredientName}` },
                        count: extraIngredientAmount
                    })
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

                event.custom({
                    "type": "immersiveengineering:mixer",
                    "energy": 3200,
                    "fluid": {
                        "amount": Amount.INGOT * mainIngredientAmount,
                        "tag": `forge:${mainIngredientName}`
                    },
                    "inputs": mixingIngredients,
                    "result": {
                        "amount": Amount.INGOT * total,
                        "fluid": materialSet.molten
                    }
                }).id(`kubejs:mixing/molten_${deduplicateID(materialName, index, ingredientOptions)}_from_molten_${mainIngredientName}`)
            }
        })
    }
})