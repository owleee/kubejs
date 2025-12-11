ServerEvents.recipes(event => {
    event.remove({ id: /create:crushing\/ochrum.*/ })
    event.remove({ id: /create:crushing\/veridium.*/ })
    event.remove({ id: /create:crushing\/crimsite.*/ })
    event.remove({ id: /create:crushing\/asurine.*/ })

    const createMinerals = {
        veridium: {
            ore: "copper",
            byproduct: "garnierite",
            chance: 0.8
        },
        crimsite: {
            ore: "hematite",
            byproduct: "chromite",
            chance: 0.4
        },
        asurine: {
            ore: "smithsonite",
            byproduct: "cassiterite",
            chance: 0.3
        },
        ochrum: {
            ore: "gold",
            byproduct: "silver",
            chance: 0.2
        },
        //scorchia: {}
    }
    for (const [mineralName, mineralSet] of Object.entries(createMinerals)) {
        event.custom({
            type: "create:crushing",
            ingredients: [{ tag: `create:stone_types/${mineralName}` }],
            processingTime: 250,
            results: [
                {
                    "chance": mineralSet.chance,
                    "item": ores[mineralSet.ore].dirty_crushed_ore
                },
                {
                    "chance": mineralSet.chance,
                    "item": ores[mineralSet.byproduct].nugget
                }
            ]
        }).id(`kubejs:crushing/${mineralName}`)

        event.custom({
            "type": "immersiveengineering:crusher",
            "energy": 3000,
            "input": { tag: `create:stone_types/${mineralName}` },
            "result": {
                "item": ores[mineralSet.byproduct].nugget

            },
            "secondaries": [
                {
                    "chance": mineralSet.chance + 0.2,
                    "output": {
                        "item": ores[mineralSet.ore].dirty_crushed_ore
                    }
                }
            ]
        }).id(`kubejs:crusher/${mineralName}`)
    }
})