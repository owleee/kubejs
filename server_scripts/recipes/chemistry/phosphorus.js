ServerEvents.recipes(event => {

    event.custom(chemical_reactor(
        ["125mB forge:sulfuric_acid"],
        "64x minecraft:bone_meal",
        "120mB immersivegeology:fluid_phosphoric_acid",
        "immersivegeology:compound_dust_calcium"
    )).id("kubejs:chemical_reactor/phosphoric_acid_from_bonemeal")

    // white phos directly from apatite
    event.custom(arc_furnace(
        "#forge:powders/apatite",
        [
            "3x #forge:dusts/silicon_dioxide",
            "5x #forge:dusts/carbon"
        ],
        "4x kubejs:white_phosphorus_dust",
        "4x " + SLAG,
    )).id("kubejs:arc_furnace/white_phosphorus_from_apatite_powder")

    event.custom(arc_furnace(
        "#forge:grits/apatite",
        [
            "3x #forge:dusts/silicon_dioxide",
            "5x #forge:dusts/carbon"
        ],
        "4x kubejs:white_phosphorus_dust",
        "5x " + SLAG,
        null, // default energy
        200 // takes longer but technically easier to get
    )).id("kubejs:arc_furnace/white_phosphorus_from_apatite_dust")

    // phos oxide from phos acid
    event.custom(chemical_reactor(
        ["2u forge:phosphoric_acid"],
        "5x #forge:dusts/carbon",
        "2u minecraft:water",
        "4x kubejs:white_phosphorus_dust"
    ))


    // phosphorus oxide from white phosphorus
    event.custom(rotary_kiln(
        "1x #forge:dusts/white_phosphorus",
        "1x kubejs:phosphorus_oxide",
        KilnHeat.HV,
        300 / 4
    )).id("kubejs:rotary_kiln/phosphorus_oxide")

    // phosphorus trichloride from white phosphorus // TODO - reflux
    event.custom(chemical_reactor(
        ["3u kubejs:chlorine"],
        "2x #forge:dusts/white_phosphorus",
        "2u kubejs:phosphorus_trichloride"
    )).id("kubejs:chemical_reactor/phosphorus_trichloride")

    // phosphorus pentachloride from trichloride
    event.custom(chemical_reactor([
        "1u kubejs:phosphorus_trichloride",
        "1u kubejs:chlorine"
    ], null, //no item input
        null, // no fluid output
        "1x kubejs:phosphorus_pentachloride"
    )).id("kubejs:chemical_reactor/phosphorus_pentachloride")

    // PHOSPHORYL CHLORIDE //

    // phosphoryl chloride from phosphorus trichloride
    event.custom(chemical_reactor([
        "2u kubejs:phosphorus_trichloride",
        "1u forge:oxygen"
    ], "kubejs:gold_magnesia_catalyst",
        "2u kubejs:phosphoryl_chloride",
        "kubejs:dirty_gold_magnesia_catalyst"
    )).id("kubejs:chemical_reactor/phosphoryl_chloride")

    event.custom(refinery([
        "16mB kubejs:phosphorus_trichloride",
        "8mB forge:oxygen"
    ], "kubejs:gold_magnesia_catalyst",
        "16mB kubejs:phosphoryl_chloride",
    )).id("kubejs:refinery/phosphoryl_chloride")

    // phosphoryl chloride from pentachloride and pentoxide
    event.custom(chemical_reactor(
        ["3u kubejs:phosphorus_pentachloride",],
        "2x kubejs:phosphorus_oxide",
        "5u kubejs:phosphoryl_chloride"
    )).id("kubejs:chemical_reactor/phosphoryl_chloride_from_pentoxide")

    // phosphoryl chloride from phosphoric acid and salt
    event.custom(chemical_reactor(
        ["2u kubejs:phosphorus_pentachloride",],
        "3x #forge:salt",
        "1u kubejs:phosphoryl_chloride",
        "3x immersivegeology:compound_dust_sodium"
    )).id("kubejs:chemical_reactor/phosphoryl_chloride_from_salt")

    // phosphoryl chloride from phosphorus pentachloride and boric acid
    event.custom(chemical_reactor(
        ["3u kubejs:phosphorus_pentachloride",],
        "2x #forge:dusts/boric_acid",
        "3u kubejs:phosphoryl_chloride",
        "2x kubejs:boron_oxide"
    )).id("kubejs:chemical_reactor/phosphoryl_chloride_from_boric_acid")

    /*event.custom(chemical_reactor(
        [
            "1u kubejs:phosphoryl_chloride",
            "3u minecraft:water",
        ]
    ))*/

    // RECYCLING + MISC //
    event.custom(blast_furnace(
        "kubejs:phosphorus_oxide",
        "kubejs:white_phosphorus_dust",
        SLAG,
        600
    )).id("kubejs:blast_furnace/phosphorus")
})