ServerEvents.recipes(event => {
    event.remove({ id: "createbigcannons:compacting/forge_bronze_ingot" })

    for (const [materialName, materialSet] of Object.entries(materials)) {
        if (!materialSet.molten || !materialSet.ingot) continue;


    }
})