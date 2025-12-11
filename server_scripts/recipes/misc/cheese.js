ServerEvents.recipes(event => {
    event.custom({
        "type": "create:compacting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "fluid": "minecraft:milk",
                amount: 1000,
            }
        ],
        "results": [
            {
                "item": "ad_astra:cheese"
            }
        ]
    }).id("kubejs:compacting/cheese")

    event.remove({ id: "create:crafting/kinetics/empty_blaze_burner" })
    event.shaped(
        'create:empty_blaze_burner',
        [
            " S ",
            "SNS",
            "CSC"
        ],
        {
            "C": "ad_astra:cheese_block",
            "S": "#forge:plates/steel",
            "N": "minecraft:netherrack"
        }
    ).id("kubejs:empty_blaze_burner")
})