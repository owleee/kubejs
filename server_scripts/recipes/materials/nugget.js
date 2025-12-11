ServerEvents.recipes(event => {
    for (const [materialName, material] of Object.entries(materials)) {
        if (material.ingot && material.nugget) {
            // INGOT <-> NUGGET CONVERSION //
            event.shapeless(`9x ${material.nugget}`, [material.ingot])
                .id(`kubejs:crafting/${materialName}_nugget`)
            event.shapeless(material.ingot, Array(9).fill(material.nugget))
                .id(`kubejs:crafting/${materialName}_ingot`)
        }
    }
})