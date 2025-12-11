ServerEvents.recipes(event => {

    event.remove({ id: "immersive_aircraft:gyrodyne" })
    event.shaped('immersive_aircraft:gyrodyne', [
        " r ",
        "fsf",
        "wch"
    ], {
        "r": "immersive_aircraft:propeller",
        "f": "immersive_aircraft:sail",
        "c": "create:hand_crank",
        "h": "immersive_aircraft:hull",
        "s": "#create:seats",
        "w": "kubejs:wheel"
    }).id("kubejs:gyrodyne")
})