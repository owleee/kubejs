ServerEvents.recipes(event => {
    // MECHANICAL PRESS //
    // Modify mechanical press recipe to more accurately represent the component //
    event.remove({ id: /create:.*mechanical_press/ })
    event.shaped('create:mechanical_press', [
        " I ",
        "/O/",
        " B "
    ], {
        "I": "create:piston_extension_pole",
        "/": "create:shaft",
        "O": "create:andesite_casing",
        "B": "#kubejs:heavy_stuff"
    }).id("kubejs:mechanical_press")

    event.shaped("minecraft:anvil", [
        "oOo",
        " o ",
        "ooo"
    ], {
        O: "#forge:storage_blocks/steel",
        o: "#forge:ingots/steel"
    }).id("kubejs:steel_anvil")

    event.shaped("minecraft:anvil", [
        "ooo",
        " o ",
        "ooo"
    ], {
        o: ["#forge:ingots/tungsten"]
    }).id("kubejs:tungsten_anvil")
})