ServerEvents.recipes(event => {

    const Motors = {
        LV: "create_new_age:basic_motor",
        MV: "create_new_age:advanced_motor",
        HV: "create_new_age:reinforced_motor"
    }

    // LV (BASIC) MOTOR //
    event.remove("create_new_age:shaped/basic_motor")
    event.shaped(Motors.LV, [
        "s_/",
        "-S-",
        "s_/"
    ], {
        "s": "immersiveengineering:wirecoil_copper",
        "S": "immersiveengineering:coil_lv",
        "_": "kubejs:magnetic_iron_plate",
        "-": "create:shaft",
        "/": "#forge:plates/desh"
    }).id("kubejs:lv_motor")

    // MV (ADVANCED) MOTOR //
    event.remove("create_new_age:shaped/advanced_motor")
    event.shaped(Motors.MV, [
        "s_/",
        "CS-",
        "s_/"
    ], {
        "s": "immersiveengineering:wirecoil_electrum",
        "S": "immersiveengineering:coil_mv",
        "_": "kubejs:magnetic_cobalt_plate",
        "-": "create:shaft",
        "C": "create_new_age:carbon_brushes",
        "/": "#forge:plates/ostrum"
    }).id("kubejs:mv_motor")

    event.remove({ id: "create_new_age:reinforced_motor" })

    // HV (REINFORCED) MOTOR //
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: true,
        key: {
            "/": { tag: "forge:plates/highspeedsteel" },
            "C": { item: "create_new_age:carbon_brushes" },
            "S": { item: "immersiveengineering:coil_hv" },
            "-": { item: "create:shaft" },
            "c": { item: "create:railway_casing" },
            "N": { tag: "forge:plates/scarlet_neodymium" },
            "A": { tag: "forge:plates/azure_neodymium" },
            "s": { item: "immersiveengineering:wirecoil_steel" }
        },
        pattern: [
            "sNN//",
            "CcS--",
            "sAA//"
        ],
        result: { "item": Motors.HV }
    }).id("kubejs:hv_motor")

    // DISCOUNT RECIPES //
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "Motors",
        "inputs": [
            { "item": "create:shaft" },
            { "item": "kubejs:magnetic_iron_plate" },
            { "item": "immersiveengineering:coil_lv" }
        ],
        "result": {
            "count": 4,
            "item": Motors.LV
        }
    }).id("kubejs:blueprint/lv_motor")

    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "Motors",
        "inputs": [
            { "item": "create:shaft" },
            { "item": "immersiveengineering:graphite_electrode" },
            { "item": "kubejs:magnetic_cobalt_plate" },
            { "item": "immersiveengineering:coil_mv" }
        ],
        "result": {
            "count": 2,
            "item": Motors.MV
        }
    }).id("kubejs:blueprint/mv_motor")

    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "Motors",
        "inputs": [
            { "item": "create_new_age:carbon_brushes" },
            { "item": "immersiveengineering:coil_hv" },
            { "tag": "forge:plates/scarlet_neodymium" },
            { "tag": "forge:plates/azure_neodymium" }
        ],
        "result": {
            "item": Motors.HV
        }
    }).id("kubejs:blueprint/ult_motor")
})