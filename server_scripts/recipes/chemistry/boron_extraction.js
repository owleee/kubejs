ServerEvents.recipes(event => {
    event.custom({
        type: "immersivegeology:chemical_reactor",
        energy: 51200,
        fluidInputA: {
            amount: 2500,
            tag: "minecraft:water"
        }, fluidInputB: {
            amount: 250,
            tag: "forge:sulfuric_acid"
        }, itemInput: { base_ingredient: { tag: "forge:dusts/borax" } },
        result: { item: "immersivegeology:compound_dust_sodium" },
        fluidResult: {
            amount: 5 * 250,
            fluid: "kubejs:boric_solution"
        }, time: 200
    }).id("kubejs:chemical_reactor/boric_acid")

    event.custom({
        type: "immersivegeology:centrifuge",
        energy: 614400,
        fluid_input: {
            amount: 5 * 250,
            tag: "kubejs:aqueous_boric_acid"
        }, item_output: {
            base_ingredient: { item: "kubejs:boric_acid_dust" },
            count: 4
        }, primary_fluid_out: {
            amount: 5 * 250,
            fluid: "minecraft:water"
        }, secondary_fluid_out: {
            amount: 0,
            fluid: "minecraft:empty"
        }, time: 1200
    }).id("kubejs:centrifuge/boric_solution")

    event.custom({
        type: "immersivegeology:rotary_kiln",
        heat: 120,
        input: { tag: "forge:dusts/boric_acid" },
        result: {
            base_ingredient: { item: "kubejs:boron_oxide" },
            count: 2
        },
        time: 300
    }).id("kubejs:rotary_kiln/boron_oxide")

    event.custom({
        type: "immersiveengineering:arc_furnace",
        additives: [],
        energy: 204800,
        additives: [{
            base_ingredient: { tag: "forge:dusts/aluminum" },
            count: 2
        }],
        input: {
            base_ingredient: { item: "kubejs:boron_oxide" },
            count: 2
        },
        "results": [{
            base_ingredient: { "item": "kubejs:boron_dust" },
            count: 2
        }],
        slag: { item: "immersivegeology:metal_oxide_aluminum" },
        time: 400
    }).id("kubejs:arc_smelting/boron_using_aluminium")

    event.custom({
        type: "immersiveengineering:arc_furnace",
        additives: [],
        energy: 204800,
        additives: [{
            base_ingredient: { tag: "forge:dusts/magnesium" },
            count: 3
        }],
        input: {
            base_ingredient: { item: "kubejs:boron_oxide" },
            count: 2
        },
        "results": [{
            base_ingredient: { "item": "kubejs:boron_dust" },
            count: 2
        }],
        slag: {
            base_ingredient: { item: "immersivegeology:metal_oxide_magnesium" },
            count: 3
        },
        time: 400
    }).id("kubejs:arc_smelting/boron_using_magnesium")
})
