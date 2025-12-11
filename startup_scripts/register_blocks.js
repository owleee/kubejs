StartupEvents.registry('block', event => {
    event.create("ballmill_block");
    event.create("sealed_casing");

    event.create("kiln_barrel")
    event.create("crusher_casing")
    event.create("seperator_column")
    event.create("electrolytic_coil")
        .box(0, 0, 0, 16, 8, 16)
        .box(3, 8, 3, 13, 9, 13)
        .box(4, 9, 4, 12, 16, 12)
        .defaultCutout();
    event.create("reaction_vessel")
    event.create("pressurised_reaction_vessel")
    event.create("arc_crucible")
    event.create("mixer_casing")
    event.create("centrifugal_chamber")

    event.create("lv_motor_casing").displayName("Low-Voltage Motor Casing")
    event.create("mv_motor_casing").displayName("Medium-Voltage Motor Casing")
    event.create("hv_motor_casing").displayName("High-Voltage Motor Casing");

    event.create("copper_fins");


    event.create("quartz_glass").defaultCutout();
    event.create("borosilicate_glass").defaultCutout();

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

    event.create("heavy_duty_shaft")
        .hardness(2)
        .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .model('kubejs:block/heavy_duty_shaft')
        .displayName("Heavy-Duty Shaft")
        .defaultCutout()
        .blockstateJson = {
        variants: {
            "axis=x": {
                "model": "kubejs:block/heavy_duty_shaft",
                "x": 90,
                "y": 90
            },
            "axis=y": {
                "model": "kubejs:block/heavy_duty_shaft"
            },
            "axis=z": {
                "model": "kubejs:block/heavy_duty_shaft",
                "x": 90
            }
        }
    }
})

BlockEvents.modification(event => {
    event.modify(/.*_log/, block => {
        block.requiresTool = true
    })

    event.modify(/.*_wood/, block => {
        block.requiresTool = true
    })
})

