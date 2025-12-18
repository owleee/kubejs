ServerEvents.recipes(event => {

    // AQUA REGIA //
    // hydrochloric + nitric acid
    // used to dissolve gold and platinum

    event.custom(refinery([
        "8mB #forge:hydrochloric_acid",
        "8mB #forge:nitric_acid",
    ], null,
        "16mB immersivegeology:fluid_aqua_regia",
    )).id(`kubejs:refinery/aqua_regia`)

    all_cr(event, [
        "8mB #forge:hydrochloric_acid",
        "8mB #forge:nitric_acid",
    ], null,
        "16mB immersivegeology:fluid_aqua_regia",
        null, null, null,
        2
    )

    // NITRATION MIXTURE //
    // sulfuric + nitric acid
    // used to add nitrogen to molecules (nitration)

    event.custom(refinery([
        "8mB #forge:sulfuric_acid",
        "8mB #forge:nitric_acid",
    ], null,
        "16mB kubejs:nitration_mixture",
    )).id(`kubejs:refinery/nitration_mixture`)

    all_cr(event, [
        "8mB #forge:sulfuric_acid",
        "8mB #forge:nitric_acid",
    ], null,
        "16mB kubejs:nitration_mixture",
        null, null, null,
        2
    )
})