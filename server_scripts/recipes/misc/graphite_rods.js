ServerEvents.recipes(event => {
    event.remove({ id: "immersiveengineering:blueprint/graphite_electrode" })
    event.remove({ id: "immersiveengineering:metalpress/electrode" })

    event.custom({
        type: "create:filling",
        ingredients: [{
            tag: "forge:dusts/carbon"
        }, {
            amount: 1000,
            fluid: "immersiveengineering:creosote",
        }],
        results: [{ item: "kubejs:carbon_mixture" }]
    }).id("kubejs:filling/carbon_mixture");

    event.shapeless(
        'kubejs:carbon_compound',
        ["9x kubejs:carbon_mixture"]
    ).id(KJ("crafting/carbon_compound"))

    event.custom({
        type: "immersiveengineering:metal_press",
        energy: 4800,
        input: { item: "kubejs:carbon_compound" },
        mold: "immersiveengineering:mold_rod",
        result: { item: "kubejs:unsintered_graphite_rod" }
    }).id(KJ("metal_press/unsintered_electrode"))

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "kubejs:carbon_compound" }],
        result: [
            { item: "kubejs:unsintered_graphite_rod" }
        ],
        tool: { item: "immersiveengineering:mold_rod" }
    }).id(KJ("unsintered_graphite_rod_using_worksurface"))

    event.custom({
        type: "immersiveengineering:blast_furnace",
        input: { item: "kubejs:unsintered_graphite_rod" },
        result: {
            item: "immersiveengineering:graphite_electrode",
            nbt: `{graphDmg:${96000 * 9 / 10}}`
        },
        "time": 3600
    }).id(KJ("blasting/electrode"))

    /*event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {
            "tag": "forge:dusts/quartz"
        },
        "result": {
            "item": "kubejs:carborundum"
        },
        "time": 3600
    }).id(KJ("blasting/carborundum"))*/

    event.shapeless(
        'kubejs:carborundum_compound',
        ["4x immersiveengineering:dust_coke", "5x #forge:dusts/silicon_dioxide"]
    ).id(KJ("crafting/carborundum_compound_more_silica"))

    event.shapeless(
        'kubejs:carborundum_compound',
        ["5x immersiveengineering:dust_coke", "4x #forge:dusts/silicon_dioxide"]
    ).id(KJ("crafting/carborundum_compound_more_coke"))


    event.custom({
        type: "immersivegeology:rotary_kiln",
        heat: 75,
        input: {
            item: "kubejs:carborundum_compound"
        },
        result: {
            item: "kubejs:carborundum"
        },
        time: 300
    }).id("kubejs:rotary_kiln/carborundum")

    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [],
        "energy": 204800,
        "input": {
            "tag": "forge:gems/moissanite"
        },
        "results": [{ "item": "kubejs:graphite_nugget" }],
        "slag": { "item": "immersiveengineering:slag" },
        "time": 400
    }).id("kubejs:arc_smelting/graphite")

    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 4800,
        "input": {
            "base_ingredient": {
                "tag": "forge:ingots/graphite"
            },
            "count": 4
        },
        "mold": "immersiveengineering:mold_rod",
        "result": {
            "item": "immersiveengineering:graphite_electrode",
            "nbt": "{graphDmg:48000}"
        }
    }).id("kubejs:metal_press/electrode")
})