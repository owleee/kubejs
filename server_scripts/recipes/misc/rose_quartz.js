ServerEvents.recipes(event => {
    // ROSE QUARTZ //
    event.remove({ id: "create:crafting/materials/rose_quartz" })
    event.remove({ id: "spelunkery:rose_quartz" })
    let roseQuartzChain =
        ["kubejs:quartz_pile", "kubejs:small_rose_quartz_bud", "kubejs:medium_rose_quartz_bud", "kubejs:large_rose_quartz_bud", "create:rose_quartz"]

    for (let i = 0; i < roseQuartzChain.length - 1; i++) {
        event.custom({
            "type": "lychee:item_inside",
            "item_in": { "item": roseQuartzChain[i] },
            "block_in": {
                "blocks": ["immersiveengineering:redstone_acid_fluid_block"],
                "state": { "level": 0 }
            },
            "post": [{
                "type": "drop_item",
                "item": roseQuartzChain[i + 1]
            }, {
                "type": "place",
                "block": "water",
                "contextual": {
                    "type": "chance",
                    "chance": 0.05
                }
            }],
            "time": 30
        }).id(KJ(`rose_quartz_${i}`));

        event.custom({
            "type": "create:filling",
            "ingredients": [
                { "item": roseQuartzChain[i] },
                {
                    "amount": 250,
                    "fluid": IE("redstone_acid")
                }],
            "results": [{ "item": roseQuartzChain[i + 1] }]
        }).id(KJ(`rose_quartz_${i}_using_spout`));
    }
})