ServerEvents.recipes(event => {
    event.remove({ id: "create_new_age:shaped/generator_coil" })
    event.shaped("create_new_age:generator_coil", [
        "SSS",
        "S/S",
        "SSS"
    ], {
        "/": "create:shaft",
        S: "immersiveengineering:coil_lv",
    }).id("kubejs:generator_coil_lv")

    event.shaped("create_new_age:generator_coil", [
        "sSs",
        "S/S",
        "sSs"
    ], {
        "/": "create:shaft",
        "S": "immersiveengineering:coil_mv",
        "s": "immersiveengineering:wirecoil_electrum",
    }).id("kubejs:generator_coil_mv")

    event.shaped("create_new_age:generator_coil", [
        "sss",
        "s/s",
        "sss"
    ], {
        "/": "create:shaft",
        "s": "immersiveengineering:wirecoil_steel",
    }).id("kubejs:generator_coil_hv")
})