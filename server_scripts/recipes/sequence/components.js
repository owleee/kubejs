ServerEvents.recipes(event => {
    // IRON COMPONENT //
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { tag: "forge:plates/iron" },
        loops: 2,
        results: [{ item: "immersiveengineering:component_iron" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_iron_component" },
                    { tag: "forge:rods/copper" }
                ],
                results: [{ item: "kubejs:incomplete_iron_component" }]
            }, {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_iron_component" },
                    { tag: "forge:plates/iron" }
                ],
                results: [{ item: "kubejs:incomplete_iron_component" }]
            }, {
                type: "create:pressing",
                ingredients: [
                    { item: "kubejs:incomplete_iron_component" },
                ],
                results: [{ item: "kubejs:incomplete_iron_component" }]
            }
        ],
        transitionalItem: {
            item: "kubejs:incomplete_iron_component"
        }
    }).id("kubejs:sequenced_assembly/iron_component")

    // STEEL COMPONENT //
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { tag: "forge:plates/steel" },
        loops: 3,
        results: [{ item: "immersiveengineering:component_steel" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_steel_component" },
                    { tag: "forge:rods/copper" }
                ],
                results: [{ item: "kubejs:incomplete_steel_component" }]
            }, {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_steel_component" },
                    { tag: "forge:plates/steel" }
                ],
                results: [{ item: "kubejs:incomplete_steel_component" }]
            }, {
                type: "create:pressing",
                ingredients: [
                    { item: "kubejs:incomplete_steel_component" },
                ],
                results: [{ item: "kubejs:incomplete_steel_component" }]
            }
        ],
        transitionalItem: {
            item: "kubejs:incomplete_steel_component"
        }
    }).id("kubejs:sequenced_assembly/steel_component")
})