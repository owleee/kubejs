ServerEvents.recipes(event => {
    event.remove({ id: /immersiveengineering:crafting\/plate_.+_hammering/ })

    for (const [materialName, material] of Object.entries(materials)) {
        if (!material.plate) continue;
        // Remove IE hammer crafting recipes

        if (material.pile) {
            // CUTTING BOARD FLATTENING //
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [{ item: material.ingot }],
                result: [
                    { item: material.plate, chance: 0.9 },
                    { item: material.pile, chance: 0.1 }
                ],
                tool: { tag: "forge:hammer" }
            }).id(KJ(`squashing/${materialName}_plate`))
        }

        // CREATE PRESSING //

        // TODO: REMOVE OTHER PRESSING RECIPES

        event.custom({
            type: "create:pressing",
            ingredients: [{ tag: `forge:ingots/${materialName}` }],
            results: [{ item: material.plate }]
        }).id(KJ(`pressing/${materialName}_plate`))

        // IMMERSIVE ENGINEERING METAL PRESSING //
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: 2400, // this appears to be consistent across all defaultIE metal press recipes
            input: { base_ingredient: { tag: `forge:ingots/${materialName}`, } },
            mold: "immersiveengineering:mold_plate",
            result: { item: material.plate },
        }).id(KJ(`metal_press/${materialName}_plate`))
    }


})