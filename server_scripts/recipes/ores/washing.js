ServerEvents.recipes(event => {
    event.remove({ id: /immersivegeology:crafting\/wash_dirty_.+/ })
    event.remove({ id: /immersivegeology:wash\/wash_dirty_crushed_ore_.+_to_crushed/ })

    for (const [name, ore] of Object.entries(ores)) {

        let dirty = `forge:dirty_crushed_ore/${name}`

        event.custom({
            "type": "lychee:item_inside",
            "item_in": { "tag": dirty },
            "block_in": "minecraft:water",
            "post": [{
                "type": "drop_item",
                "item": ore.crushed_ore
            }, {
                "type": "place",
                "block": "air",
                "contextual": {
                    "type": "chance",
                    "chance": 0.5
                }
            }],
            "time": 2
        }).id(KJ(`washing/item_inside/dirty_${name}_ore`))

        event.custom({
            "type": "lychee:block_interacting",
            "item_in": { "tag": dirty },
            "block_in": {
                "blocks": ["minecraft:water_cauldron"],
                "state": { "level": 3 }
            },
            "post": [{
                "type": "drop_item",
                "item": ore.crushed_ore
            }, {
                "type": "place",
                "block": "cauldron",
                "contextual": {
                    "type": "chance",
                    "chance": 0.125
                }
            }]
        }).id(KJ(`washing/cauldron/dirty_${name}_ore`))

        event.custom({
            "type": "create:splashing",
            "ingredients": [
                {
                    "tag": dirty
                }
            ],
            "results": [
                {
                    "item": ore.crushed_ore
                }
            ]
        }).id(KJ(`washing/splashing/dirty_${name}_ore`))

        event.custom({
            "type": "immersivegeology:gravity_separator",
            "byproduct": {
                "item": "minecraft:gravel"
            },
            "byproduct_chance": 0.33,
            "input": {
                "tag": dirty
            },
            "result": {
                "item": ore.crushed_ore
            },
            "time": 100,
            "water": 100
        }).id(KJ(`washing/gravity_separator/dirty_${name}_ore`))
    }

})