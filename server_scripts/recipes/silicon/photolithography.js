ServerEvents.recipes(event => {
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: item("kubejs:passivated_silicon_wafer"),
        results: [
            item("90% kubejs:etched_silicon_wafer"),
            item("2.5% kubejs:silicon_dust"),
            item("2.5% kubejs:silicon_seed"),
            item("2.5% kubejs:silicon_wafer"),
            item("2.5% kubejs:passivated_silicon_wafer")
        ],
        loops: 1,
        sequence: [{
            type: "create:filling",
            ingredients: [
                { item: "kubejs:masked_silicon_wafer" },
                { amount: 1000, fluidTag: "forge:photoresist" }
            ], results: [{ item: "kubejs:masked_silicon_wafer" }]
        }, {
            type: "create:deploying",
            ingredients: [
                { item: "kubejs:masked_silicon_wafer" },
                { item: "kubejs:photolithography_mask" }
            ], results: [{ item: "kubejs:masked_silicon_wafer" }]
        }, {
            type: "vintage:laser_cutting",
            ingredients: [
                { item: "kubejs:masked_silicon_wafer" }],
            results: [{
                item: "kubejs:masked_silicon_wafer"
            }],
            energy: 2000,
            maxChargeRate: 50
        }, {
            type: "create:filling",
            ingredients: [
                { item: "kubejs:masked_silicon_wafer" },
                { amount: 1000, fluidTag: "kubejs:etchant" }
            ], results: [{ item: "kubejs:masked_silicon_wafer" }]
        }],
        transitionalItem: {
            item: "kubejs:masked_silicon_wafer"
        }
    }).id("kubejs:photolithography")
})