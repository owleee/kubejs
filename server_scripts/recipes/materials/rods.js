ServerEvents.recipes(event => {
    event.remove({ id: /ad_astra:.+_rod/ })
    event.remove({ id: /immersiveengineering:crafting\/stick_.+/ })
    for (const [materialName, material] of Object.entries(materials)) {
        if (!material.rod) continue;
        event.custom({
            "type": "immersiveengineering:metal_press",
            "energy": 2400,
            "input": {
                "tag": `forge:ingots/${materialName}`
            },
            "mold": "immersiveengineering:mold_rod",
            "result": {
                item: material.rod,
                "count": 2
            }
        }).id(`kubejs:metal_press/${materialName}_rod`)

        event.custom({
            "type": "createaddition:rolling",
            "input": {
                "tag": `forge:ingots/${materialName}`
            },
            "result": {
                "item": material.rod,
                "count": 2
            }
        }).id(`kubejs:rolling/${materialName}_rod`)
    }
})