ServerEvents.recipes(event => {
    // ALUMINIUM COMPONENTS //
    event.remove({ mod: "create", output: "create:andesite_alloy", input: "minecraft:andesite" })
    event.replaceInput({ id: "create:crafting/kinetics/whisk" }, "#forge:plates/iron", "#forge:rods/iron")
    event.replaceInput({ id: "create:crafting/kinetics/whisk" }, "create:andesite_alloy", "create:shaft")
    event.replaceInput({ id: "create:crafting/kinetics/propeller" }, "create:andesite_alloy", "create:shaft")
    event.replaceInput({ id: "create:crafting/kinetics/hand_crank" }, "create:andesite_alloy", "create:shaft")
    // aluminium whisk //
    event.shaped('4x create:whisk', [
        " o ",
        "/o/",
        "///"
    ], {
        "/": "#forge:rods/aluminum",
        "o": "create:shaft"
    }).id("kubejs:whisk_from_aluminium")
    // stainless whisk
    event.shaped('16x create:whisk', [
        " o ",
        "/o/",
        "///"
    ], {
        "/": "#forge:rods/stainless_steel",
        "o": "create:shaft"
    }).id("kubejs:whisk_from_stainless")

    // aluminium propeller //
    event.shaped('4x create:propeller', [
        " # ",
        "#o#",
        " # "
    ], {
        "#": "#forge:plates/aluminum",
        "o": "create:shaft"
    }).id("kubejs:propeller_from_aluminium")

    // hss propeller
    event.shaped('16x create:propeller', [
        " # ",
        "#o#",
        " # "
    ], {
        "#": "#forge:plates/highspeedsteel",
        "o": "create:shaft"
    }).id("kubejs:propeller_from_hss")


    // BASIN
    event.replaceInput({ id: "create:crafting/kinetics/basin" }, "create:andesite_alloy", "#forge:plates/steel")


    // DEPOT
    event.remove({ id: "create:crafting/kinetics/depot" })
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": "forge:hammer" },
        "block_in": Casing.STEEL,
        "post": [
            { "type": "place", "block": `create:depot`, },
            { type: "damage_item" },
            {
                type: "execute",
                command: "playsound immersiveengineering:metal_press_smash block @a",
                hide: true
            }
        ]
    }).id(KJ(`squashing/depot_using_hammer`))

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: Casing.STEEL }],
        result: [
            { item: "create:depot" }
        ],
        tool: { tag: "forge:hammer" }
    }).id(KJ(`squashing/depot_using_worksurface`))

    event.custom(pressing(Casing.STEEL, ["create:depot"])).id(`kubejs:pressing/depot`)

    event.remove({ id: /create_new_age:energising.+/ })
    event.replaceInput({ id: "create_new_age:shaped/carbon_brushes" }, "create:andesite_alloy", "#forge:plates/steel")
    event.replaceInput({ id: "create_new_age:shaped/carbon_brushes" }, "minecraft:coal", "immersiveengineering:graphite_electrode")
    event.replaceInput({ id: "create_new_age:shaped/carbon_brushes" }, "create:shaft", "immersiveengineering:coil_lv")

    event.remove({ id: "create_mechanical_extruder/crafting/mechanical_extruder" })
    event.shaped("create_mechanical_extruder:mechanical_extruder", [
        "CMC",
        "PDP",
        "CSC"
    ], {
        M: "create:mechanical_press",
        P: "create:mechanical_pump",
        C: "create:andesite_casing",
        D: "create:mechanical_drill",
        S: "minecraft:smooth_stone"
    }).id("kubejs:crafting/mechanical_extruder")

    // Belt
    event.remove({ id: "create:crafting/kinetics/belt_connector" })
    event.shaped('create:belt_connector',
        ['OsO'], {
        O: "#kubejs:rubber_substitutes",
        s: "#kubejs:stitching"
    }).id("kubejs:crafting/belt")
})