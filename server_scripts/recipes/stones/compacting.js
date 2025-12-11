ServerEvents.recipes(event => {
    event.remove({ id: "minecraft:granite" })
    event.remove({ id: "minecraft:andesite" })
    event.remove({ id: "minecraft:diorite" })

    event.replaceInput({ id: /create:compacting\/.+_from_flint/ }, "minecraft:flint", "minecraft:quartz")
    event.replaceInput({ id: "create:compacting/diorite_from_flint" }, "minecraft:calcite", "minecraft:sand")

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "supplementaries:ash" },
            { "item": "supplementaries:ash" },
            { "item": "minecraft:magma_block" },
            {
                "amount": 100,
                "fluid": "minecraft:lava",
            }
        ],
        "results": [{ "item": "minecraft:tuff" }]
    }).id("kubejs:compacting/tuff")

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "minecraft:clay_ball" },
            { "item": "minecraft:clay_ball" },
            { "item": "minecraft:mud" },
            {
                "amount": 100,
                "fluid": "minecraft:lava",
            }
        ],
        "results": [{ "item": "quark:shale" }]
    }).id("kubejs:compacting/shale")

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "supplementaries:ash" },
            { "item": "supplementaries:ash" },
            { "item": "minecraft:red_sand" },
            {
                "amount": 100,
                "fluid": "minecraft:lava",
            }
        ],
        "results": [{ "item": "quark:jasper" }]
    }).id("kubejs:compacting/jasper")

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "minecraft:bone_meal" },
            { "item": "minecraft:bone_meal" },
            { "item": "minecraft:sand" },
            {
                "amount": 100,
                "fluid": "minecraft:lava",
            }
        ],
        "results": [{ "item": "minecraft:calcite" }]
    }).id("kubejs:compacting/calcite")

    event.custom({
        "type": "create:compacting",
        "heatRequirement": "superheated",
        "ingredients": [
            { "item": "minecraft:cobblestone" }
        ],
        "results": [{ "item": "minecraft:cobbled_deepslate" }]
    }).id("kubejs:compacting/cobbled_deepslate")

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "minecraft:clay_ball" },
            { "item": "minecraft:clay_ball" },
            { "item": "kubejs:calcite_gravel" },
            {
                "amount": 100,
                "fluid": "minecraft:lava",
            }
        ],
        "results": [{ "item": "create:limestone" }]
    }).id("kubejs:compacting/limestone")

    event.custom({
        "type": "immersivegeology:crystallizer",
        "energy": 38400,
        "fluidResult": {
            "amount": 120 * 4,
            "fluid": "minecraft:water"
        },
        "input": {
            "amount": 144 * 4,
            "tag": "spelunkery:portal_fluid"
        },
        "result": {
            "item": "quark:myalite"
        },
        "time": 300
    }).id("kubejs:crystalliser/myalite")
})