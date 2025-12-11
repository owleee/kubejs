ServerEvents.recipes(event => {
    event.remove({ id: "immersiveengineering:crafting/concrete" })
    event.custom(mixing(["500mB minecraft:water", "2x minecraft:sand", "#forge:gravel", "minecraft:clay_ball"], "250mB immersiveengineering:concrete")).id("kubejs:mixing/concrete")

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "fluid": "immersiveengineering:concrete",
                amount: 1000
            }
        ],
        "results": [
            {
                "item": "immersiveengineering:concrete"
            }
        ]
    }).id("kubejs:compacting/concrete")

    event.remove({ id: "immersivegeology:crafting/craft_reinforced_concrete" })
    event.custom({
        type: "minecraft:crafting_shaped",
        category: "building",
        group: "ig_engineering",
        key: {
            C: {
                type: "immersiveengineering:fluid",
                amount: 1000,
                tag: "forge:concrete"
            },
            P: {
                tag: "forge:plates/steel"
            },
            R: {
                tag: "forge:rods/steel"
            },
            W: {
                tag: "forge:wires/steel"
            }
        },
        pattern: [
            "PWP",
            "RCR",
            "PWP"
        ],
        result: {
            item: "immersivegeology:storage_block_srconcrete"
        },
    }).id("kubejs:crafting/reinforced_concrete")

    event.remove(/minecraft:.+_concrete_powder/)
    event.remove(/createdieselgenerators:mixing\/.+_concrete/)
    COLOURS.forEach(colour => {
        event.custom({
            "type": "immersiveengineering:mixer",
            "energy": 3200,
            "fluid": {
                "amount": 1000,
                "tag": "forge:concrete"
            },
            "inputs": [
                {
                    "tag": `forge:dyes/${colour}`
                }
            ],
            "result": {
                "amount": 1000,
                "fluid": `createdieselgenerators:${colour}_cement`
            }
        }).id(`kubejs:mixer/${colour}_concrete`)
    })
})