ServerEvents.recipes(event => {

    event.custom(roasting(
        "#forge:dusts/sulfur",
        "kubejs:ash_pile",
        10
    )).id("kubejs:roasting/sulfur")

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
        "1u #forge:hydrochloric_acid",
        "1u #forge:nitric_acid",
    ], null,
        "2u immersivegeology:fluid_aqua_regia",
        null, null, null, 2 // 2 damage per second to small chemical reactor
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
        "1u #forge:sulfuric_acid",
        "1u #forge:nitric_acid",
    ], null,
        "2u kubejs:nitration_mixture",
        null, null, null, 2 // 2 damage per second to small chemical reactor
    )
})