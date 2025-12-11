StartupEvents.registry('block', event => {
    // Campfire building //
    event.create('minecraft:coal')
        .fullBlock(false)
        .transparent(true)
        .model("kubejs:block/campfire_base")
        .box(3, 0, 3, 13, 1, 13)
        .noCollision()
        .defaultCutout()
        .tagBlock("kubejs:coals")
        .soundType("gravel")
        .item(item => {
            item.modelJson({
                "parent": "minecraft:item/generated",
                "textures": {
                    "layer0": "minecraft:item/coal"
                }
            })
        })
    event.create('minecraft:charcoal')
        .fullBlock(false)
        .transparent(true)
        .model("kubejs:block/campfire_base")
        .box(3, 0, 3, 13, 1, 13)
        .noCollision()
        .defaultCutout()
        .soundType("gravel")
        .tagBlock("kubejs:coals")
        .item(item => {
            item.modelJson({
                "parent": "minecraft:item/generated",
                "textures": {
                    "layer0": "minecraft:item/charcoal"
                }
            })
        })
    event.create("campfire_1_log")
        .displayName("Campfire (1/4)")
        .fullBlock(false)
        .transparent(true)
        .model("kubejs:block/campfire_1")
        .box(0, 0, 0, 16, 4, 16)
        .defaultCutout()
    event.create("campfire_2_log")
        .displayName("Campfire (2/4)")
        .fullBlock(false)
        .transparent(true)
        .model("kubejs:block/campfire_2")
        .box(0, 0, 0, 16, 4, 16)
        .defaultCutout()
    event.create("campfire_3_log")
        .displayName("Campfire (3/4)")
        .fullBlock(false)
        .transparent(true)
        .model("kubejs:block/campfire_3")
        .box(0, 0, 0, 16, 7, 16)
        .defaultCutout()
})