ServerEvents.recipes(event => {
    event.remove({ id: /immersivegeology:chemical_reactor\/leach_crushed_ore_gold_to_slurry.*/ })
    event.custom({
        "type": "immersivegeology:chemical_reactor",
        "energy": 51200,
        "fluidInputA": {
            "amount": 250,
            "tag": "forge:hydrochloric_acid"
        },
        "fluidInputB": {
            "amount": 250,
            "tag": "forge:nitric_acid"
        },
        "fluidResult": {
            "amount": 432,
            "fluid": "immersivegeology:slurry_aqua_regia_gold"
        },
        "itemInput": {
            "item": "immersivegeology:crushed_ore_gold"
        },
        "result": {
            "item": "immersivegeology:compound_dust_platinum",
            "count": 1
        },
        "time": 200
    }).id("kubejs:leach/gold")

    event.custom({
        "type": "immersivegeology:chemical_reactor",
        "energy": 51200,
        "fluidInputA": {
            "amount": 500,
            "tag": "forge:aqua_regia"
        },
        "fluidResult": {
            "amount": 432,
            "fluid": "immersivegeology:slurry_aqua_regia_gold"
        },
        "itemInput": {
            "item": "immersivegeology:crushed_ore_gold"
        },
        "result": {
            "item": "immersivegeology:compound_dust_platinum"
        },
        "time": 200
    }).id("kubejs:leach/gold_using_aqua_regia")
})