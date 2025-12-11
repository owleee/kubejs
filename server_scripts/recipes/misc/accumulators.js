ServerEvents.recipes(event => {
    event.remove({ id: "immersiveengineering:crafting/capacitor_lv" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "a": {
                "tag": "forge:plates/lead"
            },
            "e": {
                "type": "immersiveengineering:fluid",
                "amount": 1000,
                "tag": "kubejs:battery_acids"
            },
            "f": {
                "tag": "forge:ingots/iron"
            },
            "w": {
                "tag": "forge:treated_wood"
            }
        },
        "pattern": [
            "waw",
            "fef",
            "waw"
        ],
        "result": {
            "item": "immersiveengineering:capacitor_lv"
        },
        "show_notification": true
    })

    event.remove({ id: "immersiveengineering:crafting/capacitor_mv" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "a": {
                "tag": "forge:plates/nickel"
            },
            "c": {
                "tag": "forge:plates/iron"
            },
            "e": {
                "type": "immersiveengineering:fluid",
                "amount": 1000,
                "tag": "kubejs:battery_acids"
            },
            "f": {
                "tag": "forge:ingots/steel"
            },
            "w": {
                "tag": "forge:treated_wood"
            }
        },
        "pattern": [
            "waw",
            "fef",
            "wcw"
        ],
        "result": {
            "item": "immersiveengineering:capacitor_mv"
        },
        "show_notification": true
    })

    event.remove({ id: "immersiveengineering:crafting/capacitor_hv" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "a": {
                "tag": "forge:plates/aluminum"
            },
            "c": {
                "tag": "forge:ingots/hop_graphite"
            },
            "e": {
                "type": "immersiveengineering:fluid",
                "amount": 1000,
                "tag": "kubejs:battery_acids"
            },
            "f": {
                "tag": "forge:ingots/steel"
            },
            "w": {
                "tag": "forge:treated_wood"
            }
        },
        "pattern": [
            "waw",
            "fef",
            "wcw"
        ],
        "result": {
            "item": "immersiveengineering:capacitor_hv"
        },
        "show_notification": true
    })

    event.remove({ id: /createaddition:crafting\/modular_accumulator_(gold|electrum)/ })
})