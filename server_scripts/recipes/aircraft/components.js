ServerEvents.recipes(event => {
    event.remove({ id: "immersive_aircraft:propeller" })
    event.shaped('immersive_aircraft:propeller', [
        " # ",
        "#o#",
        " # "
    ], {
        "#": "#forge:plates/steel",
        "o": "create:propeller"
    }).id("kubejs:large_rotor_using_steel")

    event.shaped('2x immersive_aircraft:propeller', [
        " # ",
        "#o#",
        " # "
    ], {
        "#": "#forge:plates/aluminum",
        "o": "create:propeller"
    }).id("kubejs:large_rotor_using_aluminium")
})