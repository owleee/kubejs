const logTypeBlockstateVariants = (modelPath) => {
    return {
        variants: {
            "axis=x": {
                "model": modelPath,
                "x": 90,
                "y": 90
            },
            "axis=y": {
                "model": modelPath
            },
            "axis=z": {
                "model": modelPath,
                "x": 90
            }
        }
    }
}

StartupEvents.registry('block', event => {
    event.create("ballmill_block").soundType("metal");
    event.create("sealed_casing");

    event.create("crusher_casing").soundType("metal")
    event.create("separator_column").soundType("metal")
    event.create("electrolytic_coil").soundType("metal")
        .box(0, 0, 0, 16, 8, 16)
        .box(3, 8, 3, 13, 9, 13)
        .box(4, 9, 4, 12, 16, 12)
        .defaultCutout();
    event.create("reaction_vessel").glassSoundType()
    event.create("pressurised_reaction_vessel").glassSoundType()
    event.create("arc_crucible").soundType("metal")
    event.create("mixer_casing").soundType("metal")
    event.create("centrifugal_chamber").soundType("metal")

    event.create("lv_motor_casing").displayName("Low-Voltage Motor Casing")
    event.create("mv_motor_casing").displayName("Medium-Voltage Motor Casing")
    event.create("hv_motor_casing").displayName("High-Voltage Motor Casing");

    event.create("copper_fins").soundType("copper");

    event.create("turbine_casing").soundType("metal");

    [
        "lunar",
        "martian",
        "venusian",
        "mercurial",
        "jovian",
        "asteroidal",
        "solar",
        "glacian"
    ].forEach(planet => {
        event.create(`${planet}_stargate_ring`).soundType("lodestone")
    });
    event.create("seafloor_nodule").soundType("tuff").defaultCutout().box(4, 0, 4, 12, 8, 12);

    event.create("quartz_glass").defaultCutout().glassSoundType();
    event.create("borosilicate_glass").defaultCutout().glassSoundType();

    event.create("treated_fiberboard").soundType("wood");

    [
        "minecraft:acacia", // latex
        "minecraft:jungle", // latex
        "alexscaves:pewen", // latex
        "minecraft:spruce", // pine pitch
        "quark:ancient", // xp
        "alexscaves:thornwood", // darkness
        "ars_nouveau:blue_archwood", // blue source (water)
        "ars_nouveau:red_archwood", // red source (fire)
        "ars_nouveau:green_archwood", // green source (earth)
        "ars_nouveau:purple_archwood",  // purple source (air)
        "minecraft:crimson", // blood?
        "minecraft:warped", // idk
    ].forEach(wood => {
        let path = wood.path + "_log"
        if (wood === "alexscaves:pewen") path = "pewen/pewen_log"
        else if (wood === "alexscaves:thornwood") path = "thornwood/thornwood_log"
        else if (wood === "minecraft:crimson") path = "crimson_stem"
        else if (wood === "minecraft:warped") path = "warped_stem"
        else if (wood.endsWith("archwood")) path = "archwood_log"

        event.create(`tapped_${wood.path}_log`)
            .textureAll(`kubejs:block/tapped/${wood.path}`)
            .texture("up", `${wood.namespace}:block/${path}_top`)
            .texture("down", `${wood.namespace}:block/${path}_top`)
    })

    event.create("heavy_duty_shaft").soundType("metal")
        .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .model('kubejs:block/heavy_duty_shaft')
        .displayName("Heavy-Duty Shaft")
        .defaultCutout()
        .blockstateJson = logTypeBlockstateVariants('kubejs:block/heavy_duty_shaft')

    event.create("kiln_barrel").soundType("metal")
        .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .model('kubejs:block/kiln_barrel')
        .defaultCutout()
        .blockstateJson = logTypeBlockstateVariants('kubejs:block/kiln_barrel')
})

BlockEvents.modification(event => {
    event.modify(/.*_log/, block => {
        block.requiresTool = true
    })

    event.modify(/.*_wood/, block => {
        block.requiresTool = true
    })
})

