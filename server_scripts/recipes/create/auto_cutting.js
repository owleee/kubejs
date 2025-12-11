// priority: -99999

ServerEvents.recipes(event => {
    event.forEachRecipe({ type: "farmersdelight:cutting" }, recipe => {
        let json = JSON.parse(recipe.json)
        if (json.tool.tag !== "forge:tools/knives") return;

        if (global.removedRecipes.includes(recipe.id)) return;

        event.custom({
            type: "create:cutting",
            ingredients: json.ingredients,
            results: json.result
        }).id(`kubejs:auto_cutting/${(json.result[0].item || json.result[0].tag).path}_from_${(json.ingredients[0].item || json.ingredients[0].tag).path}`)
    });
})