ServerEvents.recipes(event => {
    // REDSTONE ACID //
    event.remove({ id: IE("crafting/redstone_acid") })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": { "item": "minecraft:redstone" },
        "block_in": {
            "blocks": ["minecraft:water"],
            "state": { "level": 0 }
        },
        "post": [{
            "type": "place",
            "block": "immersiveengineering:redstone_acid_fluid_block",
            "contextual": {
                "type": "chance",
                "chance": 0.125
            }
        }]
    }).id("kubejs:redstone_acid")
})