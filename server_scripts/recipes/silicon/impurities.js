ServerEvents.recipes(event => {

    // dissolve silicon impurities in sulfuric acid to get silane waste
    event.custom(mixer(
        `${Chemical.UNIT}mB forge:sulfuric_acid`,
        "#forge:dusts/silicon_impurities",
        `${Chemical.UNIT}mB kubejs:silane_waste`,
        1600
    )).id("kubejs:mixing/silane_waste")

    // crystallise out metallic impurities
    event.custom(crystalliser(
        "kubejs:silane_waste",
        "kubejs:metallic_silicon_waste_crystal",
        "500mB kubejs:nonmetallic_silane_waste",
    )).id("kubejs:crystalliser/silane_waste")

    // centrifuge non-metallic silane waste to yield graphite, boron, and phosphorus (in acid form)
    // imagine the acids got produced when trace boron and phosphorus react with the initial acid
    // sulfur is lost as calcium compound 
    event.custom(centrifuge(
        "kubejs:nonmetallic_silane_waste", [
        "immersivegeology:fluid_phosphoric_acid",
        "kubejs:boric_solution"
    ], "kubejs:graphite_pile"
    )).id("kubejs:centrifuge/silane_waste")

    // mill crystal - low yield
    event.custom(milling("kubejs:metallic_silicon_waste_crystal", [
        "kubejs:raw_silicon_dust",
        "25% immersivegeology:compound_dust_calcium",
        "10% immersivegeology:compound_dust_aluminum",
        "15% immersivegeology:metal_oxide_iron"
    ])).id("kubejs:milling/silane_waste_crystal")

    // crush crystal - better yield
    event.custom(crushing("kubejs:metallic_silicon_waste_crystal", [
        "2x kubejs:raw_silicon_dust",
        "30% immersivegeology:compound_dust_calcium",
        "15% immersivegeology:compound_dust_aluminum",
        "20% immersivegeology:metal_oxide_iron"
    ])).id("kubejs:crushing/silane_waste_crystal")

    // IE crusher - best yield
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: { item: "kubejs:metallic_silicon_waste_crystal" },
        result: { item: materials.raw_silicon.dust, count: 3 },
        secondaries: [{
            chance: 0.35,
            output: { item: "immersivegeology:compound_dust_calcium" }
        }, {
            chance: 0.2,
            output: { item: "immersivegeology:compound_dust_aluminum" }
        }, {
            chance: 0.25,
            output: { item: "immersivegeology:metal_oxide_iron" }
        }]
    }).id(KJ(`crusher/silane_waste_crystal`))
})