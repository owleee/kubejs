ServerEvents.tags('item', event => {

    event.add("kubejs:advanced_tool_bindings", [
        "#forge:wires"
    ])
    event.add("kubejs:basic_tool_bindings", [
        "kubejs:leather_binding",
        "minecraft:string",
        "#kubejs:advanced_tool_bindings"
    ])
    event.add("kubejs:primitive_tool_bindings", [
        "#kubejs:basic_tool_bindings",
        IE("hemp_fiber"),
        FD("straw"),
        MC("vine"),
        MC("twisting_vines"),
        MC("weeping_vines"),
        ARS("magebloom_fiber"),
        MOBS("shed_snake_skin"),
        MOBS("lost_tentacle"),
        MOBS("elastic_tendon"),
        CAVES("licoroot_vine"),
        "spelunkery:tangle_roots",
    ])

    event.add("kubejs:stitching", [
        KJ("leather_binding"),
        MC("string")
    ])

    event.add("kubejs:trash_catalysts", [
        "minecraft:lava_bucket",
        "minecraft:cactus",

    ])

    event.add("kubejs:bucket_plates", [
        "#forge:plates/iron",
        "#forge:plates/tin",
    ])

    event.add("kubejs:leather_substitutes", [
        "#forge:leather",
        FD("canvas"),
        C("cardboard")
    ])

    event.add("kubejs:acetic_acid_catalysts", [
        IG("metal_oxide_vanadium"),
        IG("metal_oxide_molybdenum"),
    ])

    event.add("kubejs:fermentation_catalysts", [
        "minecraft:rotten_flesh",
        "minecraft:fermented_spider_eye",
        "#forge:mushrooms"
    ])

    event.add("kubejs:rubber_substitutes", [
        "#forge:rubbers",
        "minecraft:dried_kelp"
    ])

    event.add("kubejs:mats", [
        "quark:bamboo_mat_carpet",
        "twigs:bamboo_mat",
        FD("half_tatami_mat")
    ])

    event.add("kubejs:loomable", [
        "immersiveengineering:hemp_fiber"
    ])

    event.add("kubejs:plant_pulp", [
        "kubejs:plant_pulp",
        "#forge:dusts/wood"
    ])

    event.add("kubejs:permanent_magnet", [
        "kubejs:magnetic_iron_plate",
        "kubejs:magnetic_cobalt_plate",
        "alexscaves:azure_neodymium_ingot",
        "alexscaves:scarlet_neodymium_ingot",
        "kubejs:azure_neodymium_plate",
        "kubejs:scarlet_neodymium_plate",
        "immersivegeology:poor_ore_magnetite",
        "immersivegeology:normal_ore_magnetite",
        "immersivegeology:rich_ore_magnetite",
    ])

    event.add("kubejs:raw_meat", [
        "minecraft:beef",
        "minecraft:chicken",
        "minecraft:mutton",
        "minecraft:porkchop",
        "minecraft:rabbit",
        "alexsmobs:moose_ribs"
    ])

    event.add("kubejs:heavy_stuff",
        ["#forge:storage_blocks/lead", "#minecraft:anvil", "#forge:plates/tungsten", "#forge:plates/osmium"]
    )

    event.add("kubejs:refractory_compounds", [
        "#forge:metal_oxide/zirconium",
        "#forge:metal_oxide/aluminum"
    ])

    event.add("forge:dusts/sodium_carbonate", "kubejs:soda_ash_dust")
    event.add("forge:dusts/calcium_carbonate", "kubejs:limestone_powder")

    event.add("forge:ingots", "createutilities:void_steel_ingot")
    event.add("forge:ingots/void_steel", "createutilities:void_steel_ingot")

    event.add("forge:saw", /^kubejs:[a-zA-Z0-9_]+_saw$/)
    event.add("forge:shears", KJ("flint_shears"))
    event.add("forge:tools/knives", KJ("knapped_flint"))

    event.add("curios:belt", "aa4-atlas:antique_atlas")

    event.add("forge:gems", "kubejs:carborundum")
    event.add("forge:gems/moissanite", "kubejs:carborundum")
    event.add("forge:gems/carborundum", "kubejs:carborundum")

    event.add("forge:plates", ["kubejs:azure_neodymium_plate", "kubejs:scarlet_neodymium_plate"])
    event.add("forge:plates/scarlet_neodymium", "kubejs:scarlet_neodymium_plate")
    event.add("forge:plates/azure_neodymium", "kubejs:azure_neodymium_plate")

    event.add(IE("tools/hammers"), "#forge:hammer")

    event.add("forge:tools/swords", "create:cardboard_sword")
    event.add("minecraft:swords", "create:cardboard_sword")

    event.add("minecraft:logs", "quark:stick_block")
    event.add("minecraft:logs_that_burn", "quark:stick_block")
    event.add("minecraft:planks", "quark:stick_block")

    event.add("forge:rods/wooden", ["twigs:twig", "minecraft:bamboo"])

    event.add("forge:raw_materials", "spelunkery:raw_magnetite")

    event.add("forge:glass", [
        IW("frosty_glass"),
        CNA("reactor_glass"),
        MOBS("rainbow_glass"),
        CAVES("depth_glass"),
        CAVES("sugar_glass"),
        IE("slag_glass"),
        IE("insulating_glass"),
        /create:.+_window/
    ])

    event.add("forge:dusts/silicon_dioxide", ["#forge:dusts/silica", "#forge:dusts/quartz", "kubejs:cooked_quartz_dust"])
    event.add("forge:dusts/carbon", ["#forge:dusts/coal_coke"])

    event.add("forge:raw_materials/garnierite", IE("raw_nickel"))
    event.add("forge:raw_materials/smithsonite", C("raw_zinc"))
    event.add("forge:raw_materials/hematite", MC("raw_iron"))
    event.add("forge:raw_materials/cassiterite", "tinore:raw_tin")
    event.add("forge:raw_materials/bauxite", IE("raw_aluminum"))
    event.add("forge:raw_materials/uraninite", IE("raw_uranium"))

    event.add("forge:ingots", "etcetera:bismuth_ingot")
    event.add("forge:ingots/bismuth", "etcetera:bismuth_ingot")

    event.add("forge:special_slag", /immersivegeology:slag_.+/)
    event.remove("forge:slag", /immersivegeology:slag_.+/);

    ["manganese", "bronze", "tin", "sodium", "zinc", "neodymium"].forEach(metal => {
        event.add("forge:dusts", `immersivegeology:grit_${metal}`)
        event.add(`forge:dusts/${metal}`, `immersivegeology:grit_${metal}`)
    })

    event.add("forge:dusts", "spelunkery:saltpeter")
    event.add("forge:dusts/saltpeter", "spelunkery:saltpeter")
    event.add("forge:crystal/rocksalt", "spelunkery:rock_salt")
    event.add("forge:storage_blocks/rocksalt", "spelunkery:rock_salt_block")
    event.add("forge:storage_blocks/salt", "spelunkery:salt_block")

    event.add("forge:dusts/kelp_ash", "kubejs:kelp_ash")

    event.add("ad_astra:held_over_head", [
        "create:crushing_wheel",
        "create:water_wheel",
        "create:large_water_wheel",
        IE("watermill"),
        IE("windmill"),
        IE("fluid_pump"),
        IE("blastfurnace_preheater"),
        IE("sample_drill"),
        IE("cloche"),
        "create_new_age:generator_coil",
        /create_wells:.+_mechanical_well/
    ])

    event.add("kubejs:stone_slabs", [
        MC("stone_slab"),
        MC("cobblestone_slab"),
        MC("andesite_slab"),
        MC("smooth_stone_slab"),
    ])

    event.remove("create_new_age:nuclear/hazmat_suit", /minecraft:leather_.+/)
    event.add("create_new_age:nuclear/hazmat_suit", /alexscaves:hazmat_.+/)
    event.add("create_new_age:nuclear/hazmat_suit", "#ad_astra:space_suit_items")

    event.add("create:chain_rideable", "immersiveengineering:skyhook")
    event.add("c:wrenches", "#forge:tools/wrench")

    event.add("minecraft:wool", ["supplementaries:feather_block", "alexsmobs:bison_fur_block"])

    event.remove("create_wells:wells", /.*/)
})

