// priority: -9999999

ServerEvents.recipes(recipe => {

    COLOURS.forEach(colour => {
        recipe.custom(mixer(
            "#minecraft:water",
            `#forge:dyes/${colour}`,
            `kubejs:${colour}_dye`,
        )).id(`kubejs:mixer/${colour}_dye`)

        recipe.custom(bottling_machine_casting(
            `kubejs:${colour}_dye`,
            "kubejs:ball_mold",
            `minecraft:${colour}_dye`,
        )).id(`kubejs:bottling/${colour}_dye`)
    })

    recipe.custom(mixer(
        "#minecraft:water",
        `#forge:dyes/iridescent`,
        `kubejs:iridescent_dye`,
    )).id(`kubejs:mixer/iridescent_dye`)

    recipe.custom(mixer(
        "#minecraft:water",
        `#forge:dusts/bismuth`,
        `kubejs:iridescent_dye`,
    )).id(`kubejs:mixer/iridescent_dye_from_bismuth`)

    recipe.custom(bottling_machine_casting(
        `kubejs:iridescent_dye`,
        "kubejs:ball_mold",
        `kubejs:iridescent_dye`,
    )).id(`kubejs:bottling/iridescent_dye`)
})