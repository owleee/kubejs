ServerEvents.recipes(event => {
    event.campfireCooking("minecraft:charcoal", "#minecraft:logs_that_burn", 0.15).cookingTime(30 * 20).id(KJ("charcoal_campfire"))
})