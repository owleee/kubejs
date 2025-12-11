ServerEvents.recipes(event => {
    event.remove({ id: "minecraft:wooden_shovel" })
    // FLINT SAW //
    event.shaped(MC("wooden_shovel"), [
        '#_',
        '/#'
    ], {
        "/": "#forge:rods/wooden",
        "_": '#minecraft:wooden_slabs',
        "#": "#kubejs:primitive_tool_bindings"
    }).id(KJ("wooden_shovel"))
})