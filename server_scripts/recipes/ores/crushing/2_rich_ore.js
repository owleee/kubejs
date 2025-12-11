ServerEvents.recipes(event => {
    for (const [name, ore] of Object.entries(ores)) {

        if (!ore.rich_ore) continue;

        // SQUASHING //
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [{ tag: `forge:rich_ore/${name}` }],
            result: [
                { item: ore.dirty_crushed_ore },
                { item: ore.dirty_crushed_ore, chance: 0.2 }
            ],
            tool: { tag: "forge:hammer" }
        }).id(KJ(`crushing/squashing/rich_${name}`))

        // MILLSTONE //
        event.custom({
            "type": "create:milling",
            processingTime: 600,
            "ingredients": [{
                "tag": `forge:rich_ore/${name}`
            }],
            "results": [
                { item: ore.dirty_crushed_ore },
                { item: ore.dirty_crushed_ore, chance: 0.3 }
            ]
        }).id(KJ(`crushing/millstone/rich_${name}`))

        // CRUSH GLYPH // TODO

        // CRUSHING WHEELS //
        event.custom({
            "type": "create:crushing",
            processingTime: 600,
            "ingredients": [{
                "tag": `forge:rich_ore/${name}`
            }],
            "results": [
                { item: ore.dirty_crushed_ore },
                { item: ore.dirty_crushed_ore, chance: 0.33 },
                { item: ore.dirty_crushed_ore, chance: 0.33 }
            ]
        }).id(KJ(`crushing/crushing_wheels/rich_${name}`))

        // CRUSHER //
        event.custom({
            "type": "immersiveengineering:crusher",
            "energy": 6000,
            "input": {
                "tag": `forge:rich_ore/${name}`
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
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": ore.dirty_crushed_ore
                    }
                }
            ]
        }).id(KJ(`crushing/crusher/rich_${name}`))

    }
})