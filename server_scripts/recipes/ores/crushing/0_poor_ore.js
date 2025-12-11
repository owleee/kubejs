ServerEvents.recipes(event => {
    for (const [name, ore] of Object.entries(ores)) {

        if (!ore.poor_ore) continue;

        // SQUASHING //
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [{ tag: `forge:poor_ore/${name}` }],
            result: [
                { item: ore.dirty_crushed_ore }
            ],
            tool: { tag: "forge:hammer" }
        }).id(KJ(`crushing/squashing/poor_${name}`))

        // MILLSTONE //
        event.custom({
            "type": "create:milling",
            processingTime: 300,
            "ingredients": [{
                "tag": `forge:poor_ore/${name}`
            }],
            "results": [
                { item: ore.dirty_crushed_ore },
                { item: ore.dirty_crushed_ore, chance: 0.1 }
            ]
        }).id(KJ(`crushing/millstone/poor_${name}`))

        // CRUSH GLYPH // TODO

        // CRUSHING WHEELS //
        event.custom({
            "type": "create:crushing",
            processingTime: 300,
            "ingredients": [{
                "tag": `forge:poor_ore/${name}`
            }],
            "results": [
                { item: ore.dirty_crushed_ore },
                { item: ore.dirty_crushed_ore, chance: 0.33 }
            ]
        }).id(KJ(`crushing/crushing_wheels/poor_${name}`))

        // CRUSHER //
        event.custom({
            "type": "immersiveengineering:crusher",
            "energy": 6000,
            "input": {
                "tag": `forge:poor_ore/${name}`
            },
            "result": {
                "item": ore.dirty_crushed_ore
            },
            "secondaries": [
                {
                    "chance": 0.5,
                    "output": {
                        "item": ore.dirty_crushed_ore
                    }
                }
            ]
        }).id(KJ(`crushing/crusher/poor_${name}`))
    }
})