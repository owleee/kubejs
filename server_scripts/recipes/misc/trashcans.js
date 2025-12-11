ServerEvents.recipes(event => {
    event.replaceInput({ id: "trashcans:item_trash_can" }, "#forge:chests/wooden", "#kubejs:trash_catalysts")
    event.replaceInput({ id: "trashcans:item_trash_can" }, "#forge:stone", "#forge:plates/iron")
    event.replaceInput({ id: "trashcans:item_trash_can" }, "#forge:cobblestone", "#forge:sheetmetals/iron")

    event.replaceInput({ id: "trashcans:liquid_trash_can" }, "minecraft:bucket", "#kubejs:trash_catalysts")
    event.replaceInput({ id: "trashcans:liquid_trash_can" }, "#forge:stone", "#forge:plates/copper")
    event.replaceInput({ id: "trashcans:liquid_trash_can" }, "#forge:cobblestone", "#forge:sheetmetals/copper")

    event.replaceInput({ id: "trashcans:energy_trash_can" }, "minecraft:redstone", "#kubejs:trash_catalysts")
    event.replaceInput({ id: "trashcans:energy_trash_can" }, "#forge:stone", "#forge:plates/constantan")
    event.replaceInput({ id: "trashcans:energy_trash_can" }, "#forge:cobblestone", "#forge:sheetmetals/constantan")
})