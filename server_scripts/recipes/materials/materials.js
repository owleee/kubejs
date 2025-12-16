const getMaterialID = (modID, materialName, itemType) => {
    // create calls plates "sheets"
    if (modID === MODS.C && itemType === 'plate') itemType = 'sheet';
    // igeo calls dust "grit"
    if (modID === MODS.IG && itemType === 'dust') itemType = 'grit';
    if (modID === MODS.IE && itemType === 'rod') itemType = 'stick';

    // construct default item id structure (eg _mod:copper_ingot)
    let itemID = `${modID}:${materialName}_${itemType}`;

    // imeng and igeo reverse the order of the item id (eg _mod:dust_copper)
    if (modID === MODS.IE || modID === MODS.IG)
        itemID = `${modID}:${itemType}_${materialName}`;

    if (itemType === "molten")
        itemID = `${modID}:molten_${materialName}`;

    return itemID;
};

const setMaterial = (materialSet, itemType, itemID) => {
    materials[materialSet][itemType] = itemID;
};

const itemTypes = ['ingot', 'nugget', 'plate', 'dust', 'pile'];

const MODS = {
    MC: 'minecraft',
    C: 'create',
    IE: 'immersiveengineering',
    IG: 'immersivegeology',
    A: 'ad_astra',
    KJ: 'kubejs',
    AC: "alexscaves",
    ETC: "etcetera",
    SP: "spelunkery"
};

