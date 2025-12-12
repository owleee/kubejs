ServerEvents.recipes(recipe => {
    recipe.custom(board_cutting(
        "#forge:vegetables/onion",
        ["2x kubejs:chopped_onions", "50% kubejs:chopped_onions", "kubejs:green_offcuts"]
    )).id("kubejs:cutting/onion")

    recipe.smelting("kubejs:fried_onions", "kubejs:chopped_onions").xp(0.25).id("kubejs:smelting/onions")
    recipe.smoking("kubejs:fried_onions", "kubejs:chopped_onions").xp(0.25).id("kubejs:smoking/onions")
    recipe.campfireCooking("kubejs:fried_onions", "kubejs:chopped_onions").xp(0.25).cookingTime(30 * 20).id("kubejs:campfire/onions");

    //recipe.replaceInput("farmersdelight:cooking/ratatouille", "farmersdelight:onion", "#kubejs:onions");

    return;

    [// crafting recipes - require cooked onions
        "farmersdelight:hamburger",
        "farmersdelight:mutton_wrap",
        "farmersdelight:steak_and_potatoes",
        "farmersdelight:grilled_salmon",
        "farmersdelight:roast_chicken_block",
        "farmersdelight:shepherds_pie_block",
        "farmersdelight:barbecue_stick",
        "corn_delight:taco",
        "miners_delight:vegan_hamburger",
        "miners_delight:vegan_steak_and_potatoes"
    ].forEach(recipeID => {
        recipe.replaceInput(recipeID, "#forge:vegetables/onion", "kubejs:fried_onions")
    });

    [// cooking pot recipes - accept raw onions
        "arsdelight:cooking/frostaya_mutton",
        "farmersdelight:cooking/dumplings",
        "miners_delight:cooking/stuffed_squid",
        "farmersdelight:cooking/ratatouille",
        "miners_delight:cooking/takoyaki",
        "arsdelight:cooking/wilden_stew",
        "farmersdelight:cooking/fried_rice",
        "farmersdelight:cooking/stuffed_pumpkin_block",
        "farmersdelight:cooking/fish_stew",
    ].forEach(recipeID => {
        recipe.replaceInput(recipeID, "farmersdelight:onion", "#kubejs:onions")
    })

    ///recipe.replaceInput({ type: "farmersdelight:cooking" }, "#forge:vegetables", "#kubejs:prepared_vegetables")
})