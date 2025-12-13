const itemTypes = ['ingot', 'nugget', 'plate', 'dust', 'pile'];

StartupEvents.registry('item', event => {

    const materialSet = (materialName) => {
        itemTypes.forEach(itemType => {
            event.create(`${materialName}_${itemType}`)
                .texture(`kubejs:item/${itemType}/${materialName}`)
                .tag(`forge:${itemType}s`).tag(`forge:${itemType}s/${materialName}`)
        })
    }

    materialSet("chrome_steel")
    event.create("chrome_steel_ball")
    materialSet("mangalloy")
    materialSet("high_brass")
    materialSet("pipe_bronze");
    materialSet("nichrome")
    materialSet("kanthal")

    ingot(event, "purple_gold")
    dust(event, "purple_gold")

    ingot(event, "metallic_hydrogen")
    plate(event, "metallic_hydrogen");

    dust(event, "antimony")
    ingot(event, "antimony")

    let _ = [
        "molybdenum",
        "nichrome",
        "kanthal",
    ].forEach(i => {
        event.create(`${i}_wire`)
            .texture(`kubejs:item/wire/${i}`)
            .tag("forge:wires").tag(`forge:wires/${i}`)
    });

    // DUSTS //
    _ = [
        "quartz", "copper", "iron", "zinc", "tin", "nickel", "steel", "brass", "gold", "glowstone",
        "ash", "kelp_ash", "silicon", "silica", "raw_silicon", "graphite", "constantan", "neodymium",
        "manganese", "chromium", "high_speed_steel", "sodium", "magnesium", "lead", "uranium", "enriched_uranium"
    ].forEach(i => {
        event.create(`${i}_pile`).displayName(`Pile of ${toTitleCase(i)} Dust`).texture(`kubejs:item/pile/${i}`)
    });
    ["brass", "desh", "ostrum", "calorite", "quartz", "azure_neodymium", "scarlet_neodymium"].forEach(i => {
        event.create(`${i}_dust`)
            .texture(`kubejs:item/dust/${i}`)
            .tag("forge:dusts").tag(`forge:dusts/${i}`)
    })
})