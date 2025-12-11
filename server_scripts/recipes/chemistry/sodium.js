ServerEvents.recipes(event => {
    event.smelting("kubejs:kelp_ash", "minecraft:dried_kelp_block", 0.1).id("kubejs:kelp_ash")

    event.custom(mixer(
        "minecraft:water",
        "kubejs:kelp_ash",
        "kubejs:alkali_solution"
    )).id("kubejs:mixer/alkali_solution")

    event.custom(centrifuge(
        "kubejs:alkali_solution", [
        "kubejs:soda_ash_solution",
        "kubejs:potash_solution"
    ], "supplementaries:ash"
    )).id("kubejs:centrifuge/alkali_solution")

    event.custom(washing(
        "kubejs:kelp_ash", [
        "60% kubejs:soda_ash_dust",
        "60% kubejs:potash_dust"
    ])).id("kubejs:splashing/kelp_ash")

    event.custom(gravity_separator(
        "#forge:dusts/kelp_ash", [
        "kubejs:soda_ash_dust",
        "75% kubejs:potash_dust"
    ], 200)).id("kubejs:gravity_separator/kelp_ash")

    event.custom(blast_furnace(
        "4x #forge:dusts/sodium_carbonate",
        "kubejs:sodium_ingot",
        "2x kubejs:rich_ash"
    )).id("kubejs:blast_furnace/soda_ash")

    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [],
        "energy": 204800,
        "input": { "tag": "forge:crystal/sodium" },
        "results": [{ "item": "kubejs:sodium_ingot" }],
        "time": 400
    }).id("kubejs:arc_smelting/sodium_crystal")

    event.custom(crystalliser(
        `2i forge:salt`,
        "immersivegeology:crystal_sodium",
        `1u kubejs:chlorine`
    )).id("kubejs:crystalliser/molten_salt")

})