const materials = {
    copper: {
        _mod: MODS.MC,
        plate: MODS.C,
        dust: MODS.IE,
        nugget: MODS.C,
        _melting_point: 1085
    },
    iron: {
        _mod: MODS.MC,
        plate: MODS.C,
        dust: MODS.IE,
        rod: MODS.IE,
        _melting_point: 1538
    },
    gold: {
        _mod: MODS.MC,
        dust: MODS.IE,
        plate: "create:golden_sheet", // i despise mods that break convention
        _flags: [],
        _melting_point: 1064
    },
    zinc: {
        _mod: MODS.C,
        dust: MODS.IG,
        plate: MODS.IG,
        _melting_point: 419
    },
    nickel: {
        _mod: MODS.IE,
        _melting_point: 1455
    },
    bronze: {
        _mod: MODS.IG,
        _flags: ["-pile"],
        _melting_point: 950,
        _ingredients: [{
            copper: 3,
            tin: 1,
            _id: "normal",
        }, {
            copper: 5,
            tin: 1,
            bismuth: 1,
            _id: "bismuth",
            _result: 5 + 1 + 2,
            _flags: ["-manual_alloy"]
        }, {
            copper: 6,
            tin: 1,
            lead: 1,
            bismuth: 1,
            _id: "lead_bismuth",
            _result: 6 + 2 + 2 + 2,
            _flags: ["-manual_alloy"]
        }, {
            copper: 5,
            zinc: 1,
            bismuth: 1,
            _id: "zinc_bismuth",
            _result: 5 + 1 + 2,
            _flags: ["-manual_alloy"]
        }, {
            copper: 6,
            zinc: 1,
            lead: 1,
            bismuth: 1,
            _id: "zinc_lead_bismuth",
            _result: 6 + 1 + 2 + 2,
            _flags: ["-manual_alloy"]
        }]
    },
    tin: {
        _mod: MODS.IG,
        _melting_point: 232
    },
    steel: {
        _mod: MODS.IE,
        molten: MODS.BC,
        _melting_point: 1370
    },
    brass: {
        _mod: MODS.C,
        dust: MODS.KJ,
        molten: MODS.KJ,
        _ingredients: [{
            copper: 2,
            zinc: 1,
            _id: "normal"
        }, {
            copper: 3,
            zinc: 1,
            aluminum: 1,
            _id: "aluminium",
            _result: 3 + 1 + 3, // extra bonus for using alu
            _flags: ["-manual_alloy"]
        }, {
            copper: 3,
            zinc: 1,
            nickel: 1,
            _id: "nickel",
            _result: 3 + 1 + 1, // just padding
            _flags: ["-manual_alloy"]
        }, {
            copper: 4,
            zinc: 1,
            raw_silicon: 1,
            _id: "raw_silicon",
            _result: 4 + 1 + 2,
            _flags: ["-manual_alloy"]
        }, {
            copper: 4,
            zinc: 1,
            silicon: 1,
            _id: "silicon",
            _result: 4 + 1 + 4, // why are you using pure silicon to make brass
            _flags: ["-manual_alloy"]
        }],
        _flags: []
    },
    pipe_bronze: {
        _mod: MODS.KJ,
        _flags: [],
        _ingredients: [{
            copper: 3,
            desh: 1,
            _id: "copper"
        }, {
            bronze: 3,
            desh: 1,
            _id: "bronze"
        }]
    },
    azure_neodymium: {
        ingot: MODS.AC,
        dust: MODS.KJ,
        plate: MODS.KJ,
        molten: MODS.KJ,
        _flags: ["-auto", "-manual_alloy"],
        _ingredients: {
            cerudialyte: 1,
            neodymium: 1,
            iron: 3,
            boron: 1,
            _result: 1,
        }
    },
    scarlet_neodymium: {
        ingot: MODS.AC,
        dust: MODS.KJ,
        plate: MODS.KJ,
        molten: MODS.KJ,
        _flags: ["-auto", "-manual_alloy"],
        _ingredients: {
            vermillanite: 1,
            neodymium: 1,
            iron: 3,
            boron: 1,
            _result: 1,
        }
    },
    desh: {
        _mod: MODS.A,
        dust: MODS.KJ,
        molten: MODS.KJ,
        _flags: ["-pile"]
    },
    constantan: {
        _mod: MODS.IE,
        molten: MODS.KJ,
        _ingredients: {
            copper: 1,
            nickel: 1
        },
        _flags: [],
        _melting_point: 1204
    },
    quartz: {
        gem: "minecraft:quartz",
        dust: "kubejs:quartz_dust",
        pile: "kubejs:quartz_pile",
        _flags: ["-auto"]
    },
    glowstone: {
        dust: MODS.MC,
        pile: MODS.KJ,
        _flags: ["-auto"]
    },
    graphite: {
        ingot: MODS.KJ,
        nugget: MODS.KJ,
        dust: MODS.KJ,
        _flags: ["-auto"]
    },
    neodymium: {
        _mod: MODS.IG,
        _flags: [],
        _melting_point: 1021
    },
    mangalloy: {
        _mod: MODS.KJ,
        _flags: [],
        _ingredients: {
            steel: 5,
            manganese: 1
        }
    },
    manganese: {
        _mod: MODS.IG,
        _flags: ["-pile"],
        _melting_point: 1246
    },
    chrome_steel: {
        _mod: MODS.KJ,
        _flags: [],
        _ingredients: {
            steel: 7,
            chromium: 1
        }
    },
    chromium: {
        _mod: MODS.IG,
        _flags: [],
        _melting_point: 1907
    },
    high_speed_steel: {
        _mod: MODS.IG,
        rod: "kubejs:high_speed_steel_rod",
        molten: MODS.KJ,
        dust: MODS.KJ,
        _flags: []
    },
    sodium: {
        _mod: MODS.IG,
        ingot: MODS.KJ,
        plate: MODS.KJ,
        _melting_point: 98,
        _flags: []
    },
    magnesium: {
        _mod: MODS.IG,
        _melting_point: 650,
        _flags: []
    },
    silicon: {
        _mod: MODS.KJ,
        dust: MODS.KJ,
        ingot: MODS.KJ,
        pile: MODS.KJ,
        molten: MODS.KJ,
        _melting_point: 1514,
        _flags: ["-auto"]
    },
    raw_silicon: {
        _mod: MODS.KJ,
        dust: MODS.KJ,
        ingot: MODS.KJ,
        pile: MODS.KJ,
        molten: MODS.KJ,
        _melting_point: 1314,
        _flags: ["-auto"]
    },
    silica: {
        _mod: MODS.KJ,
        dust: MODS.KJ,
        pile: MODS.KJ,
        _flags: ["-auto"]
    },
    graphite: {
        _mod: MODS.KJ,
        dust: MODS.KJ,
        ingot: MODS.KJ,
        pile: MODS.KJ,
        _flags: ["-auto"]
    },
    glass: {
        dust: MODS.KJ,
        gem: "minecraft:glass",
        _flags: ["-auto", "smelt_gem"]
    },
    netherite: {
        _mod: MODS.MC,
        ingot: MODS.MC,
        dust: MODS.KJ,
        nugget: MODS.KJ,
        _flags: ["-auto"]
    },
    flint: {
        gem: MODS.MC,
        dust: MODS.KJ,
        _flags: ["-auto"]
    },
    bismuth: {
        _mod: MODS.ETC,
        ingot: MODS.ETC,
        dust: MODS.KJ,
        nugget: MODS.SP,
        _melting_point: 271,
        _flags: ["-auto"]
    },
    lead: {
        _mod: MODS.IE,
        _melting_point: 327,
        _flags: []
    },
    uranium: {
        _mod: MODS.IE,
        _melting_point: 1132,
        _flags: []
    },
    enriched_uranium: {
        _mod: MODS.KJ,
        ingot: "immersivegeology:ingot_refined_uranium",
        nugget: MODS.KJ,
        dust: MODS.KJ,
        molten: MODS.KJ,
        _melting_point: 1132,
        _flags: ["-pile"]
    },
    indium: {
        _mod: MODS.KJ,
        _flags: ["-plate"]
    }
};

