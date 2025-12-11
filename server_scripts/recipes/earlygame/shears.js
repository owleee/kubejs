ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": "forge:shears" },
        "block_in": { "tag": "minecraft:leaves" },
        "post": [
            {
                "type": "drop_item",
                "item": "minecraft:stick",
                "contextual": {
                    "type": "chance",
                    "chance": 0.2
                }
            },
            {
                "type": "drop_item",
                "item": "twigs:twig",
                "contextual": {
                    "type": "chance",
                    "chance": 0.2
                }
            }, {
                "type": "drop_item",
                "item": "minecraft:vine",
                "contextual": {
                    "type": "chance",
                    "chance": 0.075
                }
            },
            {
                "type": "place",
                "block": "minecraft:air",
                "contextual": {
                    "type": "chance",
                    "chance": 0.5
                }
            },
            { type: "damage_item" },
            {
                type: "execute",
                command: "playsound minecraft:entity.sheep.shear block @a ~ ~ ~",
                hide: true
            }
        ]
    }).id(KJ("shear_leaves"))

    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": "forge:shears" },
        "block_in": { "tag": "immersive_weathering:leaf_piles" },
        "post": [
            {
                "type": "drop_item",
                "item": "minecraft:stick",
                "contextual": {
                    "type": "chance",
                    "chance": 0.2
                }
            },
            {
                "type": "drop_item",
                "item": "twigs:twig",
                "contextual": {
                    "type": "chance",
                    "chance": 0.2
                }
            }, {
                "type": "drop_item",
                "item": "minecraft:vine",
                "contextual": {
                    "type": "chance",
                    "chance": 0.075
                }
            },
            {
                "type": "place",
                "block": "minecraft:air",
                "contextual": {
                    "type": "chance",
                    "chance": 0.5
                }
            },
            { type: "damage_item" },
            {
                type: "execute",
                command: "playsound minecraft:entity.sheep.shear block @a ~ ~ ~",
                hide: true
            }
        ]
    }).id(KJ("shear_leaf_pile"))
})