ServerEvents.recipes(event => {
    // BLAST BRICKS //
    event.remove({ id: IE("crafting/blastbrick_reinforced") })
    event.custom({
        type: "create:item_application",
        ingredients: [
            { item: IE("blastbrick") },
            { tag: "forge:plates/steel" }],
        results: [{ item: IE("blastbrick_reinforced") }]
    }).id(KJ("reinforced_blastbrick"))

    // FIRE BRICKS //
    event.remove({ id: IG("crafting/craft_reinforced_refractory_bricks") })
    event.custom({
        type: "create:item_application",
        ingredients: [
            { item: IG("storage_block_refractory_brick") },
            { tag: "forge:plates/pipe_bronze" }],
        results: [{ item: IG("storage_block_reinforced_refractory_brick") }]
    }).id(KJ("reinforced_firebrick"))
})