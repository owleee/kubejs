ServerEvents.recipes(event => {
    // STONE HAMMER //
    event.remove({ id: IG("crafting/craft_igtoolkit_2") })
    event.shaped(IG("hammer_stone"), [
        '&#',
        '/&'
    ], {
        "&": '#quark:stone_tool_materials',
        "/": "#forge:rods/wooden",
        "#": "#kubejs:primitive_tool_bindings"
    }).id(KJ("stone_hammer"))

    // BRONZE HAMMER //
    event.replaceInput(
        "immersivegeology:crafting/craft_igtoolkit_0",
        "minecraft:string",
        "#kubejs:basic_tool_bindings"
    )

    // STEEL HAMMER //
    event.replaceInput(
        "immersiveengineering:crafting/hammer",
        "minecraft:string",
        "#kubejs:basic_tool_bindings"
    )
    event.replaceInput(
        "immersiveengineering:crafting/hammer",
        "#forge:ingots/iron",
        "#forge:ingots/steel"
    )
    event.replaceInput(
        "immersiveengineering:crafting/hammer",
        "minecraft:stick",
        "#forge:rods/treated_wood"
    )

    // STAINLESS HAMMER //
    event.replaceInput(
        { id: "immersivegeology:crafting/craft_igtoolkit_1" },
        "minecraft:string",
        "#kubejs:advanced_tool_bindings"
    )

    // PROSPECTOR'S HAMMER //
    event.replaceInput(
        "immersivegeology:crafting/craft_geologist_pick",
        "minecraft:string",
        "#kubejs:basic_tool_bindings"
    )
    event.replaceInput(
        "immersivegeology:crafting/craft_geologist_pick",
        "#forge:cobblestone",
        "#minecraft:stone_tool_materials"
    )
})