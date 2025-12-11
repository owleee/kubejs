ServerEvents.recipes(event => {

    event.shaped('kubejs:research_paper', [
        "/M/",
        "/_/",
        "/U/"
    ], {
        "_": "create:schematic_and_quill",
        U: "immersiveengineering:survey_tools",
        M: "immersiveengineering:maintenance_kit",
        "/": "minecraft:paper"
    })
        .damageIngredient("immersiveengineering:survey_tools", 50)
        .damageIngredient("immersiveengineering:maintenance_kit", 15)
        .id("kubejs:research_paper")

    event.shapeless(Item.of("immersiveengineering:blueprint", { blueprint: "Research" }), ["kubejs:completed_research_paper"])

    event.remove({ id: "immersiveengineering:crafting/blueprint_components" })
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "Research",
        "inputs": [
            { "item": "kubejs:completed_research_paper" },
            { "tag": "kubejs:components_1" },
            { "tag": "kubejs:components_2" },
            { "tag": "kubejs:components_3" }
        ],
        "result": {
            "item": "immersiveengineering:blueprint",
            "nbt": { "blueprint": "components" }
        }
    }).id(KJ("research/components"))

    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "Research",
        "inputs": [
            { "item": "kubejs:completed_research_paper" },
            { item: "create_new_age:basic_motor" },
            {
                base_ingredient: { item: "create_new_age:advanced_motor" },
                count: 2
            },
            {
                base_ingredient: { item: "create_new_age:reinforced_motor" },
                count: 4
            }
        ],
        "result": {
            "item": "immersiveengineering:blueprint",
            "nbt": { "blueprint": "Motors" }
        }
    }).id(KJ("research/motors"))
})