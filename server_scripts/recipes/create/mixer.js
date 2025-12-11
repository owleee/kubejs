ServerEvents.recipes(event => {
    event.remove({ id: /create:.*mechanical_mixer/ })
    event.shaped('create:mechanical_mixer', [
        " I ",
        "xOx",
        " U "
    ], {
        "I": "create:piston_extension_pole",
        "x": "create:cogwheel",
        "O": "create:andesite_casing",
        "U": "create:whisk"
    }).id("kubejs:mechanical_mixer")
})