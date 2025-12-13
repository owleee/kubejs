// priority: 334

/* Types Guide /*
    native:     can be smelted directly (apart from copper, for balancing/aesthetic reasons)
    oxide:      must be processed in a bloomery, produces a bloom which must be further processed
    sulfide:    must be processed in a reverb furnace, producing slag and sulfur dioxide
*/

const ores = {
    // IRON ORES //
    magnetite: {
        type: "oxide",
        material: "iron",
        byproduct: "",
        nugget: "spelunkery:raw_magnetite_nugget",
        bloomeryTime: 1200,
    },
    hematite: { // we can consider vanilla ore to be hematite i think
        type: "oxide",
        material: "iron",
        nugget: "spelunkery:raw_iron_nugget",
        bloomeryTime: 1100
    },
    pyrite: {
        type: "sulfide",
        material: "iron"
    },
    ilmenite: {
        type: "special", // FeTiO_3
        material: "iron"
    },
    // ZINC ORES //
    sphalerite: {
        type: "sulfide",
        material: "zinc"
    },
    smithsonite: { // create:zinc ore can be smithsonite, bc it's easier to smelt
        type: "carbonate",
        material: "zinc",
        nugget: "spelunkery:raw_zinc_nugget",
        bloomeryTime: 360
    },
    // TIN ORES //
    cassiterite: {
        type: "oxide",
        material: "tin",
        bloomeryTime: 400
    },
    // NICKEL ORES //
    millerite: {
        type: "sulfide",
        material: "nickel"
    },
    garnierite: { //imeng nickel ore can be considered garnierite as it is an "oxide" meaning it can be extracted in a bloomery
        type: "oxide", // actually a silicate? but that doesnt matter
        material: "nickel",
        poor_ore: KJ("poor_ore_nickel"),
        normal_ore: IE("raw_nickel"),
        rich_ore: KJ("rich_ore_nickel"),
        dirty_crushed_ore: KJ("dirty_crushed_ore_nickel"),
        crushed_ore: KJ("crushed_ore_nickel"),
        nugget: "kubejs:garnierite_nugget",
        bloomeryTime: 200
    },
    // COPPER ORES //
    copper: { // vanilla copper ore is obviously native copper
        type: "native",
        material: /* you'll never guess */ "copper",
        nugget: "spelunkery:raw_copper_nugget",
        bloomeryTime: 200
    },
    cuprite: {
        type: "oxide",
        material: "copper",
        bloomeryTime: 400
    },
    // GOLD ORES //
    gold: {
        type: "native",
        material: "gold", // WHAAAT
        nugget: "spelunkery:raw_gold_nugget",
        bloomeryTime: 200,
    },
    // SILVER ORES //
    silver: {
        type: "native",
        material: "silver",
        bloomeryTime: 200,
    },
    acanthite: {
        type: "sulfide",
        material: "silver"
    },
    // LEAD ORES //
    lead: {
        type: "native",
        material: "lead",
        bloomeryTime: 200,
    },
    galena: {
        type: "sulfide",
        material: "lead",
    },
    // PLATINUM ORES //
    platinum: {
        type: "native",
        material: "platinum"
    },
    // ALUMINIUM ORES //
    // URANIUM ORES //
    uraninite: {
        type: "oxide",
        material: "uranium"
    },
    // CHROMIUM ORES //
    chromite: {
        type: "oxide",
        material: "chromium",
        slag: "kubejs:chromite_slag"
    },
    // DESH ORES //
    armstrongite: {
        type: "unknown",
        material: "desh",
        normal_ore: "ad_astra:raw_desh",
        dirty_crushed_ore: "kubejs:dirty_crushed_armstrongite",
        crushed_ore: "kubejs:crushed_armstrongite",
        flags: ["-poor_ore", "-rich_ore", "-nugget"]
    }
}

const setOre = (oreSet, oreType, itemID) => {
    ores[oreSet][oreType] = itemID
}

const oreTypes = [
    "poor_ore",
    "normal_ore",
    "rich_ore",
    "dirty_crushed_ore",
    "crushed_ore",
    "nugget"
]
const optionalTypes = [

]

for (const [name, ore] of Object.entries(ores)) {
    if (!ore.flags) setOre(name, "flags", [])
    // iterate over each expected item type and generate the entry
    oreTypes.forEach(type => {
        if (ore.flags.includes(`-${type}`)) return;
        if (!ore[type]) {
            if (type === "nugget") {
                setOre(name, "nugget", `kubejs:${name}_nugget`)
            } else {
                setOre(name, type, `immersivegeology:${type}_${name}`)
            }
        }
    })
    // generate a flags entry if none exists
    if (ore.type === "sulfide" && !ore.flags.includes("-slag")) {
        setOre(name, "slag", `immersivegeology:slag_${name}`)
    }
}

/* Every ore set should have: /*
(*) optional

* poor raw ore
- (normal) raw ore
* rich raw ore
- dirty crushed ore
- crushed ore
* grit
* powder
* slag
* slag powder
*/

ServerEvents.tags('item', event => {
    for (const [name, ore] of Object.entries(ores)) {
        event.add("forge:raw_materials", ore.normal_ore)
        event.add(`forge:raw_materials/${name}`, ore.normal_ore)
    }
})

ServerEvents.recipes(event => {
})
