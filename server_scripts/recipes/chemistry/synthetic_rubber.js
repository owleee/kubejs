ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:refinery",
        "catalyst": {
            "item": "kubejs:magnesia_silica_catalyst"
        },
        "energy": 200,
        "input0": {
            "amount": 100,
            "tag": "forge:ethanol"
        },
        "result": {
            "amount": 30,
            "fluid": "kubejs:butadiene"
        }
    }).id("kubejs:refinery/butadiene_from_ethanol")

    event.custom({
        type: "immersivegeology:chemical_reactor",
        "energy": 51200,
        "fluidInputA": {
            "amount": 500,
            "tag": "forge:ethanol"
        },
        "fluidResult": {
            "amount": 300,
            "fluid": "kubejs:butadiene"
        },
        "itemInput": {
            "item": "kubejs:magnesia_silica_catalyst"
        },
        "result": {
            "item": "kubejs:dirty_magnesia_silica_catalyst"
        },
        "time": 200
    }).id("kubejs:chemical_reactor/butadiene_from_ethanol")

    event.custom({
        type: "immersiveengineering:refinery",
        "catalyst": {
            "tag": "forge:dusts/sodium"
        },
        "energy": 200,
        "input0": {
            "amount": 10,
            "tag": "forge:butadiene"
        },
        "result": {
            "amount": 3,
            "fluid": "kubejs:synthetic_rubber"
        }
    }).id("kubejs:refinery/sodium_catalysed_synthetic_rubber_polymerisation")

    /*event.custom({
        type: "immersiveengineering:refinery",
        "catalyst": {
            "item": "kubejs:neodymium_catalyst"
        },
        "energy": 300,
        "input0": {
            "amount": 100,
            "tag": "forge:butadiene"
        },
        "result": {
            "amount": 90,
            "fluid": "kubejs:synthetic_rubber"
        }
    }).id("kubejs:neodymium_catalysed_synthetic_rubber_polymerisation_using_refinery")*/

    event.custom({
        "type": "immersivegeology:chemical_reactor",
        "energy": 51200,
        "fluidInputB": {
            "amount": 100,
            "tag": "forge:butadiene"
        },
        "fluidInputA": {
            "amount": 1000,
            "tag": "kubejs:neodymium_complex"
        },
        "itemInput": {
            "base_ingredient": [

            ],
            "count": 0
        },
        "fluidResult": {
            "amount": 90,
            "fluid": "kubejs:synthetic_rubber"
        },
        "result": {
            "item": "kubejs:neodymium_catalyst"
        },
        "time": 200
    }).id("kubejs:neodymium_catalysed_synthetic_rubber_polymerisation_using_chemical_reactor")
})