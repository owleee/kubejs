ServerEvents.recipes(event => {

    // DIBORANE //

    // 6 x hydrofluoric acid + 2 x boron oxide -> 2 x boron trifluoride + 3 x water
    event.custom(chemical_reactor(
        ["6u forge:hydrofluoric_acid"],
        "2x kubejs:boron_oxide",
        "5u kubejs:boron_trifluoride_solution"
    )).id("kubejs:chemical_reactor/boron_trifluoride")

    event.custom(distillation(
        `5u kubejs:boron_trifluoride_solution`,
        [
            `3u minecraft:water`,
            `2u kubejs:boron_trifluoride`,
        ],
        Heat.HEATED
    )).id("kubejs:distillation/boron_trifluoride")

    // 2 x sodium (molten) + 1 hydrogen -> 2x sodium hydride
    event.custom(chemical_reactor(
        [
            `2i #forge:sodium`,
            "1u #forge:hydrogen"
        ], "", "",
        "2x kubejs:sodium_hydride_dust"
    )).id("kubejs:chemical_reactor/sodium_hydride")

    // 2 x boron trifluoride + 6 x sodium hydride -> 1 x diborane + 6 x sodium fluoride
    event.custom(chemical_reactor(
        ["2u kubejs:boron_trifluoride"],
        "6x #forge:dusts/sodium_hydride",
        "1u kubejs:diborane",
        "6x kubejs:sodium_fluoride_dust"
    )).id("kubejs:chemical_reactor/diborane")

    event.custom(chemical_reactor(
        ["1u forge:sulfuric_acid"],
        "2x kubejs:sodium_fluoride_dust",
        "2u immersivegeology:fluid_hydrofluoric_acid",
        "immersivegeology:compound_dust_sodium"
    )).id("kubejs:chemical_reactor/sodium_fluoride_recycling")

    // NITRIDE //

    event.custom(chemical_reactor(
        [`2u forge:ammonia_solution`],
        "2x kubejs:boron_oxide",
        `288mB kubejs:boron_nitride_solution`
    )).id("kubejs:chemical_reactor/boron_nitride_from_boron_oxide")

    event.custom(chemical_reactor(
        ["1u forge:ammonia_solution"],
        "#forge:dusts/boric_acid",
        `144mB kubejs:boron_nitride_solution`
    )).id("kubejs:chemical_reactor/boron_nitride_from_boric_acid")

    event.custom(crystalliser(
        `144mB kubejs:boron_nitride_solution`,
        "kubejs:hexagonal_boron_nitride",
        `120mB minecraft:water`
    )).id("kubejs:crystallizer/hexagonal_boron_nitride")
})