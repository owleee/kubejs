ServerEvents.recipes(event => {
    event.custom(chemical_reactor(
        ["6u #forge:sulfuric_acid"],
        "3x #forge:powdered_slag/sphalerite",
        "648mB kubejs:sphalerite_sulfate",
        "kubejs:indium_compound_dust",
    )).id("kubejs:chemical_reactor/leach_sphalerite")

    // TODO: add cr recipe that yields extra compound (similar to osmium)
    event.custom(mixer(
        "2u #forge:sulfuric_acid",
        "#forge:dusts/indium_compound",
        "216mB kubejs:cloudy_sphalerite_waste_complex"
    )).id("kubejs:mixer/leach_sphalerite_waste")

    // TODO: is this too high a yield of copper?
    // if changed, make sure the amount of iron returned below is balanced
    event.custom(chemical_reactor(
        ["500mB kubejs:cloudy_sphalerite_waste_complex"],
        "#forge:dusts/iron",
        "500mB kubejs:sphalerite_waste_complex",
        materials.copper.dust
    )).id("kubejs:chemical_reactor/precipitate_copper_from_sphalerite_waste")

    // JAROSITE PROCESS //
    event.custom(chemical_reactor([
        "4u kubejs:sphalerite_waste_complex",
        "4u #forge:ammonia_solution"
    ], null,
        "432mB kubejs:pure_sphalerite_waste_complex",
        "kubejs:iron_compound_dust",
    )).id("kubejs:chemical_reactor/jarosite_using_ammonia")

    event.custom(chemical_reactor(
        ["4u kubejs:sphalerite_waste_complex"],
        "#forge:compound_dust/sodium",
        "432mB kubejs:pure_sphalerite_waste_complex",
        "kubejs:iron_compound_dust",
    )).id("kubejs:chemical_reactor/jarosite_using_sodium")

    event.custom(chemical_reactor([
        "216mB kubejs:pure_sphalerite_waste_complex",
        "2u #forge:phosphoric_acid",
        "2u #forge:ethanol"
    ], null,
        "648mB kubejs:cloudy_indium_phosphate"
    )).id("kubejs:chemical_reactor/cloudy_indium_phosphate")

    event.custom(centrifuge(
        "144mB kubejs:cloudy_indium_phosphate", [
        "120mB kubejs:indium_phosphate",
        "120mB kubejs:indium_waste_complex"
    ], "immersivegeology:compound_dust_zinc",
    )).id("kubejs:centrifuge/indium_phosphate")

    event.custom(chemical_reactor([
        "216mB kubejs:indium_phosphate",
        "2u #forge:hydrochloric_acid"
    ], null,
        "432mB kubejs:indium_chloride"
    )).id("kubejs:chemical_reactor/indium_chloride")

    event.custom(crystalliser(
        "144mB kubejs:indium_chloride",
        "kubejs:indium_crystal",
        "120mB immersivegeology:fluid_hydrochloric_acid"
    )).id("kubejs:crystalliser/indium_chloride")

    // TODO: this indium yield is too high 

    // crystallise sphalerite
    event.custom(crystalliser(
        "144mB kubejs:sphalerite_sulfate",
        "immersivegeology:crystal_zinc",
        "120mB immersivegeology:fluid_sulfuric_acid"
    )).id("kubejs:crystalliser/sphalerite")

    // recycle jarosite
    event.custom(rotary_kiln(
        "#forge:dusts/iron_compound",
        "immersivegeology:metal_oxide_iron",
        KilnHeat.MV
    )).id("kubejs:rotary_kiln/jarosite")
})