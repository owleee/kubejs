ServerEvents.recipes(event => {
    // Remove IE hammer crafting recipes 
    event.remove({ id: /immersiveengineering:crafting\/hammercrushing_.+/ })
    event.remove({ id: /immersiveengineering:crafting\/raw_hammercrushing_.+/ })

    for (const [materialName, material] of Object.entries(materials)) {
        if (material.dust && (material.ingot || material.gem)) {
            let itemType = "ingot"
            if (!material.ingot && material.gem) itemType = "gem"

            // CREATE MILLING //
            event.custom({
                type: "create:milling",
                ingredients: [{ tag: `forge:${itemType}s/${materialName}` }],
                processingTime: 400,
                results: [{ item: material.dust }]
            }).id(KJ(`milling/${materialName}`))

            // IE CRUSHER //
            event.custom({
                "type": "immersiveengineering:crusher",
                "energy": 3000,
                "input": {
                    "tag": `forge:${itemType}s/${materialName}`
                },
                "result": {
                    item: material.dust
                },
                "secondaries": []
            }).id(`kubejs:crushing/${materialName}`)
        }

        if (material.pile && material.dust) {
            // PILE <-> DUST CONVERSION //
            event.shapeless(`4x ${material.pile}`, [material.dust])
                .id(`kubejs:crafting/${materialName}_pile`)
            event.shapeless(material.dust, Array(4).fill(material.pile))
                .id(`kubejs:crafting/${materialName}_dust`)
        }

    }
})