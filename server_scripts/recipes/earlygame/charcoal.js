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

    all_crushing(event, "#forge:charcoal", "kubejs:charcoal_dust")

    event.custom(washing(
        "#forge:dusts/charcoal", [
        "60% kubejs:carbon_dust",
        "60% supplementaries:ash"
    ])).id("kubejs:splashing/charcoal_dust")

    event.custom(gravity_separator(
        "#forge:dusts/charcoal", [
        "kubejs:carbon_dust",
        "75% supplementaries:ash"
    ], 200)).id("kubejs:gravity_separator/charcoal_dust")
})