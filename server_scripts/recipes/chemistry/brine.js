ServerEvents.recipes(event => {
    event.remove({ id: "spelunkery:mixing/salt" })
    event.remove({ id: "spelunkery:mixing/rock_salt" })

    // Mix any saltpeter dust into clean brine //
    event.custom({
        type: "immersiveengineering:mixer",
        energy: 1600,
        fluid: {
            amount: 64,
            tag: "minecraft:water"
        },
        inputs: [{ tag: "forge:dusts/saltpeter" }],
        result: {
            amount: 64,
            fluid: "immersivegeology:slurry_brine_saltpeter"
        }
    }).id("kubejs:mixing/saltpeter_brine_from_dust")

    // Mix any rock salt dust into clean brine //
    event.custom({
        type: "immersiveengineering:mixer",
        energy: 1600,
        fluid: {
            amount: 64,
            tag: "minecraft:water"
        },
        inputs: [{ item: "immersivegeology:crystal_rocksalt" }],
        result: {
            amount: 64,
            fluid: "immersivegeology:cloudy_slurry_brine_rocksalt"
        }
    }).id("kubejs:mixing/cloudy_rocksalt_brine_from_raw_crystal")

    // Mix salt crystal blocks into clean brine //
    event.custom({
        type: "immersiveengineering:mixer",
        energy: 1600 * 4,
        fluid: {
            amount: 64 * 4,
            tag: "minecraft:water"
        },
        inputs: [{ tag: "forge:storage_blocks/rocksalt" }],
        result: {
            amount: 64 * 4,
            fluid: "immersivegeology:slurry_brine_rocksalt"
        }
    }).id("kubejs:mixing/rocksalt_brine_from_crystal_block")

    // Mix salt dust blocks into clean brine //
    event.custom({
        type: "immersiveengineering:mixer",
        energy: 1600 * 9,
        fluid: {
            amount: 64 * 9,
            tag: "minecraft:water"
        },
        inputs: [{ tag: "forge:storage_blocks/salt" }],
        result: {
            amount: 64 * 9,
            fluid: "immersivegeology:slurry_brine_rocksalt"
        }
    }).id("kubejs:mixing/rocksalt_brine_from_salt_block")

    // Crystallise rock salt from clean brine //
    event.custom({
        type: "immersivegeology:crystallizer",
        energy: 38400,
        fluidResult: {
            amount: 120,
            fluid: "minecraft:water"
        },
        input: {
            amount: 144,
            tag: "forge:clean_brine_rocksalt"
        },
        result: {
            item: "spelunkery:rock_salt"
        },
        time: 300
    }).id("kubejs:crystalliser/rock_salt")

    // Crystallise magnesium from carnallite brine //
    event.custom({
        type: "immersivegeology:crystallizer",
        energy: 38400,
        fluidResult: {
            amount: 120,
            fluid: "immersivegeology:cloudy_slurry_brine_rocksalt"
        },
        input: {
            amount: 144,
            tag: "forge:clean_brine_carnallite"
        },
        result: {
            item: "immersivegeology:crystal_magnesium"
        },
        time: 300
    }).id("kubejs:crystalliser/magnesia")

    event.remove("immersivegeology:centrifuge/spin_cloudy_brine_rocksalt_to_sodium_centrifuge")
    event.remove("immersivegeology:centrifuge/spin_cloudy_brine_saltpeter_to_sodium_centrifuge")
    event.remove("immersivegeology:centrifuge/spin_cloudy_brine_carnallite_to_magnesium_centrifuge")

    // Centrifuge cloudy carnallite brine into calcium oxide and clean brine // 
    event.custom({
        "type": "immersivegeology:centrifuge",
        "energy": 614400,
        "fluid_input": {
            "amount": 1000,
            "tag": "forge:cloudy_brine_carnallite"
        },
        "item_output": {
            "item": "immersivegeology:metal_oxide_calcium"
        },
        "primary_fluid_out": {
            "amount": 976,
            "fluid": "immersivegeology:slurry_brine_carnallite"
        },
        "secondary_fluid_out": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "time": 1200
    }).id("kubejs:centrifuge/carnallite_brine")

    // Centrifuge cloudy rock salt brine into borax and clean brine //
    event.custom({
        "type": "immersivegeology:centrifuge",
        "energy": 614400,
        "fluid_input": {
            "amount": 1000,
            "tag": "forge:cloudy_brine_rocksalt"
        },
        "item_output": {
            "item": BORAX
        },
        "primary_fluid_out": {
            "amount": 976,
            "fluid": "immersivegeology:slurry_brine_rocksalt"
        },
        "secondary_fluid_out": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "time": 1200
    }).id("kubejs:centrifuge/rocksalt_brine")

    // Centrifuge cloudy saltpeter brine into salt and clean brine //
    event.custom({
        "type": "immersivegeology:centrifuge",
        "energy": 614400,
        "fluid_input": {
            "amount": 1000,
            "tag": "forge:cloudy_brine_saltpeter"
        },
        "item_output": {
            "item": SALT
        },
        "primary_fluid_out": {
            "amount": 976,
            "fluid": "immersivegeology:slurry_brine_saltpeter"
        },
        "secondary_fluid_out": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "time": 1200
    }).id("kubejs:centrifuge/saltpeter_brine")


})
