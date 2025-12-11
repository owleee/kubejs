ServerEvents.recipes(event => {

    event.custom(mixing(
        ["minecraft:water 1B", "minecraft:clay_ball"],
        ["immersivegeology:fluid_binding_agent 500mB"]
    )).id("kubejs:mixing/binding_agent")

    event.forEachRecipe({ type: "immersivegeology:pelletizer" }, recipe => {
        let json = JSON.parse(recipe.json)

        event.custom({
            type: "create:sequenced_assembly",
            ingredient: json.input,
            loops: 1,
            results: [
                { item: json.result.item, chance: 80 },
                { item: "minecraft:clay_ball", chance: 10 },
                { item: SLAG, chance: 9.5 },
                { item: "kubejs:alien_slag", chance: 0.5 }
            ],
            sequence: [{
                "type": "create:filling",
                "ingredients": [
                    json.input,
                    { "amount": 1000, "fluidTag": "forge:binding_agent" }
                ],
                "results": [json.result]
            }],
            transitionalItem: { item: "minecraft:clay_ball" }
        }).id(`kubejs:filling/${json.result.item.path}`)
    })

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "kubejs:desh_oxide" },
        loops: 1,
        results: [
            { item: "kubejs:desh_oxide_pellet", chance: 80 },
            { item: "minecraft:clay_ball", chance: 10 },
            { item: "kubejs:alien_slag", chance: 10 }
        ],
        sequence: [{
            "type": "create:filling",
            "ingredients": [
                { item: "kubejs:desh_oxide" },
                { "amount": 1000, "fluidTag": "forge:binding_agent" }
            ],
            "results": [{ item: "kubejs:desh_oxide_pellet" }]
        }],
        transitionalItem: { item: "minecraft:clay_ball" }
    }).id(`kubejs:filling/desh_oxide_pellet`)

    event.custom({
        "type": "immersivegeology:pelletizer",
        "energy": 4800,
        "input": { "item": "kubejs:desh_oxide" },
        "result": { "item": "kubejs:desh_oxide_pellet" },
        "time": 600
    }).id("kubejs:pelletizer/desh_oxide")
})