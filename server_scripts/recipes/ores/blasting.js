ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {
            "tag": "forge:crushed_ore/chromite"
        },
        "result": {
            "item": materials.iron.ingot
        },
        "slag": {
            "item": "kubejs:chromite_slag"
        },
        "time": 1800
    }).id("kubejs:blasting/chromite")

    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {
            "tag": "forge:crushed_ore/armstrongite"
        },
        "result": {
            "item": materials.iron.ingot
        },
        "slag": {
            "item": "kubejs:armstrongite_slag"
        },
        "time": 1800
    }).id("kubejs:blasting/armstrongite")
})