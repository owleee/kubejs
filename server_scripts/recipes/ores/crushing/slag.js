ServerEvents.recipes(event => {

    event.forEachRecipe({ type: "immersivegeology:gravity_separator" }, recipe => {
        let json = JSON.parse(recipe.json)
        if (!/forge:powdered_slag\/.+/.test(json.input.tag)) return;

        let ore = json.input.tag.split("/")[1]
        let { result, byproduct, byproduct_chance } = json;

        // MILLING //
        event.custom({
            "type": "create:milling",
            processingTime: 500,
            "ingredients": [{ "tag": `forge:slag/${ore}` }],
            "results": [
                { item: SLAG },
                { item: result.item, chance: 0.4 },
                { item: byproduct.item, chance: byproduct_chance * 0.6 }
            ]
        }).id(`kubejs:milling/${ore}_slag`)

        // CRUSHING WHEELS //
        event.custom({
            "type": "create:crushing",
            processingTime: 500,
            "ingredients": [{ "tag": `forge:slag/${ore}` }],
            "results": [
                { item: SLAG },
                { item: result.item, chance: 0.5 },
                { item: byproduct.item, chance: byproduct_chance * 0.8 }
            ]
        }).id(`kubejs:wheel_crushing/${ore}_slag`)

        // CRUSHER //
        event.custom({
            "type": "immersiveengineering:crusher",
            "energy": 6000,
            "input": { "tag": `forge:slag/${ore}` },
            "result": { "item": SLAG },
            "secondaries": [{
                chance: 0.6,
                output: { item: result.item }
            }, {
                chance: byproduct_chance,
                output: { item: byproduct.item }
            }]
        }).id(KJ(`crusher/${ore}_slag`))
    });

    // CUSTOM RECIPES //
    [
        {
            name: "chromite",
            result: "immersivegeology:metal_oxide_chromium",
            byproduct: "immersivegeology:metal_oxide_iron",
            byproduct_chance: 0.075
        }, {
            name: "armstrongite",
            result: "kubejs:desh_oxide",
            byproduct: "immersivegeology:metal_oxide_manganese",
            byproduct_chance: 0.075,
            slag: "kubejs:alien_slag"
        }
    ].forEach(ore => {
        // MILLING //
        event.custom({
            type: "create:milling",
            processingTime: 500,
            ingredients: [{ item: `kubejs:${ore.name}_slag` }],
            results: [
                { item: ore.slag || SLAG },
                { item: ore.result, chance: 0.4 },
                { item: ore.byproduct, chance: ore.byproduct_chance * 0.6 }
            ]
        }).id(`kubejs:milling/${ore.name}_slag`)

        // CRUSHING WHEELS //
        event.custom({
            type: "create:crushing",
            processingTime: 500,
            ingredients: [{ item: `kubejs:${ore.name}_slag` }],
            results: [
                { item: ore.slag || SLAG },
                { item: ore.result, chance: 0.5 },
                { item: ore.byproduct, chance: ore.byproduct_chance * 0.8 }
            ]
        }).id(`kubejs:wheel_crushing/${ore.name}_slag`)

        // CRUSHER //
        event.custom({
            type: "immersiveengineering:crusher",
            energy: 6000,
            input: { item: `kubejs:${ore.name}_slag` },
            result: { "item": ore.slag || SLAG },
            secondaries: [{
                chance: 0.6,
                output: { item: ore.result }
            }, {
                chance: ore.byproduct_chance * 1.0,
                output: { item: ore.byproduct }
            }]
        }).id(KJ(`crusher/${ore.name}_slag`))

        // BALLMILL //
        event.custom({
            type: "immersivegeology:ballmill",
            energy: 64000,
            input: { tag: `forge:slag/${ore.name}` },
            result: { item: `kubejs:${ore.name}_slag_powder` },
            time: 800
        }).id(`kubejs:ballmill/${ore.name}_slag`)

        // GRAV SEP //
        event.custom({
            type: "immersivegeology:gravity_separator",
            byproduct: { item: ore.byproduct },
            byproduct_chance: ore.byproduct_chance,
            input: { tag: `forge:powdered_slag/${ore.name}` },
            result: { item: ore.result },
            time: 200,
            water: 250
        }).id(`kubejs:gravity_separator/${ore.name}_slag_powder`)
    })
})