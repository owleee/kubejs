ServerEvents.recipes(recipe => {
    // produce uranium hexafluoride from uraninite or uo2
    recipe.custom(chemical_reactor(
        ["600mB forge:hydrofluoric_acid",],
        "#forge:powders/uraninite",
        "432mB kubejs:uranium_hexafluoride",
        "kubejs:uraninite_waste_dust"
    )).id("kubejs:chemical_reactor/uranium_hexafluoride_from_uraninite")

    recipe.custom(chemical_reactor(
        ["600mB forge:hydrofluoric_acid"],
        "#forge:metal_oxide/uranium",
        "600mB kubejs:uranium_hexafluoride",
    )).id("kubejs:chemical_reactor/uranium_hexafluoride_from_uo2")

    // centrifuge uranium hexafluoride to enrich uranium
    recipe.custom(centrifuge(
        "600mB kubejs:uranium_hexafluoride", [
        "100mB kubejs:low_enriched_uranium_hexafluoride",
        "500mB kubejs:partially_depleted_uranium_hexafluoride"
    ], "kubejs:enrichment_waste",
        100, 100
    )).id("kubejs:centrifuge/uranium_enrichment_0")

    recipe.custom(centrifuge(
        "600mB kubejs:low_enriched_uranium_hexafluoride", [
        "100mB kubejs:medium_enriched_uranium_hexafluoride",
        "500mB kubejs:partially_depleted_uranium_hexafluoride"
    ], "kubejs:enrichment_waste",
        100, 100
    )).id("kubejs:centrifuge/uranium_enrichment_1")

    recipe.custom(centrifuge(
        "600mB kubejs:medium_enriched_uranium_hexafluoride", [
        "100mB kubejs:high_enriched_uranium_hexafluoride",
        "500mB kubejs:partially_depleted_uranium_hexafluoride"
    ], "kubejs:enrichment_waste",
        100, 100
    )).id("kubejs:centrifuge/uranium_enrichment_2")

    recipe.custom(centrifuge(
        "600mB kubejs:partially_depleted_uranium_hexafluoride", [
        "100mB kubejs:low_enriched_uranium_hexafluoride",
        "500mB kubejs:mostly_depleted_uranium_hexafluoride"
    ], "kubejs:enrichment_waste",
        100, 100
    )).id("kubejs:centrifuge/uranium_recovery_1")

    recipe.custom(centrifuge(
        "600mB kubejs:mostly_depleted_uranium_hexafluoride", [
        "100mB kubejs:low_enriched_uranium_hexafluoride",
        "500mB kubejs:fully_depleted_uranium_hexafluoride"
    ], "kubejs:enrichment_waste",
        100, 100
    )).id("kubejs:centrifuge/uranium_recovery_2")

    // hexafluoride to uranium oxide
    recipe.custom(chemical_reactor([
        "1u kubejs:high_enriched_uranium_hexafluoride",
        "2u forge:steam",
        "1u forge:hydrogen"
    ], null,
        "6u immersivegeology:fluid_hydrofluoric_acid",
        "kubejs:enriched_uranium_oxide_dust",
    )).id("kubejs:chemical_reactor/enriched_uranium_oxide")

    recipe.custom(chemical_reactor([
        "1u kubejs:fully_depleted_uranium_hexafluoride",
        "2u forge:steam",
        "1u forge:hydrogen"
    ], null,
        "6u immersivegeology:fluid_hydrofluoric_acid",
        "kubejs:depleted_uranium_oxide_dust",
    )).id("kubejs:chemical_reactor/depleted_uranium_oxide")

    // WET PROCESS //

    recipe.custom(chemical_reactor([
        "1u kubejs:high_enriched_uranium_hexafluoride",
        "2u minecraft:water"
    ], null,
        "1u kubejs:enriched_uranyl_fluoride",
    )).id("kubejs:chemical_reactor/enriched_uranyl_fluoride")

    recipe.custom(refinery([
        "8mB kubejs:high_enriched_uranium_hexafluoride",
        "16mB minecraft:water"
    ], null,
        "8mB kubejs:enriched_uranyl_fluoride",
    )).id("kubejs:refinery/enriched_uranyl_fluoride")

    recipe.custom(chemical_reactor([
        "2u kubejs:enriched_uranyl_fluoride",
        "6u forge:ammonia_solution",
        "2u minecraft:water"
    ], null,
        "4u kubejs:ammonium_fluoride",
        "kubejs:enriched_uranium_compound_dust",
    )).id("kubejs:chemical_reactor/enriched_ammonium_diuranate")

    recipe.custom(kiln(
        "kubejs:enriched_uranium_compound_dust",
        "2x kubejs:enriched_uranium_oxide_dust",
        KilnHeat.HV
    )).id("kubejs:rotary_kiln/enriched_uranium_oxide")

    recipe.custom(chemical_reactor([
        "1u kubejs:fully_depleted_uranium_hexafluoride",
        "2u minecraft:water"
    ], null,
        "1u kubejs:depleted_uranyl_fluoride",
    )).id("kubejs:chemical_reactor/depleted_uranyl_fluoride")

    recipe.custom(refinery([
        "8mB kubejs:fully_depleted_uranium_hexafluoride",
        "16mB minecraft:water"
    ], null,
        "8mB kubejs:depleted_uranyl_fluoride",
    )).id("kubejs:refinery/depleted_uranyl_fluoride")

    recipe.custom(chemical_reactor([
        "2u kubejs:depleted_uranyl_fluoride",
        "6u forge:ammonia_solution",
        "2u minecraft:water"
    ], null,
        "4u kubejs:ammonium_fluoride",
        "kubejs:depleted_uranium_compound_dust",
    )).id("kubejs:chemical_reactor/depleted_ammonium_diuranate")

    recipe.custom(kiln(
        "kubejs:depleted_uranium_compound_dust",
        "2x kubejs:depleted_uranium_oxide_dust",
        KilnHeat.HV
    )).id("kubejs:rotary_kiln/depleted_uranium_oxide")

    // METALLIC URANIUM //

    recipe.remove("immersivegeology/calcination/decompose_metal_oxide_uranium_to_uraniumingot")

    recipe.custom(arc_furnace(
        "kubejs:enriched_uranium_oxide_dust",
        "2x #forge:dusts/magnesium",
        materials.enriched_uranium.ingot,
        "2x immersivegeology:metal_oxide_magnesium"
    )).id("kubejs:arc_furnace/enriched_uranium_ingot")

    recipe.custom(arc_furnace(
        "kubejs:depleted_uranium_oxide_dust",
        "2x #forge:dusts/magnesium",
        materials.uranium.ingot,
        "2x immersivegeology:metal_oxide_magnesium"
    )).id("kubejs:arc_furnace/depleted_uranium_ingot")
})