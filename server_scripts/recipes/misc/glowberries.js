ServerEvents.recipes(event => {
    event.custom({
        "type": "create:milling",
        "ingredients": [{ "item": "kubejs:dried_glowberries" }],
        "processingTime": 150,
        "results": [{ "item": "kubejs:glowstone_pile" }]
    }).id("kubejs:milling/glowberries")

    event.smelting("kubejs:dried_glowberries", "minecraft:glow_berries").xp(0.1).id("kubejs:smelting/glowberries")
    event.campfireCooking("kubejs:dried_glowberries", "minecraft:glow_berries", 0.1).cookingTime(30 * 20).id("kubejs:campfire/glowberries")
})