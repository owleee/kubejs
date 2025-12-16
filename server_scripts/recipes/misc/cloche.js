ServerEvents.recipes(event => {
    event.custom(cloche(
        "etcetera:cotton_seeds",
        "minecraft:dirt", [
        "2x etcetera:cotton_flower",
        "etcetera:cotton_seeds"
    ], null,
        RenderTypes.CROP,
        "etcetera:cotton"
    )).id("kubejs:cloche/cotton")

    event.custom(cloche(
        "ars_nouveau:magebloom_crop",
        "minecraft:dirt", [
        "2x ars_nouveau:magebloom",
    ], null,
        RenderTypes.CROP,
        "ars_nouveau:magebloom_crop"
    )).id("kubejs:cloche/magebloom")

    event.custom(cloche(
        "supplementaries:flax_seeds",
        "minecraft:dirt",
        [
            "supplementaries:flax 2x",
            "supplementaries:flax_seeds"
        ],
        null,
        RenderTypes.CROP,
        "supplementaries:flax"
    )).id("kubejs:cloche/flax");

    const woods = {
        oak: { extra: "minecraft:apple" },
        spruce: {},
        birch: {},
        jungle: {},
        acacia: { extra: "alexsmobs:acacia_blossom" },
        dark_oak: {
            extra: "minecraft:apple",
            amount: 48
        },
        mangrove: {
            soil: "minecraft:mud",
            sapling: "minecraft:mangrove_propagule"
        },
        cherry: {},
        crimson: {
            sapling: "minecraft:crimson_fungus",
            extra: [
                "minecraft:shroomlight",
                "minecraft:weeping_vines"
            ],
            soil: "minecraft:crimson_nylium",
            log: "minecraft:crimson_stem"
        },
        warped: {
            sapling: "minecraft:warped_fungus",
            extra: [
                "minecraft:shroomlight",
                "minecraft:twisting_vines"
            ],
            soil: "minecraft:warped_nylium",
            log: "minecraft:warped_stem"
        },
        quark_ancient: {
            id: "ancient",
            mod: "quark",
            extra: "quark:ancient_fruit",
        },
        blue_blossom: {
            mod: "quark",
            id: "blossom",
            sapling: "quark:blue_blossom_sapling",
        },
        lavender_blossom: {
            mod: "quark",
            id: "blossom",
            sapling: "quark:lavender_blossom_sapling",
        },
        orange_blossom: {
            mod: "quark",
            id: "blossom",
            sapling: "quark:orange_blossom_sapling",
        },
        yellow_blossom: {
            mod: "quark",
            id: "blossom",
            sapling: "quark:yellow_blossom_sapling",
        },
        red_blossom: {
            mod: "quark",
            id: "blossom",
            sapling: "quark:red_blossom_sapling",
        },
        pewen: {
            mod: "alexscaves",
            extra: [
                "alexscaves:pewen_pines",
                "alexscaves:pewen_branch"
            ]
        },
        thornwood: {
            mod: "alexscaves",
            noSapling: true,
            extra: "alexscaves:thornwood_branch"
        },
        alexcaves_ancient: {
            id: "ancient",
            mod: "alexscaves",
            extra: "alexscaves:tree_star",
            log: "minecraft:jungle_log",
        },
        azalea: {
            mod: "quark",
            sapling: "minecraft:azalea"
        },
        flowering_azalea: {
            id: "azalea",
            mod: "quark",
            extra: "4x immersive_weathering:azalea_flowers",
            sapling: "minecraft:flowering_azalea",
        },
        blue_archwood: {
            mod: "ars_nouveau",
            extra: "ars_nouveau:frostaya_pod",
            amount: 48
        },
        red_archwood: {
            mod: "ars_nouveau",
            extra: "ars_nouveau:bombegranate_pod",
            amount: 48
        },
        purple_archwood: {
            mod: "ars_nouveau",
            extra: "ars_nouveau:bastion_pod",
            amount: 48
        },
        green_archwood: {
            mod: "ars_nouveau",
            extra: "ars_nouveau:mendosteen_pod",
            amount: 48
        }
    }

    event.remove(/immersiveengineering:cloche\/.+_fungus/)

    for (const [woodID, wood] of Object.entries(woods)) {
        let mod = wood.mod || "minecraft"
        let id = wood.id || woodID
        let sapling = wood.sapling || `${mod}:${id}_sapling`
        let soil = wood.soil || "minecraft:dirt"
        let log = wood.log || `${mod}:${id}_log`
        let amount = wood.amount || 16

        let outputs = [
            `${amount}x ${log}`,
        ]
        if (wood.extra) {
            if (Array.isArray(wood.extra)) {
                outputs = outputs.concat(wood.extra)
            } else {
                outputs.push(wood.extra)
            }
        }
        if (!wood.noSapling) { outputs.push(sapling) }

        event.custom(cloche(
            sapling,
            soil,
            outputs,
            600 * amount,
            RenderTypes.GENERIC,
            sapling
        )).id(`kubejs:cloche/${woodID}_tree`)
    }

})