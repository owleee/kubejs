ServerEvents.recipes(event => {
    event.remove({ id: /immersivegeology:roasting\/bloomery.+/ })

    for (const [name, ore] of Object.entries(ores)) {
        if (!ore.bloomeryTime) continue;
        event.custom({
            "type": "immersivegeology:bloomery",
            "input": {
                "base_ingredient": {
                    "item": ore.crushed_ore
                },
                "count": 2
            },
            "result": {
                "item": KJ(`${ore.material}_bloom`)
            },
            "time": ore.bloomeryTime
        }).id(KJ(`bloomery/${name}`))
    }

    const uniqueOxideMaterials = [];
    for (const [name, ore] of Object.entries(ores)) {
        if (!ore.bloomeryTime) continue;
        if (uniqueOxideMaterials.includes(ore.material)) continue;
        uniqueOxideMaterials.push(ore.material)
    }

    uniqueOxideMaterials.forEach(m => {
        if (!materials[m]) return;
        if (!materials[m].ingot) return;
        if (!materials[m].dust) return;

        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [{ item: `kubejs:${m}_bloom` }],
            result: [
                { item: materials[m].ingot, chance: 0.9 },
                { item: materials[m].dust, chance: 0.1 },
                { item: IE("slag"), chance: 0.5 },
            ],
            tool: { tag: "forge:hammer" }
        }).id(KJ(`squashing/${m}_bloom`))

        event.custom({
            "type": "create:pressing",
            "ingredients": [{ item: `kubejs:${m}_bloom` }],
            results: [
                { item: materials[m].ingot },
                { item: IE("slag"), chance: 0.5 },
            ]
        }).id(KJ(`pressing/${m}_bloom`))
    })
})