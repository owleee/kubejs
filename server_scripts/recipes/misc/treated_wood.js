ServerEvents.recipes(event => {

    event.remove({ id: IE("crafting/treated_wood_horizontal") })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": { "tag": "minecraft:planks" },
        "block_in": {
            "blocks": ["immersiveengineering:creosote_fluid_block"],
            "state": { "level": 0 }
        },
        "post": [{
            "type": "drop_item",
            "item": "immersiveengineering:treated_wood_horizontal"
        }, {
            "type": "place",
            "block": "air",
            "contextual": {
                "type": "chance",
                "chance": 0.125
            }
        }]
    }).id(KJ("treated_wood"))

    // TREATED WOOD //

    // remove existing duplicate treated wood filling recipes
    event.remove("create:filling/compat/immersiveengineering/treated_wood_in_spout")
    event.remove("createaddition:filling/treated_wood_planks")

    all_filling(
        event,
        "#minecraft:planks",
        "125mB #forge:creosote",
        "immersiveengineering:treated_wood_horizontal"
    )

    all_filling(
        event,
        "#minecraft:planks",
        "25mB kubejs:ammonium_fluoride",
        "immersiveengineering:treated_wood_horizontal"
    )

    // TREATED FIBERBOARD //
    all_filling(
        event,
        "immersiveengineering:fiberboard",
        "125mB #forge:creosote",
        "kubejs:treated_fiberboard"
    )

    all_filling(
        event,
        "immersiveengineering:fiberboard",
        "25mB kubejs:ammonium_fluoride",
        "kubejs:treated_fiberboard"
    )

    // FIBERBOARD //
    event.remove("immersiveengineering:crafting/fiberboard")

    event.custom(bottling_machine(
        [
            "kubejs:block_mold",
            "8x #forge:dusts/wood"
        ],
        "500mB #forge:phenolic_resin",
        [
            "immersiveengineering:fiberboard",
            "kubejs:block_mold"
        ]
    )).id("kubejs:bottling_machine/fiberboard")

    event.custom(compacting(
        [
            "8x #forge:dusts/wood",
            "500mB #forge:phenolic_resin",
        ],
        "immersiveengineering:fiberboard"
    )).id("kubejs:compacting/fiberboard")
})