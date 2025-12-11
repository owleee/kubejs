const craftingTools = ["saw", "hammer", "shears"]
const toolCombinations = [["saw", "hammer"], ["saw", "shears"], ["hammer", "shears"]]

// look upon my terrible code, ye mighty, and despair
BlockEvents.rightClicked(event => {
    const takeOne = () => { if (!event.entity.isCreative()) event.item.count-- }
    if (event.block.id === KJ("crafting_table_base")) craftingTools.forEach(tool => {
        if (!event.item.hasTag(`forge:${tool}`)) return

        event.block.set("kubejs:crafting_table_with_" + tool)
        takeOne()
    })

    // adding second tool to crafting table that already has a saw
    else if (event.block.id === KJ("crafting_table_with_saw")) {
        if (event.item.hasTag("forge:hammer")) {
            event.block.set("kubejs:crafting_table_with_saw_and_hammer")
            takeOne()
        } else if (event.item.hasTag("forge:shears")) {
            event.block.set("kubejs:crafting_table_with_saw_and_shears")
            takeOne()
        }
    }

    // adding second tool to crafting table that already has a hammer
    else if (event.block.id === KJ("crafting_table_with_hammer")) {
        if (event.item.hasTag("forge:saw")) {
            event.block.set("kubejs:crafting_table_with_saw_and_hammer")
            takeOne()
        } else if (event.item.hasTag("forge:shears")) {
            event.block.set("kubejs:crafting_table_with_hammer_and_shears")
            takeOne()
        }
    }

    // adding second tool to crafting table that already has shears
    else if (event.block.id === KJ("crafting_table_with_shears")) {
        if (event.item.hasTag("forge:saw")) {
            event.block.set("kubejs:crafting_table_with_saw_and_shears")
            takeOne()
        } else if (event.item.hasTag("forge:hammer")) {
            event.block.set("kubejs:crafting_table_with_hammer_and_shears")
            takeOne()
        }
    }

    // adding the third tool to a crafting table that already has two tools
    else if (
        (event.block.id === KJ("crafting_table_with_hammer_and_shears") && event.item.hasTag("forge:saw")) ||
        (event.block.id === KJ("crafting_table_with_saw_and_shears") && event.item.hasTag("forge:hammer")) ||
        (event.block.id === KJ("crafting_table_with_saw_and_hammer") && event.item.hasTag("forge:shears"))
    ) {
        takeOne()
        event.server.scheduleInTicks(1, (c) => { // add delay so the gui doesn't open immediately
            event.block.set("minecraft:crafting_table")
        })
    }
})
// may the lord have mercy on my soul amen