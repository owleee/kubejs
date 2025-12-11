ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": MC("logs_that_burn") },
        "block_in": { "tag": KJ("coals") },
        "post": [
            {
                "type": "place",
                "block": KJ("campfire_1_log")
            }
        ]
    }).id(KJ("campfire_1"))

    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": MC("logs_that_burn") },
        "block_in": KJ("campfire_1_log"),
        "post": [
            {
                "type": "place",
                "block": KJ("campfire_2_log")
            }
        ]
    }).id(KJ("campfire_2"))

    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": MC("logs_that_burn") },
        "block_in": KJ("campfire_2_log"),
        "post": [
            {
                "type": "place",
                "block": KJ("campfire_3_log")
            }
        ]
    }).id(KJ("campfire_3"))

    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": MC("logs_that_burn") },
        "block_in": KJ("campfire_3_log"),
        "post": [
            {
                "type": "place",
                "block": {
                    "blocks": ["minecraft:campfire"],
                    "state": {
                        "lit": false
                    }
                }
            }
        ]
    }).id(KJ("campfire"))
})