// ignored: true

ServerEvents.recipes(event => {
    event.forEachRecipe({ output: /.*stairs.*/, type: 'minecraft:crafting_shaped' }, recipe => {

        event.remove({ output: /.*stairs.*/, type: 'minecraft:crafting_shaped', id: /^(?!kubejs).*/ })

        const json = JSON.parse(recipe.json);

        tell(recipe.getOriginalRecipeIngredients()[0].tag)

        return

        if (!json.key[Object.keys(json.key)[0]].item) {
            return;
        }
        let input = json.key[Object.keys(json.key)[0]].item
        let output = json.result.item

        event.shaped(
            Item.of(output, 8),
            [
                'X  ',
                'XX ',
                'XXX'
            ],
            {
                "X": input
            }
        ).id(KJ("stair_fix/" + output.replace(":", "_")))
    })
})