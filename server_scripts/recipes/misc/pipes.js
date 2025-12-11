ServerEvents.recipes(event => {
    event.remove({ id: /create:crafting\/kinetics\/fluid_pipe.*/ })
    event.shaped('8x create:fluid_pipe', [
        "___",
        "   ",
        "___"
    ], {
        "_": "#forge:plates/pipe_bronze"
    }).id("kubejs:fluid_pipe")
    event.remove({ id: "immersiveengineering:crafting/fluid_pipe" })
    event.custom({
        type: "create:item_application",
        ingredients: [
            { item: "create:fluid_pipe" },
            { tag: "forge:plates/iron" }],
        results: [{ item: "immersiveengineering:fluid_pipe" }]
    }).id(KJ("iron_pipe"))
})