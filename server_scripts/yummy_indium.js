ItemEvents.foodEaten(event => {
    let { player, item, server } = event
    if (item.id !== "kubejs:indium_ingot") return;
    server.scheduleInTicks(2, (c) => {
        player.give("kubejs:indium_ingot")
    })
})