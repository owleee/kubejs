ServerEvents.recipes(event => {
    event.campfireCooking(
        "minecraft:charcoal",
        "#minecraft:logs_that_burn",
        0.15
    )
        .cookingTime(30 * 20)
        .id(KJ("charcoal_campfire"))

    event.remove("supplementaries:ash_soot")
    event.shapeless("kubejs:carbon_dust",
        ["9x immersive_weathering:soot"]
    ).id("kubejs:carbon_dust")

    event.remove("minecraft:charcoal")
    event.remove("immersive_weathering:charred_log")
    event.smelting("immersive_weathering:charred_log",
        "#minecraft:logs_that_burn"
    ).xp(0.15).id("kubejs:smelting/charcoal")
})