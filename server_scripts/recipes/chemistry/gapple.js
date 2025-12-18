ServerEvents.recipes(event => {
    // GAPPLE //

    event.remove("minecraft:golden_apple")
    event.remove("createdieselgenerators:basin_fermenting/golden_apple")
    event.remove("create_new_age:enchanted_golden_apple")

    all_filling(event,
        "minecraft:apple",
        "8i #forge:gold",
        "minecraft:golden_apple"
    )

    all_cr(event,
        ["8i #forge:gold"],
        "minecraft:apple",
        null,
        "minecraft:golden_apple"
    )

    all_cr(event,
        ["8i #forge:clean_aqua_regia_gold"],
        "minecraft:apple",
        `${120 * 8}mB immersivegeology:fluid_aqua_regia`,
        "minecraft:golden_apple"
    )

    // GOLDEN CARROT //

    event.remove("minecraft:golden_carrot")
    event.remove("createdieselgenerators:basin_fermenting/golden_carrot")

    all_filling(event,
        "minecraft:carrot",
        `${8 * Amount.NUGGET}mB #forge:gold`,
        "minecraft:golden_carrot"
    )

    all_cr(event,
        [`${8 * Amount.NUGGET}mB #forge:gold`],
        "minecraft:carrot",
        null,
        "minecraft:golden_carrot"
    )

    all_cr(event,
        [`${8 * Amount.NUGGET}mB #forge:clean_aqua_regia_gold`],
        "minecraft:carrot",
        `${106}mB immersivegeology:fluid_aqua_regia`,
        "minecraft:golden_carrot"
    )

    // COPPER CARROT //
    event.remove("miners_delight:copper_carrot")

    event.custom(cooking([
        "miners_delight:cave_carrot",
        "#forge:raw_materials/copper",
        "#forge:raw_materials/copper",
        "#forge:raw_materials/copper",
        "#forge:raw_materials/copper",
        "#forge:raw_materials/copper"
    ],
        "miners_delight:copper_carrot"
    )).id("kubejs:cooking/copper_carrot")

    all_filling(event,
        "miners_delight:cave_carrot",
        `8i #forge:copper`,
        "miners_delight:copper_carrot"
    )

    all_cr(event,
        [`8i #forge:copper`],
        "miners_delight:cave_carrot",
        null,
        "miners_delight:copper_carrot"
    )

    all_cr(event,
        [`8i #forge:clean_hydrochloric_acid_copper`],
        "miners_delight:cave_carrot",
        `${120 * 8}mB immersivegeology:fluid_hydrochloric_acid`,
        "miners_delight:copper_carrot",
        null, null, 1
    )
})