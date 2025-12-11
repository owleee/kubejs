JEIEvents.removeCategories(event => {
    console.log(event.getCategoryIds())
    event.remove('create:automatic_shaped')
    event.remove('create:automatic_shapeless')
    event.remove('emi:grinding')
    event.remove('emi:anvil_repairing')
})

JEIEvents.hideItems(event => {
    event.hide(/kubejs:crafting_table_with_.*/)
})
