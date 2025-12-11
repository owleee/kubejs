ServerEvents.recipes(event => {
    event.remove({ id: /immersivegeology:crafting\/crush_.+_ore_with_work_hammer/ })
    event.remove({ id: /immersivegeology:crusher\/.+_ore_to_dirty_crushed/ })

    for (const [name, ore] of Object.entries(ores)) {

        if (!ore.normal_ore) continue;

        // SQUASHING //
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [{ tag: `forge:raw_materials/${name}` }],
            result: [
                { item: ore.dirty_crushed_ore },
                { item: ore.dirty_crushed_ore, chance: 0.1 }
            ],
            tool: { tag: "forge:hammer" }
        }).id(KJ(`crushing/squashing/normal_${name}`))

        // MILLSTONE //
        event.custom({
            "type": "create:milling",
            processingTime: 400,
            "ingredients": [{
                "tag": `forge:raw_materials/${name}`
            }],
            "results": [
                { item: ore.dirty_crushed_ore },
                { item: ore.dirty_crushed_ore, chance: 0.2 }
            ]
        }).id(KJ(`crushing/millstone/normal_${name}`))

        // CRUSH GLYPH // TODO

        // CRUSHING WHEELS //
        event.custom({
            "type": "create:crushing",
            processingTime: 400,
            "ingredients": [{
                "tag": `forge:raw_materials/${name}`
            }],
            "results": [
                { item: ore.dirty_crushed_ore },
                { item: ore.dirty_crushed_ore, chance: 0.33 },
                { item: ore.dirty_crushed_ore, chance: 0.165 }
            ]
        }).id(KJ(`crushing/crushing_wheels/normal_${name}`))

        // CRUSHER //
        event.custom({
            "type": "immersiveengineering:crusher",
            "energy": 6000,
            "input": {
                "tag": `forge:raw_materials/${name}`
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
                    "chance": 0.25,
                    "output": {
                        "item": ore.dirty_crushed_ore
                    }
                }
            ]
        }).id(KJ(`crushing/crusher/normal_${name}`))
    }
})