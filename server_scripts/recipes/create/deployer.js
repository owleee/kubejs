ServerEvents.recipes(event => {
    // MECHANICAL PRESS //
    // Modify mechanical press recipe to more accurately represent the component //
    event.remove({ id: /create:.*deployer/ })
    event.shaped('create:deployer', [
        "AIA",
        "oOo",
        " G "
    ], {
        "A": "immersiveengineering:electron_tube",
        "I": "create:piston_extension_pole",
        "o": "create:shaft",
        "O": "create:andesite_casing",
        "G": "create:brass_hand"
    }).id("kubejs:deployer")
})