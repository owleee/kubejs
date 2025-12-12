ServerEvents.recipes(recipe => {
    globalRemove(recipe, "farmersdelight:cutting/beef")

    all_crushing(recipe, '#kubejs:raw_meat', 'kubejs:meat_dust')

    recipe.shapeless("2x kubejs:spiced_meat_dust", [
        "#forge:dusts/meat",
        "#forge:flour"
    ]).id("kubejs:spiced_mincemeat_with_breadcrumbs")

    recipe.shapeless("2x kubejs:spiced_meat_dust", [
        "#forge:dusts/meat",
        "#kubejs:onions"
    ]).id("kubejs:spiced_mincemeat_with_onions")

    recipe.custom(pressing("#forge:dusts/meat", "farmersdelight:minced_beef"))
        .id("kubejs:pressing/raw_patty")
    recipe.custom(pressing("#forge:dusts/spiced_meat", "farmersdelight:minced_beef"))
        .id("kubejs:pressing/spiced_patty")
})