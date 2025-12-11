ServerEvents.recipes(event => {
    // LIGHT ENGINEERING MECHANISM //
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { tag: "forge:plates/copper" },
        loops: 2,
        results: [{ item: "kubejs:light_engineering_mechanism" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_light_engineering_mechanism" },
                    { item: "immersiveengineering:component_iron" }
                ],
                results: [{ item: "kubejs:incomplete_light_engineering_mechanism" }]
            }, {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_light_engineering_mechanism" },
                    { item: "immersiveengineering:electron_tube" }
                ],
                results: [{ item: "kubejs:incomplete_light_engineering_mechanism" }]
            }, {
                type: "create:pressing",
                ingredients: [
                    { item: "kubejs:incomplete_light_engineering_mechanism" },
                ],
                results: [{ item: "kubejs:incomplete_light_engineering_mechanism" }]
            }
        ],
        transitionalItem: {
            item: "kubejs:incomplete_light_engineering_mechanism"
        }
    }).id("kubejs:sequenced_assembly/light_engineering_mechanism")

    // HEAVY ENGINEERING MECHANISM //
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { tag: "forge:plates/electrum" },
        loops: 3,
        results: [{ item: "kubejs:heavy_engineering_mechanism" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_heavy_engineering_mechanism" },
                    { item: "immersiveengineering:component_steel" }
                ],
                results: [{ item: "kubejs:incomplete_heavy_engineering_mechanism" }]
            }, {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_heavy_engineering_mechanism" },
                    { item: "immersiveengineering:component_electronic_adv" }
                ],
                results: [{ item: "kubejs:incomplete_heavy_engineering_mechanism" }]
            }, {
                type: "create:pressing",
                ingredients: [
                    { item: "kubejs:incomplete_heavy_engineering_mechanism" },
                ],
                results: [{ item: "kubejs:incomplete_heavy_engineering_mechanism" }]
            }
        ],
        transitionalItem: {
            item: "kubejs:incomplete_heavy_engineering_mechanism"
        }
    }).id("kubejs:sequenced_assembly/heavy_engineering_mechanism")
})