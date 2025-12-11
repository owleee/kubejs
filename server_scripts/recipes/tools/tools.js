
const BindingTiers = {
    PRIMITIVE: 'primitive',
    BASIC: 'basic',
    ADVANCED: 'advanced',
}

const toolTypes = {
    sword: [
        "  #",
        "$# ",
        "/$ ",
    ],
    hoe: [
        "#$",
        " /",
        " /",
    ],
    pickaxe: [
        "#$#",
        " / ",
        " / "
    ],
    axe: [
        "#$",
        "#/",
        " /"
    ],
    shovel: [
        " $#",
        " /$",
        "/  "
    ]
}


const toolMaterials = {
    copper: {
        ingredient: "#forge:plates/copper",
        pattern: "minecraft:stone_{toolType}",
        binding_tier: BindingTiers.PRIMITIVE
    },
    iron: {
        ingredient: "#forge:plates/iron",
        pattern: "minecraft:iron_{toolType}",
        binding_tier: BindingTiers.BASIC
    },
    steel: {
        ingredient: "#forge:plates/steel",
        pattern: "immersiveengineering:{toolType}_steel",
        binding_tier: BindingTiers.BASIC,
        tool_rod: "#forge:rods/treated_wood"
    },
    diamond: {
        ingredient: "#forge:gems/diamond",
        pattern: "minecraft:diamond_{toolType}",
        binding_tier: BindingTiers.ADVANCED
    },
    gold: {
        ingredient: "#forge:plates/gold",
        pattern: "minecraft:golden_{toolType}",
        binding_tier: BindingTiers.BASIC
    }
}

ServerEvents.recipes(event => {
    // iterate over each tool material
    for (const [materialId, toolMaterial] of Object.entries(toolMaterials)) {
        if (!toolMaterial.tool_rod) toolMaterial.tool_rod = "#forge:rods/wooden"

        let mapping = {
            "#": toolMaterial.ingredient,
            "/": toolMaterial.tool_rod,
            "$": `#kubejs:${toolMaterial.binding_tier}_tool_bindings`
        }

        // iterate over each tool type
        for (const [toolType, craftingPattern] of Object.entries(toolTypes)) {

            // remove existing recipe
            event.remove({
                output: toolMaterial.pattern.replace("{toolType}", toolType),
                type: "minecraft:crafting_shaped"
            })

            // add new recipe
            event.shaped(
                toolMaterial.pattern.replace("{toolType}", toolType),
                craftingPattern,
                mapping
            ).id(`kubejs:${materialId}_${toolType}`)
        }

        // SAWS
        event.shaped(`kubejs:${materialId}_saw`, [
            '$/ ',
            '/##'
        ], mapping
        ).id(`kubejs:${materialId}_saw`)
    }
})