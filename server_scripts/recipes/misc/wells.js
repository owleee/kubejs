ServerEvents.recipes(event => {
    event.remove({ mod: "create_wells" })

    // EARTH AIR //
    event.custom({
        "type": "create_wells:fluid_extraction",
        "condition": {
            "direction": "BOTH",
            "biome": [],
            "dimension": ["minecraft:overworld"],
            "yMin": 100,
            "yMax": -255,
            "rpm": 128
        },
        "output": {
            "fluid": "kubejs:pressurised_air",
            "amount": 1
        }
    }).id("fluid_extractor/earth_atmosphere")

    // MARTIAN AIR //
    event.custom({
        "type": "create_wells:fluid_extraction",
        "condition": {
            "direction": "BOTH",
            "biome": [],
            "dimension": ["ad_astra:mars"],
            "yMin": 100,
            "yMax": -255,
            "rpm": 128
        },
        "output": {
            "fluid": "kubejs:martian_air",
            "amount": 1
        }
    }).id("fluid_extractor/mars_atmosphere")

    // MARTIAN CONDENSATE //
    event.custom({
        "type": "create_wells:fluid_extraction",
        "condition": {
            "direction": "UPSIDE_DOWN",
            "biome": [],
            "dimension": ["ad_astra:mars_orbit"],
            "yMin": -62,
            "yMax": -255,
            "rpm": 256
        },
        "output": {
            "fluid": "kubejs:martian_stratosphere",
            "amount": 1
        }
    }).id("fluid_extractor/mars_stratosphere")

    // VENUSIAN AIR //
    event.custom({
        "type": "create_wells:fluid_extraction",
        "condition": {
            "direction": "BOTH",
            "biome": [],
            "dimension": ["ad_astra:venus"],
            "yMin": 100,
            "yMax": -255,
            "rpm": 128
        },
        "output": {
            "fluid": "kubejs:venusian_air",
            "amount": 1
        }
    }).id("fluid_extractor/venus_atmosphere")

    // VENUSIAN CONDENSATE //
    event.custom({
        "type": "create_wells:fluid_extraction",
        "condition": {
            "direction": "UPSIDE_DOWN",
            "biome": [],
            "dimension": ["ad_astra:venus_orbit"],
            "yMin": -62,
            "yMax": -255,
            "rpm": 256
        },
        "output": {
            "fluid": "kubejs:venusian_stratosphere",
            "amount": 1
        }
    }).id("fluid_extractor/venus_stratosphere")
})