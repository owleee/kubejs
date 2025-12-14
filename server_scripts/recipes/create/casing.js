ServerEvents.recipes(event => {
    // ANDESITE -> STEEL CASING //
    event.remove({ id: /create:item_application\/andesite_casing_from_.+/ })
    event.custom(application("#forge:treated_wood", "#forge:plates/steel", Casing.STEEL)).id("kubejs:application/steel_casing");

    // COPPER CASING //
    event.remove({ id: /create:item_application\/copper_casing_from_.*/ })
    event.custom(application("#forge:glass", "#forge:rubbers", "kubejs:sealed_casing")).id("kubejs:application/sealed_casing");

    event.custom(application("kubejs:sealed_casing", "#forge:plates/pipe_bronze", Casing.COPPER)).id("kubejs:application/bronze_casing");

    // TANK
    event.remove({ id: "create:crafting/kinetics/fluid_tank" })
    event.custom(application("#forge:glass", "#forge:plates/pipe_bronze", "create:fluid_tank")).id("kubejs:application/fluid_tank");

    event.remove("immersiveengineering:crafting/metal_barrel")
    event.custom(application("create:fluid_tank", "#forge:plates/iron", "immersiveengineering:metal_barrel"))

})