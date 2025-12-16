StartupEvents.registry("fluid", event => {

    const TextureType = {
        THIN: "thin",
        THICK: "thick",
        CHEMICAL: "default/chemical",
        DEFAULT: "default/default",
        GAS: "default/gas",
        MOLTEN: "default/molten",
        SOLUTION: "default/solution"
    }

    // this can definitely be optimized later


    /**
     * Registers a fluid using the given parameters.
     * @param {string} name Name of the fluid.
     * @param {number|string} color Color of the fluid in hexadecimal notation. Optional. Leave undefined to use custom textures.
     * @param {TextureType|string} textureType Type of texture to use for the fluid. Optional, defaults to "default". Can be tinted by the color paramter.
     * @returns {object} The created fluid object.
     */
    const fluid = (name, color, textureType) => {
        // default to thin texture if none specified
        if (textureType === undefined) {
            if (name.includes("molten")) textureType = TextureType.MOLTEN;
            else if (name.includes("solution")) textureType = TextureType.SOLUTION;
            else textureType = TextureType.DEFAULT;
        }

        // initially create fluid
        let f = event.create(name)

        // if a colour is given, use it to colour the fluid
        if (color !== undefined) {
            if (textureType === TextureType.THIN) {
                f = f.thinTexture(color)
            } else if (textureType === TextureType.THICK) {
                f = f.thickTexture(color)
            } else {
                f = f.stillTexture(`kubejs:fluid/${textureType}_still`)
                    .flowingTexture(`kubejs:fluid/${textureType}_flow`)
                    .color(color)
            }
        }
        // if no color or texture type is given, use custom textures
        else if (color === undefined) {
            f = f.stillTexture(`kubejs:fluid/${name}_still`)
            f = f.flowingTexture(`kubejs:fluid/${name}_flow`)
        }

        if (name.startsWith("molten_")) {
            f = f.tag(`forge:${name.replace("molten_", "")}`)
        }

        return f
            .tag(`kubejs:${name}`)
            .noBlock()
    }

    /**
     * Helper function to generate bucket model json for fluids.
     * @param {string} name The name of the fluid, used to reference the texture.
     * @returns {object} The JSON object representing the bucket model.
     */
    const bucket = (name) => {
        return {
            parent: "minecraft:item/generated",
            textures: { layer0: `kubejs:item/bucket/${name}` }
        }
    }

    fluid("infinite_waste", 0xff00ff).displayName("Infinite Waste Complex")

    fluid("fish_oil", 0xFCE59A, TextureType.THICK)

    fluid("saturated_rock_salt_brine", 0xB1DAD6)

    fluid("bleach", 0xFFFFFF)

    // BASE CHEMICALS //
    fluid("chlorine", 0xFFFF00)
        .tag("forge:chlorine")
    fluid("fluorine", 0x00FFFF)
    fluid("radon", 0xA0FCAC)
    fluid("nitrogen", "#AAAAFF")

    // ROCKET FUELS //
    fluid("tier_1_rocket_fuel", 0xFF0000)
    fluid("tier_2_rocket_fuel", 0x00FF00)
    fluid("tier_3_rocket_fuel", 0x0000FF)
    fluid("tier_4_rocket_fuel")

    // RUBBERS //
    fluid("butadiene", 0x333333)
    fluid("synthetic_rubber", 0x000000, TextureType.THICK)
    fluid("high_grade_synthetic_rubber", 0x09142D, TextureType.THICK)

    fluid("acetic_acid", 0xffcccc)

    fluid("triethylaluminium", 0x87AFB5)
        .displayName("Aluminium Solution")

    fluid("neodymium_complex", 0x190037)

    fluid("latex")
        .bucketItem.modelJson(bucket("latex"))

    // AEROCHEMISTRY //
    fluid("air")
        .displayName("Pressurised Air")

    fluid("stratosphere")
    fluid("martian_air", 0xD05A3B, "air")
    fluid("martian_stratosphere", 0xD05A3B, "stratosphere")
    fluid("venusian_air", 0xF1D27F, "air")
    fluid("venusian_stratosphere", 0xf1d27f, "stratosphere")

    fluid("hellish_air", 0x330808, "air")
    fluid("eldritch_air", 0xA080A0, "air")

    // PETROCHEMISTRY //

    event.create("cracked_oil");
    event.create("light_oil");
    event.create("heavy_oil");

    fluid("boric_solution", 0x9BCD9B, TextureType.THICK).displayName("Boric Acid")

    fluid("molten_salt", 0xC7A4A8, TextureType.THICK);

    // URANIUM //


    fluid("enriched_uranyl_fluoride", 0x00FC00, TextureType.THICK)
    fluid("high_enriched_uranium_hexafluoride", 0x00FC00)
    fluid("medium_enriched_uranium_hexafluoride", 0x00DC00)
    fluid("low_enriched_uranium_hexafluoride", 0x00BC00)

    fluid("enriched_uranium_hexafluoride", 0x169B13)
    fluid("uranium_hexafluoride", 0x2D7A26)

    fluid("partially_depleted_uranium_hexafluoride", 0x435939)
    fluid("mostly_depleted_uranium_hexafluoride", 0x334A2F)
    fluid("fully_depleted_uranium_hexafluoride", 0x243326)
    fluid("depleted_uranyl_fluoride", 0x243326, TextureType.THICK)

    fluid("ammonium_fluoride", 0x7CBAAC)

    // SILICON //

    fluid("seeded_silicon")
        .bucketItem.modelJson(bucket("seeded_silicon"))
    fluid("molten_silicon")
    fluid("molten_raw_silicon").displayName("Metallurgical Molten Silicon")

    fluid("silane_solution", 0x93A39D, TextureType.THICK)
        .displayName("Chlorosilane Mixture")
    fluid("silane", 0x93A39D)
    fluid("dichlorosilane", 0x86828F)
    fluid("trichlorosilane", 0x726E74)
    fluid("tetrachlorosilane", 0x555555)
    fluid("silane_waste", 0x232323)
        .displayName("Silicon Waste Complex")

    fluid("nonmetallic_silane_waste", 0x3C3C3C)
        .displayName("Non-Metallic Silicon Waste Complex")

    fluid("hydrochloric_tetrachlorosilane", 0x555555, TextureType.THICK)
        .displayName("Hydrochloric Tetrachlorosilane Mixture")
    fluid("hydrochloric_trichlorosilane", 0x726E74, TextureType.THICK)
        .displayName("Hydrochloric Trichlorosilane Mixture")

    // for display purposes only
    fluid("any_etchant").noBucket()

    // DOPING //

    fluid("phosphorus_vapour", 0xF2F2E6)
    // white phosphorus + 6 chlorine -> 4 phosphorus trichloride
    fluid("phosphorus_trichloride", 0x5A4E1A)
    // phosphorus trichloride + phosphorus pentoxide + chlorine -> phosphorus pentachloride
    fluid("phosphorus_pentachloride", 0x5A4E1A)
    // 2 phosphorus trichloride + oxygen -> 2 phosphoryl chloride
    // OR
    // 3 phosphorus pentachloride + 2 boric acid -> 3 phosphoryl chloride + boron oxide + 6 hydrogen chloride
    fluid("phosphoryl_chloride", 0x4B5320) // phosphorus dopant

    fluid("hydrochloric_phosphoryl_chloride", 0x4B5320, TextureType.THICK)
        .displayName("Hydrochloric Phosphoryl Chloride Mixture")

    fluid("phosphoric_hydrochloric_acid_mixture", 0x708238, TextureType.THICK)
        .displayName("Phosphoric-Hydrochloric Acid Mixture")

    // boron

    fluid("boron_trifluoride_solution", 0x228B22, TextureType.THICK)
    fluid("boron_trifluoride", 0x228B22)
    fluid("boron_nitride_solution", 0xAAAAAA, TextureType.THICK)
    fluid("diborane", 0x228B22);

    const colors = {
        "white": "#F9FFFE",
        "light_gray": "#9D9D97",
        "gray": "#474F52",
        "black": "#1D1D21",
        "brown": "#835432",
        "red": "#B02E26",
        "orange": "#F9801D",
        "yellow": "#FED83D",
        "lime": "#80C71F",
        "green": "#5E7C16",
        "cyan": "#169C9C",
        "light_blue": "#3AB3DA",
        "blue": "#3C44AA",
        "purple": "#8932B8",
        "magenta": "#C74EBD",
        "pink": "#F38BAA"
    };

    for (const [colorName, colorHex] of Object.entries(colors)) {
        fluid(`${colorName}_dye`, colorHex)
    }
    fluid("iridescent_dye")

    fluid("oleum", "#bd9346")
    fluid("fluoroantimonic_acid", "#587591")

    fluid("molten_pipe_bronze", "#FFAA00")
    fluid("molten_brass", "#FFCC33")

    fluid("molten_azure_neodymium", "#010037")
    fluid("molten_scarlet_neodymium", "#370000")

    fluid("molten_desh", "#FF5733")
    fluid("molten_ostrum", "#33C1FF")
    fluid("molten_calorite", "#33FF57")

    fluid("molten_chrome_steel", "#CCCCCC")
    fluid("molten_mangalloy", "#FF33A8")

    fluid("molten_constantan", "#FF6600")

    fluid("molten_high_brass", "#FFD966")
    fluid("molten_high_speed_steel", "#9999FF")
        .displayName("Molten High-Speed Steel");

    fluid("molten_netherite", "#222222")

    fluid("molten_enriched_uranium", "#00FF00")

    fluid("molten_kanthal", "#FF8800")
    fluid("molten_nichrome", "#FF4444")
    fluid("molten_indium", "#A8A8FF")
    fluid("molten_gallium", "#CCCCFF")
    fluid("molten_antimony", "#AAAAAA")

    fluid("refractory_ceramic", "#AA7744")

    fluid("copper_sulfate", "#3399FF")
    fluid("copper_hydroxide", "#66ffe6")
    fluid("schweizers_reagent", "#0000ff").displayName("Schweizer's Reagent")
    fluid("viscose_solution", "#ffffff")
    fluid("viscose_waste", "#cccccc").displayName("Viscose Waste Complex")
    fluid("treated_viscose_waste", "#999999").displayName("Treated Viscose Waste Complex")

    fluid("ammonium_sulfate", "#ffff66")
    fluid("ammonium_hydroxide", "#99ff99")

    fluid("alkali_solution", "#615C50").displayName("Alkaline Ash Slurry")
    fluid("soda_ash_solution", "#A0A090").displayName("Soda Ash Slurry")
    fluid("potash_solution", "#8F7B6D").displayName("Potash Slurry")

    fluid("blood", "#8A0303", TextureType.THICK)
    fluid("pine_pitch", "#4B2E0F", TextureType.THICK)
    fluid("darkness", "#000000")
    fluid("red_source", "#FF4500")
    fluid("blue_source", "#1E90FF")
    fluid("green_source", "#32CD32")
    fluid("purple_source", "#800080")

    fluid("glue", "#D4E2E5", TextureType.THICK)

    event.create("gallium").noBucket().thickTexture("#CCCCFF");

    // sphalerite slag powder + sulfuric acid -> sphalerite sulfate + waste dust
    fluid("sphalerite_sulfate", "#7A6F90");
    // waste dust + sulfuric acid -> sphalerite waste complex (indium rich, + zinc, copper, iron)
    fluid("sphalerite_waste_complex", "#6B5461");
    fluid("cloudy_sphalerite_waste_complex", "#8B7182");
    fluid("pure_sphalerite_waste_complex", "#A890A3");
    // TBP solvent + pure sphal waste -> cloudy InPO
    fluid("cloudy_indium_phosphate", "#9C7FB0")
    // cloudy InPO -(centrifuge)> pure InPO + zinc compound + indium waste
    fluid("indium_phosphate", "#B090C0")
    fluid("indium_waste_complex", "#5C4050")
    // InPO + HCl -> indium chloride
    fluid("indium_chloride", "#8F6FA0")
});