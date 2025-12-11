ServerEvents.recipes(event => {

    event.custom({
        type: "immersiveengineering:mixer",
        energy: 1600,
        fluid: {
            amount: 4000,
            tag: "forge:silicon"
        },
        inputs: [{ item: "kubejs:silicon_seed" }],
        result: {
            amount: 4000,
            fluid: "kubejs:seeded_silicon"
        }
    }).id("kubejs:mixing/seeded_silicon")

    event.custom({
        type: "immersivegeology:crystallizer",
        energy: 4096 * 120 * 20,
        fluidResult: {
            amount: 0,
            fluid: "minecraft:empty"
        },
        input: {
            amount: 4000,
            tag: "kubejs:seeded_silicon"
        },
        result: {
            item: "kubejs:silicon_boule"
        },
        time: 120 * 20
    }).id("immersivegeology:crystallizer/silicon_boule")

    event.custom(cutting("kubejs:silicon_boule", ["8x kubejs:silicon_wafer", "20% 2x kubejs:silicon_wafer", "5% kubejs:silicon_dust", "90% kubejs:silicon_seed"])).id("kubejs:cutting/silicon_boule")

    // TODO: make boule 3d so its pretty on the sawmill
    event.custom({
        type: "immersiveengineering:sawmill",
        energy: 1600,
        input: { item: "kubejs:silicon_boule" },
        result: {
            count: 10,
            item: "kubejs:silicon_wafer"
        },
        secondaries: [{
            output: { item: "kubejs:silicon_seed", },
            stripping: false
        }, {
            output: { item: "kubejs:silicon_dust", },
            stripping: false
        }]
    }).id("kubejs:sawmill/silicon_boule")

    // PASSIVATION //

    event.custom({
        type: "immersivegeology:rotary_kiln",
        heat: 165,
        input: {
            item: "kubejs:silicon_wafer"
        },
        result: {
            item: "kubejs:passivated_silicon_wafer"
        },
        time: 1200
    }).id("kubejs:rotary_kiln/rawdog_passivation")

    event.custom({
        type: "immersivegeology:rotary_kiln",
        heat: 120,
        input: { item: "kubejs:wet_silicon_wafer" },
        result: { item: "kubejs:passivated_silicon_wafer" },
        time: 800
    }).id("kubejs:rotary_kiln/wet_passivation")

    // WETTING //

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 8000,
            tag: "minecraft:water"
        },
        input: { item: "kubejs:silicon_wafer" },
        results: [{ item: "kubejs:wet_ish_silicon_wafer" }]
    }).id("kubejs:bottling/wet_ish_silicon_wafer")

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 8000,
            tag: "minecraft:water"
        },
        input: { item: "kubejs:wet_ish_silicon_wafer" },
        results: [{ item: "kubejs:wet_silicon_wafer" }]
    }).id("kubejs:bottling/wet_silicon_wafer")

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: item("kubejs:silicon_wafer"),
        results: [item("kubejs:wet_silicon_wafer")],
        loops: 16,
        sequence: [{
            type: "create:filling",
            ingredients: [
                { item: "kubejs:wet_ish_silicon_wafer" },
                { amount: 1000, fluid: "minecraft:water" }
            ], results: [{ item: "kubejs:wet_ish_silicon_wafer" }]
        }],
        transitionalItem: item("kubejs:wet_ish_silicon_wafer")
    }).id("kubejs:filling/wet_silicon_wafer")

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 4000,
            tag: "forge:steam"
        },
        input: { item: "kubejs:silicon_wafer" },
        results: [{ item: "kubejs:wet_silicon_wafer" }]
    }).id("kubejs:bottling/wet_silicon_wafer_using_steam")

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: item("kubejs:silicon_wafer"),
        results: [item("kubejs:wet_silicon_wafer")],
        loops: 4,
        sequence: [{
            type: "create:filling",
            ingredients: [
                { item: "kubejs:wet_ish_silicon_wafer" },
                { amount: 1000, fluidTag: "forge:steam" }
            ], results: [{ item: "kubejs:wet_ish_silicon_wafer" }]
        }],
        transitionalItem: item("kubejs:wet_ish_silicon_wafer")
    }).id("kubejs:filling/wet_silicon_wafer_using_steam")
})