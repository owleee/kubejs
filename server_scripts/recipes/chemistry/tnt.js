ServerEvents.recipes(event => {
    // TNT //
    event.remove("minecraft:tnt")
    event.remove("yungscavebiomes:tnt_from_ancient_sand")

    // mononitrotoluene
    all_cr(event, [
        "1u kubejs:toluene",
        "2u kubejs:nitration_mixture",
    ], null,
        "120mB kubejs:dilute_nitration_mixture",
        "kubejs:mnt_dust"
    ) // approx 1u nitric is used, sulfuric is only a catalyst
    // most sulfuric is returned (with some loss just because)

    // nitration mixture skip (necessarily requires large chemical reactor)
    all_cr(event, [
        "1u kubejs:toluene",
        "1u #forge:sulfuric_acid",
        "1u #forge:nitric_acid",
    ], null,
        "120mB kubejs:dilute_nitration_mixture",
        "kubejs:mnt_dust"
    )

    // dinitrotoluene
    all_cr(event, [
        "2u kubejs:nitration_mixture",
    ], "#forge:dusts/mnt",
        "120mB kubejs:dilute_nitration_mixture",
        "kubejs:dnt_dust"
    )

    // nitration mixture skip
    all_cr(event, [
        "1u #forge:sulfuric_acid",
        "1u #forge:nitric_acid",
    ], "#forge:dusts/mnt",
        "120mB kubejs:dilute_nitration_mixture",
        "kubejs:dnt_dust"
    )
})