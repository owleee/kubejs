ServerEvents.recipes(event => {
    event.remove({ type: "createdieselgenerators:wire_cutting" })

    event.remove("createdieselgenerators:crafting/wire_cutters")
    event.shaped("createdieselgenerators:wire_cutters", [
        "/ ",
        " /"], {
        '/': "#forge:rods/all_metal"
    }).id("kubejs:knitting_needles"
    )

    event.remove("immersiveengineering:crafting/hemp_fabric")
    event.shapeless("kubejs:hemp_yarn", ["9x immersiveengineering:hemp_fiber"]).id("kubejs:crafting/hemp_yarn")
    event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [{ "item": "kubejs:hemp_yarn", }],
        "results": [{ "item": "immersiveengineering:hemp_fabric" }]
    }).id("kubejs:knitting/hemp_fabric")

    // RAYON FABRIC //

    // copper sulfate
    event.custom(mixer(
        "1u #forge:sulfuric_acid",
        "#forge:dusts/copper",
        "1u kubejs:copper_sulfate"
    )).id("kubejs:mixer/copper_sulfate")

    // copper hydroxide
    event.custom(refinery([
        "8mB kubejs:copper_sulfate",
        "8mB #forge:sodium_hydroxide"
    ], null,
        "8mB kubejs:copper_hydroxide",
    )).id("kubejs:refinery/copper_hydroxide")

    event.custom(chemical_reactor([
        "1u kubejs:copper_sulfate",
        "128mB #forge:sodium_hydroxide"
    ], null,
        "1u kubejs:copper_hydroxide",
        "2x immersivegeology:compound_dust_sodium"
    )).id("kubejs:chemical_reactor/copper_hydroxide")

    // schweizer's reagent
    event.custom(refinery([
        "8mB kubejs:copper_hydroxide",
        "32mB #forge:ammonia_solution"
    ], null,
        "32mB kubejs:schweizers_reagent"
    )).id("kubejs:refinery/schweizers_reagent")

    event.custom(chemical_reactor([
        "1u kubejs:copper_hydroxide",
        "4u #forge:ammonia_solution"
    ], null,
        "4u kubejs:schweizers_reagent"
    )).id("kubejs:chemical_reactor/schweizers_reagent")

    // 
    event.custom(mixer(
        "1B kubejs:schweizers_reagent",
        "10x #kubejs:cellulose",
        "1B kubejs:viscose_solution"
    )).id("kubejs:mixer/viscose_solution")

    event.custom(chemical_reactor([
        "1u kubejs:viscose_solution",
        "1u #forge:sulfuric_acid"
    ], null,
        "100mB kubejs:viscose_waste",
        "kubejs:raw_rayon_fibers"
    )).id("kubejs:chemical_reactor/raw_rayon_fibers")

    event.custom(filling(
        "kubejs:raw_rayon_fibers",
        "1B minecraft:water",
        "kubejs:rayon_fibers"
    )).id("kubejs:filling/rayon_fibers")

    event.custom(chemical_reactor([
        "1u minecraft:water",
    ], "kubejs:raw_rayon_fibers",
        "25mB kubejs:viscose_waste",
        "kubejs:rayon_fibers",
    )).id("kubejs:chemical_reactor/rayon_fibers")

    event.custom(refinery([
        "8mB kubejs:viscose_waste",
        "8mB #forge:sodium_hydroxide"
    ], null,
        "8mB kubejs:treated_viscose_waste"
    )).id("kubejs:refinery/treated_viscose_waste")

    event.custom(centrifuge(
        "4u kubejs:treated_viscose_waste", [
        "4u immersivegeology:fluid_ammonia_solution",
        "1u kubejs:copper_sulfate"
    ], "8x immersivegeology:compound_dust_sodium"
    )).id("kubejs:centrifuge/treated_viscose_waste")

    event.shapeless("kubejs:rayon_yarn", ["9x kubejs:rayon_fibers"]).id("kubejs:crafting/rayon_yarn")

})