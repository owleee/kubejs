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
})