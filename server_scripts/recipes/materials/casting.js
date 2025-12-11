ServerEvents.recipes(event => {
    event.remove({ id: "createbigcannons:compacting/forge_bronze_ingot" })

    for (const [materialName, materialSet] of Object.entries(materials)) {

        if (!(materialSet.molten && materialSet.ingot)) continue;

        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "amount": Amount.INGOT,
                    "fluidTag": `forge:${materialName}`
                }
            ],
            "results": [
                {
                    "item": materialSet.ingot
                }
            ]
        }).id(`kubejs:compacting/${materialName}_ingot`)

        if (materialSet.plate) event.custom({
            "type": "immersiveengineering:bottling_machine",
            "fluid": {
                "amount": Amount.INGOT,
                "tag": `forge:${materialName}`
            },
            "input": { "item": "immersiveengineering:mold_plate" },
            "results": [
                { "item": materialSet.plate },
                { "item": "immersiveengineering:mold_plate" }
            ]
        }).id(`kubejs:bottling/${materialName}_plate`)

        if (materialSet.ingot) event.custom({
            "type": "immersiveengineering:bottling_machine",
            "fluid": {
                "amount": Amount.INGOT,
                "tag": `forge:${materialName}`
            },
            "input": { "item": "kubejs:ingot_mold" },
            "results": [
                { "item": materialSet.ingot },
                { "item": "kubejs:ingot_mold" }
            ]
        }).id(`kubejs:bottling/${materialName}_ingot`)

        if (materialSet.rod) {
            event.custom({
                "type": "immersiveengineering:bottling_machine",
                "fluid": {
                    "amount": Amount.ROD,
                    "tag": `forge:${materialName}`
                },
                "input": { "item": "immersiveengineering:mold_rod" },
                "results": [
                    { "item": materialSet.rod },
                    { "item": "immersiveengineering:mold_rod" }
                ]
            }).id(`kubejs:bottling/${materialName}_rod`)
        }
    }
})