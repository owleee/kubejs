ServerEvents.recipes(event => {
    // VACUUM TUBES //
    event.replaceInput({ input: "create:electron_tube" }, "create:electron_tube", "immersiveengineering:electron_tube")
    event.remove({ id: "create:crafting/materials/electron_tube" })
    event.remove({ id: IE("blueprint/electron_tube") })
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            { "tag": "forge:plates/nickel" },
            { "tag": "forge:wires/copper" },
            { "item": "create:polished_rose_quartz" }
        ],
        "result": {
            "count": 3,
            "item": "immersiveengineering:electron_tube"
        }
    }).id(KJ("electron_tube"))

    // MECHANICAL HAND //
    event.remove({ id: "create:crafting/kinetics/brass_hand" })
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            { base_ingredient: { "tag": "forge:plates/gold" }, count: 2 },
            { "tag": "forge:rods/gold" },
            { "tag": "forge:plates/steel" },
            { "item": "create:cogwheel" }
        ],
        "result": {
            "item": "create:brass_hand"
        }
    }).id(KJ("mechanical_hand_from_gold"))
})