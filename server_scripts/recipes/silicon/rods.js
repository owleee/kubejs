ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:metal_press",
        energy: 4800,
        input: {
            base_ingredient: { tag: "forge:ingots/raw_silicon" },
            count: 16
        },
        mold: "immersiveengineering:mold_rod",
        result: { item: "kubejs:silicon_rod" }
    }).id("kubejs:metal_press/raw_silicon_rod")

    event.custom({
        type: "immersiveengineering:metal_press",
        energy: 4800,
        input: {
            base_ingredient: { tag: "forge:ingots/silicon" },
            count: 4
        },
        mold: "immersiveengineering:mold_rod",
        result: { item: "kubejs:silicon_rod" }
    }).id("kubejs:metal_press/silicon_rod")

    event.smelting("kubejs:hot_silicon_rod", "kubejs:silicon_rod")
        .id("kubejs:smelting/silicon_rod")
    event.blasting("kubejs:hot_silicon_rod", "kubejs:silicon_rod")
        .id("kubejs:blasting/silicon_rod")
    event.smelting("kubejs:hot_partially_deposited_silicon_rod", "kubejs:partially_deposited_silicon_rod")
        .id("kubejs:smelting/partial_silicon_rod")
    event.blasting("kubejs:hot_partially_deposited_silicon_rod", "kubejs:partially_deposited_silicon_rod")
        .id("kubejs:blasting/partial_silicon_rod")

    // crushing partially deposited silicon rods //
    event.custom(milling("kubejs:partially_deposited_silicon_rod", [
        "4x kubejs:silicon_dust",
        "90% kubejs:silicon_dust",
        "1% kubejs:silicon_seed"
    ])).id("kubejs:milling/partial_silicon_rod")

    event.custom(crushing("kubejs:partially_deposited_silicon_rod", [
        "4x kubejs:silicon_dust",
        "90% kubejs:silicon_dust",
        "20% kubejs:silicon_dust",
        "1% kubejs:silicon_seed"
    ])).id("kubejs:crushing/partial_silicon_rod")

    event.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: { item: "kubejs:partially_deposited_silicon_rod" },
        result: { item: materials.silicon.dust, count: 4 },
        secondaries: [{
            chance: 0.9,
            output: { item: materials.silicon.dust }
        }, {
            chance: 0.4,
            output: { item: materials.silicon.dust }
        }, {
            chance: 0.01,
            output: { item: "kubejs:silicon_seed" }
        }]
    }).id(KJ(`crusher/partial_silicon_rod`))

    // crushing fully deposited silicon rods - 50%ish bonus//
    event.custom(milling("kubejs:deposited_silicon_rod", [
        "4x kubejs:silicon_dust",
        "2x kubejs:silicon_dust",
        "10% kubejs:silicon_dust",
        "1% kubejs:silicon_seed"
    ])).id("kubejs:milling/deposited_silicon_rod")

    event.custom(crushing("kubejs:deposited_silicon_rod", [
        "4x kubejs:silicon_dust",
        "2x kubejs:silicon_dust",
        "40% kubejs:silicon_dust",
        "3% kubejs:silicon_seed"
    ])).id("kubejs:crushing/deposited_silicon_rod")

    event.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: { item: "kubejs:deposited_silicon_rod" },
        result: { item: materials.silicon.dust, count: 6 },
        secondaries: [{
            chance: 0.7,
            output: { item: materials.silicon.dust }
        }, {
            chance: 0.05,
            output: { item: "kubejs:silicon_seed" }
        }]
    }).id(KJ(`crusher/deposited_silicon_rod`))

})