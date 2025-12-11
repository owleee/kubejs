ServerEvents.recipes(event => {
    event.shaped("kubejs:wooden_gear", [
        " _ ",
        "_ _",
        " _ "
    ], {
        "_": "#minecraft:wooden_slabs"
    }).id("kubejs:crafting/wooden_gear")

    event.shaped("kubejs:large_wooden_gear", [
        " _ ",
        "_x_",
        " _ "
    ], {
        "_": "#minecraft:wooden_slabs",
        "x": "kubejs:wooden_gear"
    }).id("kubejs:crafting/upgrade_wooden_gear")

    event.shaped("kubejs:large_wooden_gear", [
        "___",
        "_ _",
        "___"
    ], {
        "_": "#minecraft:wooden_slabs"
    }).id("kubejs:crafting/large_wooden_gear")


    // SMALL COGWHEEL //
    event.remove({ mod: "create", output: /create:.*cogwheel/ })
    event.shapeless(
        'create:cogwheel', [
        "create:shaft",
        "kubejs:wooden_gear"
    ]).id(KJ("crafting/cog"))
    event.custom(application("create:shaft", "kubejs:wooden_gear", "create:cogwheel")).id("kubejs:application/small_cog")

    // BIG COGWHEEL //
    event.shapeless(
        'create:large_cogwheel', [
        "kubejs:large_wooden_gear",
        "create:shaft",]
    ).id(KJ("crafting/big_cog"))
    event.shapeless(
        'create:large_cogwheel', [
        "create:cogwheel",
        "kubejs:wooden_gear"
    ]).id(KJ("crafting/big_cog_from_small_cog"))

    event.custom(application("create:shaft", "kubejs:large_wooden_gear", "create:large_cogwheel")).id("kubejs:application/big_cog")

    event.custom(application("create:cogwheel", "kubejs:wooden_gear", "create:large_cogwheel")).id("kubejs:application/big_cog_from_small_cog")

})