ServerEvents.tags("block", event => {
    event.add(KJ("knapping_surface"), [
        "#forge:cobblestone",
        "#forge:stone",
        "twigs:pebble"
    ])

    event.remove('minecraft:needs_stone_tool', /.*copper_ore.*/)

    event.add("create:fan_processing_catalysts/blasting", "createaddition:liquid_blaze_burner")
    event.add("create:fan_processing_catalysts/blasting", "create_new_age:heater")
    event.add("create:fan_processing_catalysts/smoking", "create_new_age:heater")
    event.add("create:fan_transparent", "create_new_age:heater")

    event.add("kubejs:tapped_logs", /kubejs:tapped_.+_log/)
    event.add("treetap:tappable", "#kubejs:tapped_logs")

    event.add("minecraft:mineable/axe", /spelunkery:.*mushroom/)
    event.add("minecraft:mineable/axe", /spelunkery:.*fungus/)
})

ServerEvents.tags("fluid", event => {
    const selfTag = (ID) => {
        event.add(ID, ID)
    }

    event.add(KJ("battery_acids"), [
        IE("redstone_acid"),
        IG("fluid_sulfuric_acid"),
        CAVES("acid"),
    ])

    event.add("forge:butadiene", "kubejs:butadiene")
    event.add("kubejs:neodymium_complex", "kubejs:neodymium_complex")
    event.add("kubejs:aqueous_boric_acid", "kubejs:boric_solution")
    event.add("forge:acetic_acid", "kubejs:acetic_acid")
    event.add("kubejs:seeded_silicon", "kubejs:seeded_silicon")

    event.add("forge:silicon", "kubejs:molten_silicon")
    event.add("forge:photoresist", "immersiveengineering:phenolic_resin")
    event.add("kubejs:etchant", ["kubejs:any_etchant", "#forge:hydrofluoric_acid", "kubejs:ammonium_fluoride"])

    selfTag("kubejs:silane")
    selfTag("kubejs:dichlorosilane")
    selfTag("kubejs:trichlorosilane")
    selfTag("kubejs:tetrachlorosilane")
    selfTag("kubejs:hydrochloric_tetrachlorosilane")
    selfTag("kubejs:hydrochloric_trichlorosilane")
    selfTag("kubejs:silane_waste")
    selfTag("kubejs:nonmetallic_silane_waste")

    event.remove("create:fan_processing_catalysts/blasting", "minecraft:lava")
    event.remove("create:fan_processing_catalysts/blasting", "minecraft:flowing_lava")

    event.add("create:fan_processing_catalysts/smoking", "minecraft:lava")
    event.add("create:fan_processing_catalysts/smoking", "minecraft:flowing_lava")

    event.add("ad_astra:oxygen", "kubejs:pressurised_air");


    ["bronze", "steel"].forEach(metal => {
        event.add(`forge:${metal}`, `createbigcannons:molten_${metal}`)
    })
})


