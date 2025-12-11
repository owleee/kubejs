ServerEvents.recipes(event => {

    event.shapeless("kubejs:magnesia_silica_catalyst", [
        "#forge:dusts/silicon_dioxide",
        "immersivegeology:metal_oxide_magnesium"
    ]).id("kubejs:magnesia_silica_catalyst")

    event.shapeless("kubejs:gold_magnesia_catalyst", [
        "#forge:dusts/gold",
        "immersivegeology:metal_oxide_magnesium"
    ]).id("kubejs:gold_magnesia_catalyst")

    // ACETIC ACID (ACETALDEHYDE) //
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": {
            "tag": "kubejs:acetic_acid_catalysts"
        },
        "energy": 120,
        "input0": {
            "amount": 10,
            "tag": "forge:acetaldehyde"
        },
        "result": {
            "amount": 9,
            "fluid": "kubejs:acetic_acid"
        }
    }).id("kubejs:acetic_acid_from_acetaldehyde")

    // ACETIC ACID (FERMENTATION) //
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": {
            "tag": "kubejs:fermentation_catalysts"
        },
        "energy": 120,
        "input0": {
            "amount": 10,
            "tag": "forge:ethanol"
        },
        "result": {
            "amount": 5,
            "fluid": "kubejs:acetic_acid"
        }
    }).id("kubejs:acetic_acid_from_ethanol")

    // TRI-ETHYL-ALUMINIUM //
    // this is slightly fictionalised because i don't want too much granular chemistry
    // also i dont want to make ethylene its own thing because i don't want to make polyethylene a thing
    // so this will do
    // no hydrogenation step but i guess that can be provided by the acid or something who cares
    event.custom({
        "type": "immersivegeology:chemical_reactor",
        "energy": 51200,
        "fluidInputB": {
            "amount": 250,
            "tag": "forge:sulfuric_acid"
        },
        "fluidInputA": {
            "amount": 250,
            "tag": "forge:ethanol"
        },
        "fluidResult": {
            "amount": 500,
            "fluid": "kubejs:triethylaluminium"
        },
        "itemInput": {
            "tag": "forge:dusts/aluminum"
        },
        "result": [],
        "time": 200
    }).id("triethylaluminium_using_sulfuric_acid")
    event.custom({
        "type": "immersivegeology:chemical_reactor",
        "energy": 51200,
        "fluidInputA": {
            "amount": 250,
            "tag": "forge:phosphoricacid"
        },
        "fluidInputB": {
            "amount": 250,
            "tag": "forge:ethanol"
        },
        "fluidResult": {
            "amount": 500,
            "fluid": "kubejs:triethylaluminium"
        },
        "itemInput": {
            "tag": "forge:dusts/aluminum"
        },
        "result": [],
        "time": 200
    }).id("triethylaluminium_using_phosphoric_acid")

    // NEODYMIUM CATALYST DUST //
    event.custom({
        "type": "immersivegeology:chemical_reactor",
        "energy": 51200,
        "fluidInputA": {
            "amount": 1000,
            "tag": "forge:acetic_acid"
        },
        "fluidInputB": {
            "amount": 1000,
            "tag": "kubejs:triethylaluminium"
        },
        "itemInput": {
            "base_ingredient": {
                "item": "immersivegeology:metal_oxide_neodymium"
            }
        },
        "result": {
            "item": "kubejs:neodymium_catalyst"
        },
        "fluidResult": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "time": 200
    }).id("neodymium_catalyst")

    event.custom({
        "type": "immersiveengineering:mixer",
        "energy": 3200,
        "fluid": {
            "amount": 1000,
            "tag": "forge:creosote"
        },
        "inputs": [
            {
                "base_ingredient": {
                    "item": "kubejs:neodymium_catalyst"
                },
            }
        ],
        "result": {
            "amount": 1000,
            "fluid": "kubejs:neodymium_complex"
        }
    }).id("kubejs:neodymium_complex")
})