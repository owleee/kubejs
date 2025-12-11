ServerEvents.recipes(event => {
    [
        "minecraft:paper",
        "quark:tweaks/crafting/utility/bent/paper",
        "arsdelight:paper_from_barks",
        "farmersdelight:paper_from_tree_bark",
        "immersiveengineering:crafting/paper_from_sawdust",
        "corn_delight:paper_from_corncob",
        "create:pressing/sugar_cane"
    ].forEach(id => {
        event.remove({ id: id })
    })

    event.replaceInput({ id: "create:mixing/cardboard_pulp" }, "#create:pulpifiable", "#kubejs:plant_pulp")

    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "tag": "create:pulpifiable"
        },
        "result": {
            "item": "kubejs:plant_pulp"
        },
        "secondaries": []
    }).id("kubejs:crushing/pulp")

    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "item": "create:pulp"
        },
        "result": {
            "item": "kubejs:fine_pulp"
        },
        "secondaries": []
    }).id("kubejs:crushing/fine_pulp")

    event.custom({
        "type": "createaddition:rolling",
        "input": {
            "item": "kubejs:fine_pulp"
        },
        "result": {
            "item": "minecraft:paper",
            "count": 2
        }
    }).id("kubejs:rolling/paper")
})