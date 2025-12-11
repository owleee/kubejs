ServerEvents.recipes(event => {
    event.shaped("kubejs:heavy_duty_shaft", [
        "---",
        "IUI",
        "---"
    ], {
        "-": "#forge:plates/high_speed_steel",
        I: "create:shaft",
        U: "immersiveengineering:concrete_bucket"
    }).id("kubejs:crafting/heavy_duty_shaft")

    event.shaped("kubejs:electrolytic_coil", [
        " S ",
        "-/-",
        "---"
    ], {
        "-": "#forge:plates/stainless_steel",
        S: "immersiveengineering:coil_lv",
        "/": "immersiveengineering:graphite_electrode",
    }).id("kubejs:crafting/electrolytic_coil")
})