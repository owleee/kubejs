ServerEvents.recipes(event => {

    event.remove({ id: IE("crafting/treated_wood_horizontal") })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": { "tag": "minecraft:planks" },
        "block_in": {
            "blocks": ["immersiveengineering:creosote_fluid_block"],
            "state": { "level": 0 }
        },
        "post": [{
            "type": "drop_item",
            "item": "immersiveengineering:treated_wood_horizontal"
        }, {
            "type": "place",
            "block": "air",
            "contextual": {
                "type": "chance",
                "chance": 0.125
            }
        }]
    }).id(KJ("treated_wood"))
})