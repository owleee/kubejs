const SEQUENCED_ASSEMBLY = "create:sequenced_assembly"

const toTitleCase = str => {
    return str.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    ).replace("_", "");
}

const reg = (e, type, id) => {
    return e.create(`${id}_${type}`)
        .tag(`forge:${type}s`)
        .tag(`forge:${type}s/${id}`)
        .texture(`kubejs:item/${type}/${id}`)
}

const ingot = (e, id) => {
    return reg(e, "ingot", id)
}

const dust = (e, id) => {
    return e.create(`${id}_dust`)
        .tag("forge:dusts")
        .tag(`forge:dusts/${id}`)
        .texture(`kubejs:item/dust/${id}`)
}

const plate = (e, id) => {
    return e.create(`${id}_plate`)
        .tag("forge:plates")
        .tag(`forge:plates/${id}`)
        .texture(`kubejs:item/plate/${id}`)
}

const nugget = (e, id) => {
    return e.create(`${id}_nugget`)
        .tag("forge:nuggets")
        .tag(`forge:nuggets/${id}`)
        .texture(`kubejs:item/nugget/${id}`)
}

Platform.mods.kubejs.name = 'Immersive Additions'
Platform.mods.tinore.name = 'Immersive Additions'

StartupEvents.registry('item', event => {
    // ROSE QUARTZ BUDS //
    ["small", "medium", "large"].forEach(i => {
        event.create(`${i}_rose_quartz_bud`)
    });


    // EARLYGAME //
    event.create('knapped_flint', 'farmersdelight:knife')
        .maxDamage(32)
        .speedBaseline(-3)
        .tooltip("Careful, it's sharp")


    event.create("flint_shears", "shears")
        .maxDamage(32)

    event.create("dried_glowberries");
    event.create("leather_binding");

    dust(event, "flint");
    dust(event, "cooked_flint");

    // ORE PROCESSING //

    ["copper", "iron", "zinc", "tin", "nickel", "lead", "silver", "gold"].forEach(i => {
        event.create(`${i}_bloom`)
            .texture(`kubejs:item/bloom/${i}`)
            .tag("forge:blooms")
            .tag(`forge:blooms/${i}`)
    })
    event.create("alien_slag")
    event.create("hellish_slag")

    plate(event, "magnetic_iron")
    plate(event, "magnetic_cobalt")
    plate(event, "azure_neodymium")
    plate(event, "scarlet_neodymium")

    event.create("ingot_mold")
    event.create("ball_mold")

    event.create("wing")

    plate(event, "enriched_uranium")

    event.create("high_speed_steel_rod")
        .tag("forge:rods")
        .tag("forge:rods/highspeedsteel")
        .texture("kubejs:item/rod/hss")
        .displayName("High-Speed Steel Rod")

    dust(event, "high_speed_steel").displayName("High-Speed Steel Dust")

    // FABRIC //
    event.create("hemp_yarn") // -> industrial fabric
    event.create("string_yarn")
    event.create("fabric")

    event.create("cotton_yarn")
    event.create("cotton_fabric")

    event.create("raw_rayon_fibers")
    event.create("rayon_fibers")
    event.create("rayon_yarn")
    event.create("rayon_fabric")

    dust(event, "copper_sulfate").displayName("Copper Compound")
    dust(event, "copper_hydroxide").displayName("Cupric Hydroxide")

    dust(event, "magnesium_silicide")
    dust(event, "stibnite")

    // GRAPHITE //
    event.create("carbon_mixture").displayName("Raw Carbonaceous Mixture")
    event.create("carbon_compound").displayName("Carbonaceous Mixture")
    event.create("unsintered_graphite_rod")
    event.create("carborundum_compound")
    event.create("carborundum")

    // RUBBER //

    event.create("raw_rubber")
    event.create("rubber").tag("forge:rubbers")
    event.create("synthetic_rubber").tag("forge:rubbers")
    event.create("high_grade_synthetic_rubber").tag("forge:rubbers")

    event.create("magnesia_silica_catalyst").displayName("Magnesia-Silica Catalyst")
    event.create("used_magnesia_silica_catalyst").displayName("Dirty Magnesia-Silica Catalyst")

    event.create("neodymium_catalyst")
    event.create("used_neodymium_catalyst")

    // BIOPROCESSING //

    event.create("corn_flour")
    event.create("corn_dough")

    event.create("kelp_ash")
    event.create("rich_ash")
    ingot(event, "sodium")
    plate(event, "sodium")

    dust(event, "soda_ash").displayName("Soda Ash")
    dust(event, "potash").displayName("Potash")

    event.create("plant_pulp")
    event.create("fine_pulp")

    // MISC //

    event.create("limestone_powder")

    event.create("research_paper")
    event.create("completed_research_paper")

    event.create("quill")
    dust(event, "concrete")
    dust(event, "terracotta")

    event.create("biomometer")
    event.create("scanner")

    dust(event, "bismuth")

    event.create("energy_singularity").texture("kubejs:item/singularity/energy")

    let compression = {
        1: "Once",
        2: "Twice",
        3: "Thrice",
        4: "Quadruple",
        5: "Quintuple",
        6: "Sextuple",
        7: "Septuple",
        8: "Octuple",
        9: "Nonuple",
    }

    for (const n in compression) {
        event.create(`singularity_${n}`)
            .displayName(`${compression[n]} Compressed Singularity`)
            .texture(`kubejs:item/singularity/${n}`)
    }

    event.create("chlorate_crystal")
    event.create("oxygen_candle")
    event.create("lit_oxygen_candle")

    event.create("raw_egg")
    event.create("cracked_eggshell")
    event.create("raw_beef_slices")
    event.create("steak_slices")
    dust(event, "meat").displayName("Mincemeat")
    dust(event, "spiced_meat").displayName("Spiced Mincemeat")

    event.create("chopped_onions")
    event.create("fried_onions")
    event.create("tomato_slice")
    event.create("green_offcuts")

    event.create("cotton_lint")

    event.create("incomplete_kiln_barrel", SEQUENCED_ASSEMBLY)
    event.create("unplated_kiln_barrel")

    event.create("basic_integrated_circuit")
    event.create("advanced_integrated_circuit")
    event.create("elite_integrated_circuit")

    event.create("iridescent_dye").tag("forge:dyes/iridescent").tag("forge:dyes")

    ingot(event, "singularity")
    event.create("matter_singularity").texture("kubejs:item/singularity/matter")

    dust(event, "activated_carbon")
    event.create("gold_magnesia_catalyst").displayName("Gold-Magnesia Catalyst")
    event.create("dirty_gold_magnesia_catalyst").displayName("Dirty Gold-Magnesia Catalyst")

    event.create("nothing")

    // GRAPHITE //

    ingot(event, "graphite")
    nugget(event, "graphite")
    dust(event, "graphite")

    // URANIUM //
    dust(event, "enriched_uranium")
    nugget(event, "enriched_uranium")

    dust(event, "uraninite_waste").displayName("Uraninite Waste")
    event.create("enrichment_waste")

    dust(event, "depleted_uranium_oxide").displayName("Depleted Uranium Oxide")
    dust(event, "depleted_uranium_compound").displayName("Depleted Uranium Compound")
    dust(event, "enriched_uranium_oxide").displayName("Enriched Uranium Oxide")
    dust(event, "enriched_uranium_compound").displayName("Enriched Uranium Compound")

    // COMPONENTS //
    event.create("wooden_gear")
    event.create("large_wooden_gear")

    event.create("separator_vane")
    event.create("unfired_ceramic_ball")
    event.create("ceramic_ball")

    event.create("space_station")

    event.create("light_engineering_mechanism")
    event.create("heavy_engineering_mechanism")

    event.create("incomplete_vacuum_tube", SEQUENCED_ASSEMBLY)
    event.create("incomplete_light_engineering_mechanism", SEQUENCED_ASSEMBLY)
    event.create("incomplete_heavy_engineering_mechanism", SEQUENCED_ASSEMBLY)
    event.create("incomplete_iron_component", SEQUENCED_ASSEMBLY)
    event.create("incomplete_steel_component", SEQUENCED_ASSEMBLY)

    // BORON //

    dust(event, "borax")
    dust(event, "boron")
    dust(event, "boric_acid")

    event.create("boron_oxide")
        .texture("kubejs:item/dust/boron_oxide")

    event.create("hexagonal_boron_nitride").texture("kubejs:item/gem/hex_boron_nitride")
    event.create("cubic_boron_nitride").texture("kubejs:item/gem/cubic_boron_nitride")
    dust(event, "boron_nitride")

    dust(event, "sodium_hydride")
    dust(event, "sodium_fluoride")

    // SILICON //

    dust(event, "silica")
    dust(event, "glass").displayName("Soda-Lime Glass Dust")
    dust(event, "raw_silicon").displayName("Metallurgical Silicon Dust")
    dust(event, "silicon")
    dust(event, "pure_silicon")
    dust(event, "silicon_impurities").displayName("Silicon Impurities")
    event.create("metallic_silicon_waste_crystal")

    ingot(event, "raw_silicon").displayName("Metallurgical Silicon Ingot")
    ingot(event, "silicon")

    // boule
    event.create("silicon_seed")
        .texture("kubejs:item/silicon/seed")
    event.create("silicon_boule")
        .texture("kubejs:item/silicon/boule")
    event.create("silicon_wafer")
        .texture("kubejs:item/silicon/wafer")
    // wafers
    event.create("wet_ish_silicon_wafer", SEQUENCED_ASSEMBLY)
        .texture("kubejs:item/silicon/wet_ish")
        .displayName("Wet-ish Silicon Wafer")
    event.create("wet_silicon_wafer")
        .texture("kubejs:item/silicon/wet")
    event.create("passivated_silicon_wafer")
        .texture("kubejs:item/silicon/passivated")
    event.create("masked_silicon_wafer", SEQUENCED_ASSEMBLY)
        .texture("kubejs:item/silicon/masked")
    event.create("etched_silicon_wafer")
        .texture("kubejs:item/silicon/etched")
    // doped
    event.create("p_doped_silicon_wafer")
        .displayName("P-Type Doped Silicon Wafer")
        .texture("kubejs:item/silicon/p/wafer")
    event.create("etched_p_silicon_wafer")
    event.create("n_doped_silicon_wafer")
        .displayName("N-Type Doped Silicon Wafer")
        .texture("kubejs:item/silicon/n/wafer")
    event.create("etched_n_silicon_wafer")

    event.create("photolithography_mask").texture("kubejs:item/silicon/mask")
    event.create("photolithography_pattern").texture("kubejs:item/silicon/pattern")

    event.create("silicon_rod").texture("kubejs:item/silicon/rod")
    event.create("hot_silicon_rod").texture("kubejs:item/silicon/hot_rod")
    event.create("partially_deposited_silicon_rod").texture("kubejs:item/silicon/partially_deposited")
    event.create("hot_partially_deposited_silicon_rod").texture("kubejs:item/silicon/hot_partially_deposited")
    event.create("deposited_silicon_rod").texture("kubejs:item/silicon/deposited")

    //

    event.create("wheel")


    event.create("basic_radiation_shielding")
    event.create("basic_thermal_shielding")
    event.create("space_fabric")

    event.create("advanced_radiation_shielding")
    event.create("advanced_thermal_shielding")
    event.create("reinforced_space_fabric")

    event.create("launch_plate")

    // PHOSPHORUS //

    dust(event, "red_phosphorus").displayName("Red Phosphorus");
    dust(event, "white_phosphorus").displayName("White Phosphorus");
    event.create("phosphorus_crystal").texture(`kubejs:item/crystal/phosphorus`).tag("forge:crystal").tag("forge:crystal/phosphorus")
    event.create("phosphorus_oxide") // P4O10 (phosphorus pentoxide)
        .texture("kubejs:item/dust/phosphorus_oxide")


    event.create("glowstone_powder")
    event.create("phosphoric_slag").texture(`kubejs:item/ore/phosphoric_slag`)
        .tag(`forge:slag/phosphorus`).tag(`forge:special_slag`)

    // NETHERITE //

    dust(event, "netherite")
    nugget(event, "netherite")

    event.create("netherite_plating_kit").unstackable()
    event.create("incomplete_plating_kit", SEQUENCED_ASSEMBLY).unstackable()
    event.create("used_plating_kit").unstackable()

    reg(event, "gem", "firestone").displayName("Firestone")
    reg(event, "powder", "debris")
    event.create("netherite_nanoparticles")
    event.create("bonded_netherite_nanoparticles")
    event.create("brittle_netherite_scrap")

    dust(event, "carbon").displayName("Carbon Black")

    // sphal leaching byproduct, mix with sulfuric acid for useful product
    dust(event, "indium_compound").displayName("Indium Compound")
    // iron is added to the waste solution to precipitate copper metal
    // sodium, potassium, or ammonium ions are added to precipitate 
    //jarosite (*Fe3(SO4)2(OH)6), or more simply "iron compound"
    dust(event, "iron_compound").displayName("Iron Compound")
    event.create("indium_crystal")

    dust(event, "charcoal")
})

ItemEvents.modification(event => {
    event.modify(`kubejs:netherite_plating_kit`, item => {
        item.craftingRemainder = Item.of(`kubejs:used_plating_kit`).item
    })

    event.modify("kubejs:knapped_flint", item => {
        item.maxStackSize = 16
    })

    event.modify("kubejs:biomometer", item => {
        item.maxDamage = 256
    })

    event.modify("kubejs:scanner", item => {
        item.maxDamage = 256
    })

    event.modify("kubejs:charcoal_dust", item => {
        item.burnTime = 1600;
    })
})