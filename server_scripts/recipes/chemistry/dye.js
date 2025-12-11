ServerEvents.recipes(event => {
    // LEAD RED //
    event.blasting("minecraft:red_dye", "#forge:nuggets/lead", 0.1).id("kubejs:lead_red")

    // LEAD WHITE //
    event.remove({ id: "immersiveengineering:crafting/lead_white" })
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
            {
                "type": "immersiveengineering:fluid",
                "amount": 1000,
                "tag": "forge:acetic_acid"
            },
            {
                "tag": "forge:dusts/lead"
            }
        ],
        "result": {
            "count": 16,
            "item": "minecraft:white_dye"
        }
    }).id("kubejs:lead_white")
})