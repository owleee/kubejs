ServerEvents.recipes(event => {
    // wash gravel //
    event.custom({
        "type": "lychee:item_inside",
        "item_in": { "item": "minecraft:gravel" },
        "block_in": "minecraft:flowing_water",
        "post": [{
            "type": "drop_item",
            "item": "minecraft:flint",
            "contextual": {
                "type": "chance",
                "chance": 0.125
            }
        }, {
            "type": "drop_item",
            "item": "twigs:pebble",
            "contextual": {
                "type": "chance",
                "chance": 0.125
            }
        }],
        "time": 5

    }).id(KJ("wash_gravel"))
})