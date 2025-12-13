ServerEvents.recipes(event => {
    event.custom(ballmill(
        "minecraft:netherite_scrap",
        "kubejs:debris_powder"
    ))

    event.custom(arc_furnace(
        "kubejs:bonded_netherite_nanoparticles",
        ["#forge:ingots/purple_gold", "#forge:dusts/boron"],
        "minecraft:netherite_ingot",
        "kubejs:hellish_slag"
    )).id("kubejs:arc_furnace/netherite")
})

// 3 nege- ne- oh fuck
// netherite ingots
// YESSIR