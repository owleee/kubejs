StartupEvents.registry('item', event => {
    event.create("poor_ore_nickel").displayName("Poor Garnierite").tag("forge:poor_ore").tag("forge:poor_ore/garnierite")
    event.create("rich_ore_nickel").displayName("Rich Garnierite").tag("forge:rich_ore").tag("forge:rich_ore/garnierite")
    event.create("dirty_crushed_ore_nickel").displayName("Dirty Crushed Garnierite").tag("forge:dirty_crushed_ore").tag("forge:dirty_crushed_ore/garnierite")
    event.create("crushed_ore_nickel").displayName("Crushed Garnierite").tag("forge:crushed_ore").tag("forge:crushed_ore/garnierite")
    event.create("garnierite_pellet").tag("forge:pellets").tag("forge:pellets/garnierite")
    event.create("garnierite_dust").tag("forge:dusts").tag("forge:dusts/garnierite")
    event.create("garnierite_powder").tag("forge:powders").tag("forge:powders/garnierite");

    ["vermillanite", "cerudialyte", "armstrongite", "watneyite", "venerite"].forEach(nd => {
        event.create(`dirty_crushed_${nd}`)
            .tag("forge:dirty_crushed_ore")
            .tag(`forge:dirty_crushed_ore/${nd}`)
            .texture(`kubejs:item/ore/dirty_${nd}`)
        event.create(`crushed_${nd}`).tag("forge:crushed_ore").tag(`forge:crushed_ore/${nd}`)
            .texture(`kubejs:item/ore/crushed_${nd}`)
        event.create(`${nd}_dust`).tag("forge:dusts").tag(`forge:dusts/${nd}`)
            .texture(`kubejs:item/ore/${nd}_dust`)
        event.create(`${nd}_powder`).tag("forge:powders").tag(`forge:powders/${nd}`)
            .texture(`kubejs:item/ore/${nd}_powder`)
    });

    ["garnierite", "monazite", "uraninite", "thorite", "thorianite", "platinum", "silver", "acanthite", "cobaltite", "millerite", "cassiterite", "cuprite", "chalcocite", "chalcopyrite", "magnetite", "pyrite", "ilmenite", "sphalerite", "lead", "galena", "molybdenite", "vanadinite", "pyrolusite", "chromite", "alumina", "bauxite", "cryolite", "anatase", "wolframite", "scheelite", "gypsum", "fluorite", "apatite", "zircon", "unobtania"
    ].forEach(ore => {
        let name = (["platinum", "silver", "lead"].includes(ore)) ? `Native ${toTitleCase(ore)} Nugget` : `${toTitleCase(ore)} Nugget`;
        event.create(`${ore}_nugget`).displayName(name).tag(`forge:materials/${ore}`).texture(`kubejs:item/ore_nugget/${ore}`)
    })

    event.create("lignite_lump").displayName("Lump of Lignite").burnTime(4.25 * 10 * 20 * 0.2)
    event.create("bituminous_lump").displayName("Lump of Bituminous Coal").burnTime(8 * 10 * 20 * 0.2)
    event.create("anthracite_lump").displayName("Lump of Anthracite").burnTime(16 * 10 * 20 * 0.2);

    ;["chromite", "armstrongite"].forEach(ore => {
        event.create(`${ore}_slag`)
            .texture(`kubejs:item/ore/${ore}_slag`)
            .tag(`forge:slag/${ore}`).tag(`forge:special_slag`)
        event.create(`${ore}_slag_powder`)
            .texture(`kubejs:item/ore/${ore}_slag_powder`)
            .tag(`forge:powdered_slag/${ore}`)
    })
    event.create("desh_oxide")
        .texture("kubejs:item/ore/desh_oxide")
    event.create("desh_oxide_pellet")
        .texture("kubejs:item/ore/desh_oxide_pellet")
    event.create("desh_compound")
        .texture("kubejs:item/ore/desh_compound")
})