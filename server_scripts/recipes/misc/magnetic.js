ServerEvents.recipes(event => {
    event.shaped("kubejs:magnetic_iron_plate",
        [
            " n ",
            "n_n",
            " n "
        ],
        {
            "_": "#forge:plates/iron",
            n: "#forge:dusts/redstone"
        }
    ).id("kubejs:crafting/magnetic_iron_plate")

    event.custom({
        "type": "create_new_age:energising",
        "energy_needed": 1000,
        "ingredients": [{ "tag": "forge:plates/iron" }],
        "results": [{ "item": "kubejs:magnetic_iron_plate" }]
    }).id("kubejs:energising/iron_plate")

    event.custom({
        "type": "create_new_age:energising",
        "energy_needed": 10000,
        "ingredients": [{ "tag": "forge:plates/cobalt" }],
        "results": [{ "item": "kubejs:magnetic_cobalt_plate" }]
    }).id("kubejs:energising/cobalt_plate")
})