ServerEvents.recipes(recipe => {

    // BLEACH (HYPOCHLORITE) //

    recipe.custom(refinery([
        "16mB #forge:sodium_hydroxide",
        "8mB kubejs:chlorine"
    ], null,
        "6mB kubejs:bleach"
    )).id("kubejs:refinery/bleach")

    recipe.custom(chemical_reactor([
        "2u #forge:sodium_hydroxide",
        "1u kubejs:chlorine"
    ], null,
        "2u kubejs:bleach",
        "spelunkery:salt"
    )).id("kubejs:chemical_reactor/bleach")

    // CHLORATE //

    recipe.custom(mixer(
        "64mB #forge:clean_brine_rocksalt",
        "5x #forge:crystal/rocksalt",
        "64mB kubejs:saturated_rock_salt_brine",
    )).id("kubejs:mixer/saturated_brine_from_crystal")

    recipe.custom(mixer(
        "64mB #forge:clean_brine_rocksalt",
        "5x #forge:salt",
        "64mB kubejs:saturated_rock_salt_brine",
    )).id("kubejs:mixer/saturated_brine_from_salt")

    recipe.custom(crystalliser(
        "144mB kubejs:saturated_rock_salt_brine",
        "kubejs:chlorate_crystal",
        "120mB ad_astra:hydrogen"
    )).id("kubejs:crystallizer/chlorate_crystal")

    recipe.shaped("kubejs:oxygen_candle", [
        " S ",
        "CDC",
        " C "
    ], {
        C: "kubejs:chlorate_crystal",
        D: "#forge:dusts/iron",
        S: "minecraft:string"
    }).id("kubejs:oxygen_candle")

})