ServerEvents.recipes(event => {
    event.replaceInput({ id: "immersiveengineering:crafting/blastbrick" }, "#forge:ingots/brick", "minecraft:brick")
    event.replaceInput({ id: "immersiveengineering:crafting/cokebrick" }, "#forge:ingots/brick", "supplementaries:ash_brick")
})