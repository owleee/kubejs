ServerEvents.recipes(event => {

    event.remove("minecraft:glass")
    event.remove("immersive_weathering:glass_from_vitrified_sand_smelting")
    event.remove("yungscavebiomes:glass_from_ancient_sand")

    event.shapeless("9x kubejs:glass_dust", [
        "7x #forge:sand",
        "#forge:dusts/sodium_carbonate",
        "#forge:dusts/calcium_carbonate",
    ]).id("kubejs:soda_lime_glass_dust")

    event.custom(arc_furnace(
        "9x #forge:sand", [
        "#forge:dusts/sodium_carbonate",
        "#forge:dusts/calcium_carbonate",
    ], "10x minecraft:glass"
    )).id("kubejs:arc_smelting/soda_lime_glass")
})