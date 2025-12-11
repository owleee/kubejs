ServerEvents.recipes(event => {
    for (const [materialName, material] of Object.entries(materials)) {
        if (
            material.cookType === "furnace"
            && material.ingot && material.dust
        ) {
            event.smelting(material.ingot, material.dust).id(`kubejs:smelting/${materialName}`)
            event.blasting(material.ingot, material.dust).id(`kubejs:blasting/${materialName}`)
        } else if (material._flags.includes("smelt_gem") && material.gem && material.dust) {
            // Allows some materials to smelt dust into gems (e.g. glass)
            event.smelting(material.gem, material.dust).id(`kubejs:smelting/${materialName}`)
            event.blasting(material.gem, material.dust).id(`kubejs:blasting/${materialName}`)
        }
    }
})