const SLAG = "immersiveengineering:slag";
const SALT = "spelunkery:salt";
const SALTPETER = "immersiveengineering:dust_saltpeter";
const BORAX = "kubejs:borax_dust";

const Amount = {
    INGOT: 144,
    ROD: 144 / 2,
    WIRE: 144 / 4,
    BLOCK: 144 * 9,
    NUGGET: 144 / 9
}

// parse item IDs for each material //

const validID = /.+:.+/;

// iterate over each material in materials
for (const [materialName, materialSet] of Object.entries(materials)) {
    // iterate over each item type of that material
    for (const [itemType, itemID] of Object.entries(materialSet)) {
        // Do nothing if the ID is already valid
        if (validID.test(itemID)) continue;
        // Ignore entries that are not item types
        if (itemType.startsWith('_')) continue;

        // set item ID to fully generated item ID
        setMaterial(
            materialName,
            itemType,
            getMaterialID(itemID, materialName, itemType)
        );
    }
    // fill out material set unless flagged not to // 
    itemTypes.forEach(type => {
        if (materialSet[type]) return;
        // if a flag is set to ignore this item type, return
        if (materialSet._flags && materialSet._flags.includes('-' + type)) return;
        if (materialSet._flags && materialSet._flags.includes("-auto")) return;

        let _mod = (type === "pile") ? "kubejs" : materialSet._mod

        setMaterial(
            materialName,
            type,
            getMaterialID(_mod, materialName, type)
        );
    });
    if (!materialSet._flags) setMaterial(materialName, "_flags", [])
    if (!materialSet._cook_type) setMaterial(materialName, "_cook_type", "furnace")
    if (!materialSet._flags.includes("-molten") && !materialSet.molten && !materialSet._flags.includes("-auto")) {
        if (materialSet._mod === MODS.KJ) {
            setMaterial(materialName,
                "molten",
                `kubejs:molten_${materialName}`
            )
        } else {
            setMaterial(
                materialName,
                "molten",
                `immersivegeology:fluid_${materialName}`
            );
        }
    }

}

ServerEvents.tags('item', event => {
    for (const [materialName, materialSet] of Object.entries(materials)) {
        if (!materialSet.dust) continue;
        event.add(`forge:dusts`, materialSet.dust)
        event.add(`forge:dusts/${materialName}`, materialSet.dust)
    }
    for (let m in materials) {
        event.add(`forge:ingot_amount/${m}`, `#forge:ingots/${m}`)
        event.add(`forge:ingot_amount/${m}`, `#forge:dusts/${m}`)
    }

    // adds ingot equivalent tags for non-material items
    event.add(`forge:ingot_amount/cerudialyte`, `#forge:dusts/cerudialyte`)
    event.add(`forge:ingot_amount/vermillanite`, `#forge:dusts/vermillanite`)
    event.add(`forge:ingot_amount/boron`, `#forge:dusts/boron`)

    event.add("forge:ingots/enriched_uranium", "#forge:ingots/refined_uranium")

    // make crushing work
    event.add("forge:gems/glass", "minecraft:glass") // yes, really (source: trust me bro)
    event.add("forge:gems/flint", "minecraft:flint") // kinda

    return;
    for (const [materialName, materialSet] of Object.entries(materials)) {
        // iterate over each item type of that material
        for (const [itemType, itemID] of Object.entries(materialSet)) {

        }
    }
})


//tell(materials.graphite)
//tell(materials.gold.plate)