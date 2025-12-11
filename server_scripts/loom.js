BlockEvents.rightClicked(event => {
    let { block, item, entity } = event
    if (block === "minecraft:loom" && item.hasTag("kubejs:loomable")) {
        event.cancel();
    }
})

