ServerEvents.recipes(event => {
    event.remove({ id: "minecraft:crafting_table" })
    event.custom({
        type: "create:item_application",
        ingredients: [
            { tag: "forge:stripped_logs" },
            { tag: KJ("leather_substitutes") }],
        results: [{ item: KJ(`crafting_table_base`) }]
    }).id(KJ(`crafting_table_base`))

    const craftingTools = ["saw", "hammer", "shears"]
    const toolCombinations = [["saw", "hammer"], ["saw", "shears"], ["hammer", "shears"]]

    return // i can't work out how to consume the tools entirely

    craftingTools.forEach(tool => {
        event.custom({
            type: "create:item_application",
            ingredients: [
                { item: KJ("crafting_table_base") },
                { tag: `forge:${tool}` }],
            results: [{ item: KJ(`crafting_table_with_${tool}`) }]
        }).id(KJ(`crafting_table_with_${tool}`))
    })
})