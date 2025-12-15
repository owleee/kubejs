ServerEvents.recipes(event => {
    event.custom(chemical_reactor(
        ["6u #forge:sulfuric_acid"],
        "#forge:powdered_slag/sphalerite",
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