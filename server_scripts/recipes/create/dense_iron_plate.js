ServerEvents.recipes(event => {
    let transitionalItem = "kubejs:incomplete_dense_iron_plate"
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: item("#forge:plates/iron"),
        loops: 1,
        results: [item("kubejs:dense_iron_plate")],
        sequence: [
            deploying(
                transitionalItem,
                `#forge:plates/iron`,
                transitionalItem
            ),
            pressing(
                transitionalItem,
                transitionalItem
            )
        ],
        transitionalItem: item(transitionalItem)
    }).id("kubejs:sequenced_assembly/dense_iron_plate")
})