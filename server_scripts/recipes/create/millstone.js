ServerEvents.recipes(event => {
    event.remove({ id: C("crafting/kinetics/millstone") })
    event.shaped('create:millstone', [
        ' x ',
        ' _ ',
        ' _ '
    ], {
        x: C("cogwheel"),
        _: "#kubejs:stone_slabs"
    }).id("kubejs:millstone")
})