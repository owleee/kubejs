// ignored: true

const noPile = ["-pile"]

// Item types that typically exist for most materials
const itemTypes = [
    "ingot",
    "nugget",
    "block",
    "plate",
    "dust",
    "wire",
    "pile"
]

const materials = {
    copper: {
        mod: "minecraft",
        plate: "c",
        dust: "ie",
        wire: "ie",
        bloom: "kj",
        crushed: "create:crushed_raw_copper"
    },
    iron: {
        mod: "minecraft",
        dust: "ie",
        plate: "c",
        wire: "ie",
        bloom: "kj",
        crushed: "create:crushed_raw_iron"
    },
    tin: {
        mod: "immersivegeology",
        ingot: "immersivegeology:ingot_tin",
        dust: "immersivegeology:grit_tin",
        flags: noPile
    },
    zinc: {
        mod: "create",
        ingot: "c",
        dust: "immersivegeology:grit_tin",
        flags: noPile
    },
    nickel: {
        mod: "immersiveengineering",
        ingot: "immersiveengineering:ingot_nickel",
        dust: "immersiveengineering:dust_nickel",
        flags: noPile
    },
    desh: {
        mod: "ad_astra",
        flags: ["-dust"]
    }
}

const setMaterial = (materialSet, itemType, itemID) => {
    materials[materialSet][itemType] = itemID
}

const validID = /.+:.+/
const mods = {
    "mc": "minecraft",
    "kjs": "kubejs",
    "kj": "kubejs",
    "aa": "ad_astra",
    "ad": "ad_astra",
    "ie": "immersiveengineering",
    "ig": "immersivegeology"
}

for (const [materialName, materialSet] of Object.entries(materials)) {
    //tell(materialName)
    for (const [itemType, itemID] of Object.entries(materialSet)) {
        // Do nothing if the ID is already valid
        if (validID.test(itemID)) continue;
        // Ignore the mod and flags entries as these are not item types
        if (itemType === "mod" || itemType === "flags") continue;

        let _itemType;
        switch (itemID) {
            case "c":
                // Default create item ID format
                // Create uses "sheet" instead of "plate" which is stinky
                _itemType = (itemType === "plate") ? "sheet" : itemType;
                setMaterial(materialName, itemType, `create:${materialName}_${_itemType}`)
                break;

            case "ie":
                _itemType = (itemType === "dust") ? "grit" : itemType;
            case "ig":
                _itemType = itemType
                // Default Immersive Engineering item ID format
                // Immersive Engineering puts the item type before the material type which is also stinky
                setMaterial(materialName, itemType, `${mods[itemID]}:${_itemType}_${materialName}`)
                break;

            default:
                // Regular item ID format for normal people.
                setMaterial(materialName, itemType, `${mods[itemID]}:${materialName}_${itemType}`)
                break;
        }
    }
    // Add an empty flags array if one doesn't already exist - just in case
    if (!materialSet.hasOwnProperty("flags")) { materials[materialName]._flags = [] }

    // Add a pile item if one doesn't already exist and the -pile flag hasn't been set
    // No mods have piles except for kubejs so this is fine
    if (!materialSet.hasOwnProperty("pile") && !materialSet._flags.includes("-pile")) {
        setMaterial(materialName, "pile", `kubejs:${materialName}_pile`)
    }


    for (let type of itemTypes) {
        if (materialSet.hasOwnProperty(type)) continue;
        if (materialSet._flags && materialSet._flags.includes(`-${type}`)) continue;
        //tell(`- ${type}`)
        setMaterial(materialName, type, `${materialSet.mod}:${materialName}_${type}`)
        //tell(`= ${materialSet.mod}:${materialName}_${type}`)
    }

}

tell(materials.tin.dust)
tell(materials.tin.ingot)
tell(materials.zinc.dust)
tell(materials.zinc.ingot)
tell(materials.nickel.dust)
tell(materials.nickel.ingot)