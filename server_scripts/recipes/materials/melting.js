const div = (a, b) => Math.round(a / b);


ServerEvents.recipes(event => {

    event.remove({
        mod: "createdieselgenerators",
        type: "createdieselgenerators:bulk_fermenting"
    })

    for (const [materialName, materialSet] of Object.entries(materials)) {
        if (!materialSet.molten || !materialSet.ingot) continue;

        let _ = [
            Heat.HEATED,
            Heat.SUPER
        ].forEach((heatLevel, index) => {
            let multiplier = 1 / (index + 1);

            let id = (heatLevel == Heat.SUPER) ? "_superheated" : "";

            // ingot
            event.custom(bulk_vat(
                `#forge:ingots/${materialName}`,
                `1i ${materialSet.molten}`,
                heatLevel,
                ((materialSet._melting_point / 10) || 100) * multiplier
            )).id(`kubejs:vat_melting/${materialName}${id}`);

            // block
            if (materialSet.block) event.custom(bulk_vat(
                `#forge:storage_blocks/${materialName}`,
                `9i ${materialSet.molten}`,
                heatLevel,
                ((materialSet._melting_point / 10) || 100) * 9 * multiplier
            )).id(`kubejs:vat_melting/${materialName}_block${id}`);

            // nugget
            if (materialSet.nugget) event.custom(bulk_vat(
                `#forge:nuggets/${materialName}`,
                `${Amount.NUGGET}mB ${materialSet.molten}`,
                heatLevel,
                ((materialSet._melting_point / 10) || 100) * (1 / 9) * multiplier
            )).id(`kubejs:vat_melting/${materialName}_nugget${id}`);

            // plate
            if (materialSet.plate) event.custom(bulk_vat(
                `#forge:plates/${materialName}`,
                `1i ${materialSet.molten}`,
                heatLevel,
                ((materialSet._melting_point / 10) || 100) * multiplier
            )).id(`kubejs:vat_melting/${materialName}_plate${id}`);

            if (materialSet.wire) event.custom(bulk_vat(
                `#forge:wires/${materialName}`,
                `${Amount.WIRE}mB ${materialSet.molten}`,
                heatLevel,
                ((materialSet._melting_point / 10) || 100) * (1 / 4) * multiplier
            )).id(`kubejs:vat_melting/${materialName}_wire${id}`);
        })
    }
})