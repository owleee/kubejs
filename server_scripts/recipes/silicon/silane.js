ServerEvents.recipes(event => {

    // SILANE MIX PRODUCTION //
    event.custom({
        type: "immersivegeology:chemical_reactor",
        energy: 51200,
        itemInput: {
            item: "kubejs:raw_silicon_dust"
        },
        fluidInputA: {
            amount: Chemical.UNIT * 3,
            tag: "forge:hydrochloric_acid"
        },
        fluidResult: {
            amount: Chemical.UNIT * 4,
            fluid: "kubejs:silane_solution"
        },
        result: {
            base_ingredient: [{ item: "kubejs:silicon_impurities_dust" }],
            count: 1
        },
        time: 200
    }).id("kubejs:chemical_reactor/silane_solution");

    // SILANE MIX DISTILLATION //
    event.custom(distillation("1B kubejs:silane_solution", [
        "200mB kubejs:tetrachlorosilane",
        "750mB kubejs:trichlorosilane",
        "50mB kubejs:dichlorosilane",
        "1B ad_astra:hydrogen"
    ], Heat.HEATED, 200))
        .id("kubejs:distillation/silane_solution")

    /*event.custom({
        type: "immersivegeology:chemical_reactor",
        energy: 51200,
        itemInput: ItemIO.NOTHING,
        fluidInputA: {
            amount: Chemical.UNIT * 2,
            tag: "forge:hydrogen"
        },
        fluidInputB: {
            amount: Chemical.UNIT,
            tag: "kubejs:tetrachlorosilane"
        },
        fluidResult: {
            amount: 4 * Chemical.UNIT,
            fluid: "immersivegeology:fluid_hydrochloric_acid"
        },
        result: {
            base_ingredient: [{ item: "kubejs:silicon_dust" }],
            count: 1
        },
        time: 200
    }).id("kubejs:chemical_reactor/tetrachlorosilane_skip");*/

    // SILICON DEPOSITION //
    event.custom({
        type: "immersivegeology:chemical_reactor",
        energy: 51200,
        itemInput: { item: "kubejs:hot_silicon_rod" },
        fluidInputA: {
            amount: Chemical.UNIT * 4,
            tag: "kubejs:trichlorosilane"
        },
        fluidResult: {
            amount: 6 * Chemical.UNIT,
            fluid: "kubejs:hydrochloric_tetrachlorosilane"
        },
        result: {
            base_ingredient: [{ item: "kubejs:partially_deposited_silicon_rod" }],
        },
        time: 200
    }).id("kubejs:chemical_reactor/silicon_deposition_1");

    event.custom({
        type: "immersivegeology:chemical_reactor",
        energy: 51200,
        itemInput: { item: "kubejs:hot_partially_deposited_silicon_rod" },
        fluidInputA: {
            amount: Chemical.UNIT * 4,
            tag: "kubejs:trichlorosilane"
        },
        fluidResult: {
            amount: 6 * Chemical.UNIT,
            fluid: "kubejs:hydrochloric_tetrachlorosilane"
        },
        result: {
            base_ingredient: [{ item: "kubejs:deposited_silicon_rod" }],
        },
        time: 200
    }).id("kubejs:chemical_reactor/silicon_deposition_2");

    // TETRACHLOROSILANE REPROCESSING //
    event.custom({
        type: "immersivegeology:chemical_reactor",
        energy: 51200,
        itemInput: ItemIO.NOTHING,
        fluidInputA: {
            amount: Chemical.UNIT,
            tag: "forge:hydrogen"
        },
        fluidInputB: {
            amount: Chemical.UNIT,
            tag: "kubejs:tetrachlorosilane"
        },
        fluidResult: {
            amount: 2 * Chemical.UNIT,
            fluid: "kubejs:hydrochloric_trichlorosilane"
        },
        result: ItemIO.NOTHING,
        time: 200
    }).id("kubejs:chemical_reactor/tetrachlorosilane_reprocessing");

    // TETRACHLOROSILANE RECYCLING -> SILICA //
    event.custom({
        type: "immersivegeology:chemical_reactor",
        energy: 51200,
        itemInput: ItemIO.NOTHING,
        fluidInputA: {
            amount: Chemical.UNIT * 2,
            tag: "minecraft:water"
        },
        fluidInputB: {
            amount: Chemical.UNIT,
            tag: "kubejs:tetrachlorosilane"
        },
        fluidResult: {
            amount: 4 * Chemical.UNIT,
            fluid: "immersivegeology:fluid_hydrochloric_acid"
        },
        result: {
            base_ingredient: [{ item: "kubejs:silica_dust" }],
            count: 1
        },
        time: 200
    }).id("kubejs:chemical_reactor/tetrachlorosilane_recycling")

    // HYDROCHLORIC CHLOROSILANE DISTILLATIONS //
    event.custom(distillation(
        `${Chemical.UNIT * 3}mB kubejs:hydrochloric_tetrachlorosilane`, [
        `${Chemical.UNIT}mB kubejs:tetrachlorosilane`,
        `${Chemical.UNIT * 2}mB immersivegeology:fluid_hydrochloric_acid`
    ], Heat.HEATED, 200
    )).id("kubejs:distillation/hydrochloric_tetrachlorosilane")

    event.custom(distillation(
        `${Chemical.UNIT * 2}mB kubejs:hydrochloric_trichlorosilane`, [
        `${Chemical.UNIT}mB kubejs:trichlorosilane`,
        `${Chemical.UNIT}mB immersivegeology:fluid_hydrochloric_acid`
    ], Heat.HEATED, 200
    )).id("kubejs:distillation/hydrochloric_trichlorosilane")
})