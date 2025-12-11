ServerEvents.recipes(event => {
    event.replaceInput([{ id: "miners_delight:copper_cup" }, { id: "miners_delight:copper_pot" }],
        "#forge:ingots/copper",
        "#forge:plates/copper"
    )
})