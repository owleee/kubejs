ServerEvents.recipes(event => {
    event.custom({
        "type": "create:compacting",
        "ingredients": [{
            "amount": 250,
            "fluid": "kubejs:latex"
        }],
        "results": [{
            "item": "kubejs:raw_rubber"
        }, {
            "fluid": "minecraft:water",
            "amount": 150
        }]
    }).id("kubejs:compacting/latex_to_rubber")

    event.smelting("kubejs:rubber", "kubejs:raw_rubber").xp(0.4).id(KJ("raw_rubber"))
    event.campfireCooking("kubejs:rubber", "kubejs:raw_rubber", 0.4).cookingTime(30 * 20).id(KJ("raw_rubber_campfire"))

    event.custom({
        "type": "create:compacting",
        "ingredients": [{
            "amount": 250,
            "fluid": "kubejs:synthetic_rubber"
        }],
        "results": [{ "item": "kubejs:rubber" }]
    }).id("kubejs:compacting/synthetic_to_rubber")
})