/*

spelunkery:chiselable
alexscaves:regenerates_after_primordial_boss_fight
alexsmobs:rattlesnake_spawnsminecraft:snaps_goat_hornalexsmobs:platypus_spawnsimmersive_weathering:sandableminecraft:azalea_root_replaceableforge:ore_bearing_ground/stonealexsmobs:kangaroo_spawnsartifacts:mineable/digging_clawsimmersive_weathering:icicle_replaceable_blocksminecraft:overworld_carver_replaceablesminecraft:sculk_replaceablealexsmobs:anaconda_spawnsminecraft:base_stone_overworldimmersiveengineering:mineable/rockcutterquark:underground_biome_replaceablealexsmobs:mimic_octopus_spawnsminecraft:dripstone_replaceable_blocksalexsmobs:roadrunner_spawnsalexsmobs:alligator_snapping_turtle_spawnsalexsmobs:snow_leopard_spawnsspelunkery:river_targetalexsmobs:crocodile_spawnsforge:stoneimmersiveengineering:mineable/drillimmersive_weathering:snowableminecraft:nether_carver_replaceablesspelunkery:stone_targetminecraft:stone_ore_replaceablesalexsmobs:komodo_dragon_spawnsalexsmobs:caiman_spawnsalexscaves:primordial_caves_base_blockscreate:ore_override_stonealexsmobs:lobster_spawnsminecraft:goats_spawnable_onminecraft:sculk_replaceable_world_genspelunkery:ocean_targetalexsmobs:seal_spawnsalexsmobs:fly_spawnsalexscaves:water_carver_replaceablesimmersive_weathering:mossableminecraft:moss_replaceablealexsmobs:leafcutter_pupa_usable_onspelunkery:spring_geyser_breakablealexsmobs:emu_spawnsminecraft:lush_ground_replaceablealexsmobs:am_spawnsminecraft:mineable/pickaxe

*/ 