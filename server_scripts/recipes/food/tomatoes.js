ServerEvents.recipes(recipe => {
    recipe.custom(board_cutting(
        "#forge:vegetables/tomato",
        ["2x kubejs:tomato_slice", "50% kubejs:tomato_slice", "kubejs:green_offcuts"]
    )).id("kubejs:cutting/tomato")
})