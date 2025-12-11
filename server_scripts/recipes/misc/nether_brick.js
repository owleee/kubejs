ServerEvents.recipes(event => {
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:netherrack"
            }
        ],
        "processingTime": 250,
        "results": [
            {
                "item": "create:cinder_flour"
            }
        ]
    })

    event.remove({ id: "minecraft:nether_brick" })
    event.smelting("minecraft:nether_brick", "create:cinder_flour").xp(0.4).id(KJ("nether_brick"))
    event.campfireCooking("minecraft:nether_brick", "create:cinder_flour", 0.4).cookingTime(30 * 20).id(KJ("nether_brick_campfire"))
    event.campfireCooking("minecraft:brick", "minecraft:clay_ball", 0.3).cookingTime(30 * 20).id(KJ("brick_campfire"))
    event.campfireCooking("supplementaries:ash_brick", "supplementaries:ash", 0.3).cookingTime(30 * 20).id(KJ("ash_brick_campfire"))
})