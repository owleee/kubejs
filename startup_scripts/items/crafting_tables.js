StartupEvents.registry('block', event => {
    // Crafting table construction //
    event.create("crafting_table_base") // stripped log + leather etc
        .textureAll("kubejs:block/crafting_table/base")
        .texture("up", "kubejs:block/crafting_table/base_top")
        .texture("down", "kubejs:block/crafting_table/base_bottom")

    const craftingTools = ["saw", "hammer", "shears"]
    const toolCombinations = [["saw", "hammer"], ["saw", "shears"], ["hammer", "shears"]]

    craftingTools.forEach(tool => {
        event.create(`crafting_table_with_${tool}`)
            .texture("south", `kubejs:block/crafting_table/side_with_${tool}`)
            .texture("east", `kubejs:block/crafting_table/side_with_${tool}`)
            .texture("north", `kubejs:block/crafting_table/front_with_${tool}`)
            .texture("west", `kubejs:block/crafting_table/front_with_${tool}`)
            .texture("up", `kubejs:block/crafting_table/base_top`)
            .texture("down", `kubejs:block/crafting_table/base_bottom`)
            .texture('particle', 'minecraft:block/stripped_oak_log')
    })
    toolCombinations.forEach(combo => {
        event.create(`crafting_table_with_${combo[0]}_and_${combo[1]}`)
            .texture("south", `kubejs:block/crafting_table/side_with_${combo[0]}_and_${combo[1]}`)
            .texture("east", `kubejs:block/crafting_table/side_with_${combo[0]}_and_${combo[1]}`)
            .texture("north", `kubejs:block/crafting_table/front_with_${combo[0]}_and_${combo[1]}`)
            .texture("west", `kubejs:block/crafting_table/front_with_${combo[0]}_and_${combo[1]}`)
            .texture("up", `kubejs:block/crafting_table/base_top`)
            .texture("down", `kubejs:block/crafting_table/base_bottom`)
            .texture('particle', 'minecraft:block/stripped_oak_log')
    })

})