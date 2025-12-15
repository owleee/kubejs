// priority: 6000000

global.removedRecipes = [];

/**
 * Exhaustively removes a recipe. Only necessary for recipes that will be automatically added in later scripts.
 * @param {*} event 
 * @param {*} id 
 */
const globalRemove = (event, id) => {
    event.remove({ id: id });
    global.removedRecipes.push(id);
}

const IE = item => `immersiveengineering:${item}`
const IG = item => `immersivegeology:${item}`
const IW = item => `immersive_weathering:${item}`
const FD = item => `farmersdelight:${item}`
const ARS = item => `ars_nouveau:${item}`
const C = item => `create:${item}`
const CNA = item => `create_new_age:${item}`
const MC = item => `minecraft:${item}`
const MOBS = item => `alexsmobs:${item}`
const CAVES = item => `alexscaves:${item}`
const SZ = item => `kubejs:${item}`
const KJ = item => `kubejs:${item}`
const tell = (msg) => { Utils.server.tell(msg); return msg }

const DEBUG = true;

const log = (msg) => {
    if (DEBUG) tell(msg);
}

const Casing = {
    STEEL: "create:andesite_casing",
    COPPER: "create:copper_casing",
    BRASS: "create:brass_casing",
    TRAIN: "create:railway_casing"
}
const HYDROGEN = "ad_astra:hydrogen"
const OXYGEN = "ad_astra:oxygen"
const COLOURS = ["white", "gray", "light_gray", "black", "red", "blue", "light_blue", "green", "yellow", "brown", "orange", "pink", "purple", "cyan", "lime", "magenta"];
const COLORS = COLOURS;

const ItemIO = {
    NOTHING: {
        base_ingredient: [
        ],
        count: 0
    }
}
const Chemical = {
    UNIT: 125 // mB
}

/**
 * Helper function to convert standard notation to JSON for use in recipes.
 * @param {string} ID The item or fluid in standard notation.
 * @param {boolean} isFluid Used to specify if the "item" is a fluid. Defaults to false.
 * @returns {object} An item or fluid object for use in recipe JSONs.
 */
const item = (ID, isFluid) => {
    // converts string id to item/fluid or tag object with chance
    // in form "40% 10x #namespace:path"
    // OR "40% 1B namespace:path" for fluids
    // bucket amount must be supplied to specify fluid

    if (typeof ID === "object") return ID;

    let itemEntry = {};
    let itemID = "";
    let chance;
    let count;

    let bucketAmount = 1000;

    if (!ID) return;

    ID.split(" ").forEach(arg => {
        if (arg.endsWith("%")) {
            // chance argument
            chance = parseFloat(arg.slice(0, -1)) / 100;
        } else if (arg.endsWith("B")) {
            isFluid = true;
            bucketAmount = parseInt(arg.replace(/[mB]+$/, "")) * 1000;
            if (arg[arg.length - 2] === "m") {
                bucketAmount /= 1000;
            }
        } else if (arg.endsWith("x") && !isFluid) {
            // count argument
            count = parseInt(arg.slice(0, -1));
        } else if (arg.endsWith("u")) {
            isFluid = true;
            bucketAmount = parseInt(arg.replace(/u$/, "")) * Chemical.UNIT;
        } else if (arg.endsWith("i")) {
            isFluid = true;
            bucketAmount = parseInt(arg.replace(/i$/, "")) * Amount.INGOT;
        } else if (/^#?[a-z_0-9]+:[a-z\/_0-9]+$/.test(arg)) {
            // item or tag id
            itemID = arg;
        }
    })

    if (isFluid) return Object.assign(getFluidOrTag(itemID), { amount: bucketAmount });

    itemEntry = getItemOrTag(itemID)

    if (count) itemEntry.count = count;
    if (chance) itemEntry.chance = chance;

    return itemEntry
}

const getItemID = (i) => {
    let id = item(i);
    return id.item || id.tag || id.fluid || id.fluidTag;
}

/**
 * Helper function to parse whether a notated item is a tag or item, and return the appropriate object.
 * @param {string} ID The item or tag ID.
 * @returns {object}  An item or fluid object for use in recipe JSONs.
 */
const getItemOrTag = (ID) => {
    if (ID.charAt(0) === "#") return {
        tag: ID.substring(1)
    }
    return {
        item: ID
    }
}

/**
 * Helper function to parse whether a notated fluid is a tag or fluid, and return the appropriate object.
 * @param {string} ID The fluid or fluid tag ID.
 * @returns {object} An fluid object for use in recipe JSONs.
 */
const getFluidOrTag = (ID) => {
    if (ID.charAt(0) === "#") return {
        fluidTag: ID.substring(1)
    }
    return {
        fluid: ID
    }
}

/**
 * Helper function to parse a list of items in standard notation to JSON for use in recipes.
 * @param {string|string[]} itemList The item or fluid(s) in standard notation.
 * @returns {object[]} An array of item or fluid objects for use in recipe JSONs.
 */
const parseItemList = (itemList) => {
    if (!Array.isArray(itemList)) {
        itemList = [itemList];
    }
    return itemList.map(itemID => item(itemID));
}

/**
 * Wrapper for the item() function to convert to Immersive Engineering recipe syntax.
 * @param {string} ID The item or fluid in standard notation.
 * @param {boolean} isFluid Used to specify if the "item" is a fluid. Defaults to false.
 * @param {boolean} isInput Used to specify if the item is an input, as some recipes require tag inputs. Defaults to false.
 * @returns {object} An item or fluid object for use in Immersive Engineering recipe JSONs.
 */
const I_item = (ID, isFluid, isInput) => {
    // adapts to immersive suite syntax
    let i = item(ID, isFluid);

    if (!i && isFluid) return {
        amount: 0,
        fluid: "minecraft:empty"
    }
    if (!i) return ItemIO.NOTHING;
    if (i.item) {
        return {
            base_ingredient: { item: i.item },
            count: i.count || 1
        }
    } else if (i.tag) {
        return {
            base_ingredient: { tag: i.tag },
            count: i.count || 1
        }
    } else if (i.fluid) {
        if (isInput) {
            return {
                tag: i.fluid,
                amount: i.amount || 1000
            }
        }
        return {
            fluid: i.fluid,
            amount: i.amount || 1000
        }
    } else if (i.fluidTag) {
        return {
            tag: i.fluidTag,
            amount: i.amount || 1000
        }
    }
    return ItemIO.NOTHING
}

/**
 * Wrapper for the I_item() function for fluids only.
 * @param {string} ID The fluid in standard notation.
 * @param {boolean} isInput Used to specify if the item is an input, as some recipes require tag inputs. Defaults to false.
 * @returns {object} An fluid object for use in Immersive Engineering recipe JSONs.
 */
const I_fluid = (ID, isInput) => {
    return I_item(ID, true, isInput);
}

/**
 * Analogue of parseItemList() for Immersive Engineering recipes, using I_item().
 * @param {string|string[]} itemList The item or fluid(s) in standard notation.
 * @returns {object[]} An array of item or fluid objects for use in Immersive Engineering recipe JSONs.
 */
const I_parseItemList = (itemList) => {
    if (typeof itemList === "string") {
        itemList = [itemList];
    }
    return itemList.map(itemID => I_item(itemID));
}

/**
 * Generic Create recipe generator.
 * @param {string} type The type of recipe. If no namespace is specified, "create:" is assumed.
 * @param {string} input The item input in standard notation.
 * @param {string|string[]} outputs The item output(s) in standard notation.
 * @param {number} duration The processing time of the recipe in ticks. Defaults to 250.
 * @returns {object} Create recipe object to be used in ServerEvents.recipes().
 */
const generic = (type, input, outputs, duration) => {
    // default to create namespace if none specified
    if (!type.includes(":")) type = `create:${type}`
    return {
        type: type,
        ingredients: [item(input)],
        processingTime: duration || 250,
        results: parseItemList(outputs)
    }
}

const generic_basin = (type, inputs, outputs, duration) => {

}

const milling = (input, outputs, duration) => {
    return generic("milling", input, outputs, duration)
}

const crushing = (input, outputs, duration) => {
    return generic("crushing", input, outputs, duration)
}

const cutting = (input, outputs, duration) => {
    return generic("cutting", input, outputs, duration || 100)
}

const splashing = (input, outputs) => {
    return generic("splashing", input, outputs)
}
const washing = splashing; // alias

const Heat = {
    NONE: "none",
    HEATED: "heated",
    SUPERHEATED: "superheated",
    SUPER: "superheated"
}
const mixing = (inputs, outputs, heatRequirement) => {
    return {
        type: "create:mixing",
        ingredients: parseItemList(inputs),
        results: parseItemList(outputs),
        heatRequirement: heatRequirement || Heat.NONE
    }
}

const working = (input, tool, outputs) => {
    return {
        type: "farmersdelight:cutting",
        ingredients: [item(input)],
        result: parseItemList(outputs),
        tool: item(tool)
    }
}

const board_cutting = (input, outputs) => {
    return working(input, "#forge:tools/knives", outputs)
}

const board_chopping = (input, outputs) => {
    return working(input, "#forge:tools/axes", outputs)
}

const application = (baseBlock, appliedItem, output) => {
    return {
        type: "create:item_application",
        ingredients: [
            item(baseBlock),
            item(appliedItem)
        ],
        results: [item(output)]
    }
}

const pressing = (input, outputs) => {
    return {
        type: "create:pressing",
        ingredients: [item(input)],
        results: parseItemList(outputs)
    }
}

// todo: convert to cdg recipe
const melting = (input, output, heatRequirement, processingTime) => {
    return {
        type: "createbigcannons:melting",
        heatRequirement: heatRequirement || Heat.NONE,
        ingredients: [item(input)],
        processingTime: processingTime || 180,
        results: parseItemList(output)
    }
}

const bulk_vat = (inputs, outputs, heatRequirement, processingTime) => {
    return {
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": parseItemList(inputs),
        "processingTime": processingTime || 400,
        "results": parseItemList(outputs),
        "heatRequirement": heatRequirement || Heat.NONE
    }
}

const compacting = (inputs, outputs, heatRequirement) => {
    return {
        type: "create:compacting",
        heatRequirement: heatRequirement || Heat.NONE,
        ingredients: parseItemList(inputs),
        results: parseItemList(outputs)
    }
}

const filling = (inputItem, inputFluid, outputItems) => {
    return {
        type: "create:filling",
        ingredients: [
            item(inputItem),
            item(inputFluid, true)
        ], results: parseItemList(outputItems)
    }
}

/**
 * Helper function that generates a Create Deploying recipe object.
 * @param {*} inputItem 
 * @param {*} deployedItem 
 * @param {*} outputItems 
 * @returns Create Deploying recipe object to be used in ServerEvents.recipes().
 */
const deploying = (inputItem, deployedItem, outputItems) => {
    return {
        type: "create:deploying",
        ingredients: [
            item(inputItem),
            item(deployedItem)
        ],
        results: parseItemList(outputItems)
    }
}

/**
 * Returns an Diesel Generators Distillation recipe object to be used in ServerEvents.recipes(). 
 * @param {string} inputFluid Fluid input string in standard notation.
 * @param {string|string[]} outputFluids Fluid output string or array of strings in standard notation.
 * @param {Heat} heatRequirement Heat requirement for the recipe. Default is Heat.HEATED.
 * @param {number} processingTime Total processing time of the recipe. Default is 100 ticks.
 * @returns {object} Diesel Generators Distillation recipe object to be used in ServerEvents.recipes().
 */
const distillation = (inputFluid, outputFluids, heatRequirement, processingTime) => {
    return {
        type: "createdieselgenerators:distillation",
        ingredients: [item(inputFluid)],
        heatRequirement: heatRequirement || Heat.HEATED,
        processingTime: processingTime || 100,
        results: parseItemList(outputFluids)
    }
}

/**
 * Returns an Immersive Engineering Mixer recipe object to be used in ServerEvents.recipes(). 
 * @param {string} inputFluid Fluid input string in standard notation.
 * @param {string|string[]} inputItems Item input string or array of strings in standard notation.
 * @param {string} outputFluid Fluid output string in standard notation.
 * @param {number} energy Total energy cost of the recipe. Default is 1600 FE.
 * @returns {object} Immersive Engineering Mixer recipe object to be used in ServerEvents.recipes().
 */
const mixer = (inputFluid, inputItems, outputFluid, energy) => {
    return {
        type: "immersiveengineering:mixer",
        energy: energy || 1600,
        fluid: I_item(inputFluid, true, true),
        inputs: I_parseItemList(inputItems),
        result: I_item(outputFluid, true)
    }
}

/**
 * Returns an Immersive Geology Crystalliser recipe object to be used in ServerEvents.recipes(). 
 * @param {string} inputFluid Fluid input string in standard notation.
 * @param {string} outputItem Item output string in standard notation.
 * @param {string} outputFluid Fluid output string in standard notation.
 * @param {number} energy Total energy cost of the recipe. Default is 1600 FE.
 * @param {number} time Total processing time of the recipe. Default is 300 t.
 * @returns {object} Immersive Geology Crystalliser recipe object to be used in ServerEvents.recipes().
 */
const crystalliser = (inputFluid, outputItem, outputFluid, energy, time) => {
    return {
        type: "immersivegeology:crystallizer",
        energy: energy || 38400,
        time: time || 300,
        input: I_item(inputFluid, true, true),
        fluidResult: I_item(outputFluid, true),
        result: I_item(outputItem),
    }
}
const crystallizer = crystalliser // i cannot spell

const ballmill = (inputItem, outputItem, energy, time) => {
    return {
        type: "immersivegeology:ballmill",
        energy: energy || 64000,
        input: I_item(inputItem),
        result: I_item(outputItem),
        time: time || 800
    }
}

const centrifuge = (inputFluid, outputFluids, outputItem, energy, time) => {
    return {
        type: "immersivegeology:centrifuge",
        energy: energy || 614400,
        time: time || 1200,
        fluid_input: I_item(inputFluid, true, true),
        primary_fluid_out: I_item(outputFluids[0], true),
        item_output: I_item(outputItem),
        secondary_fluid_out: I_item(outputFluids[1], true)
    }
}

/**
 * Helper function that generates an Immersive Geology Chemical Reactor recipe object.
 * @param {*} inputFluids The fluid input string or array of strings in standard notation.
 * @param {*} inputItem The item input string in standard notation.
 * @param {*} outputFluid 
 * @param {*} outputItem 
 * @param {*} energy 
 * @param {*} time 
 * @returns 
 */
const chemical_reactor = (inputFluids, inputItem, outputFluid, outputItem, energy, time) => {
    let cr = {
        type: "immersivegeology:chemical_reactor",
        energy: energy || 51200,
        time: time || 200,
        fluidInputA: I_fluid(inputFluids[0], true),
        itemInput: I_item(inputItem),
        fluidResult: I_fluid(outputFluid),
        result: I_item(outputItem),
    }
    if (inputFluids.length > 1) {
        cr.fluidInputB = I_fluid(inputFluids[1], true);
    }
    if (inputFluids.length > 2) {
        cr.fluidInputC = I_fluid(inputFluids[2], true);
    }
    return cr;
}

const arc_furnace = (input, additives, outputs, slag, energy, time) => {
    let r = {
        "type": "immersiveengineering:arc_furnace",
        "additives": I_parseItemList(additives),
        "energy": energy || 51200,
        "time": time || 100,
        "input": I_item(input),
        "results": I_parseItemList(outputs)
    }

    if (slag) r.slag = I_item(slag)

    return r;
}

const KilnHeat = {
    LV: 30,
    MV: 75,
    HV: 120,
    EHV: 165
}

const rotary_kiln = (inputItem, outputItem, heat, time) => {
    return {
        type: "immersivegeology:rotary_kiln",
        heat: heat || KilnHeat.HV,
        time: time || 300,
        input: item(inputItem),
        result: item(outputItem),
    }
}
const kiln = rotary_kiln;

const blast_furnace = (inputItem, outputItem, slag, time) => {
    return {
        type: "immersiveengineering:blast_furnace",
        input: I_item(inputItem),
        result: I_item(outputItem),
        slag: I_item(slag),
        time: time || 200
    }

}

const squeezer = (inputItem, outputItem, outputFluid, energy) => {
    return {
        type: "immersiveengineering:squeezer",
        energy: energy || 19200,
        input: I_item(inputItem),
        result: I_item(outputItem),
        fluid: I_item(outputFluid, true)
    }
}

const refinery = (inputFluids, catalystItem, outputFluid, energy) => {
    if (typeof inputFluids === "string") inputFluids = [inputFluids];
    let r = {
        "type": "immersiveengineering:refinery",
        "energy": energy || 120,
        "input0": I_fluid(inputFluids[0], true),
        "result": I_item(outputFluid, true)
    }
    if (catalystItem) { r.catalyst = item(catalystItem); }
    if (inputFluids.length > 1) { r.input1 = I_fluid(inputFluids[1], true); }
    return r;
}

/**
 * Recipe generator for Immersive Geology Gravity Separator.
 * @param {string} inputItem The item input in standard notation.
 * @param {string[2]} outputItems The item outputs in standard notation. First item is main output, second is byproduct with chance.
 * @param {number} processingTime The processing time of the recipe in ticks. Default is 100 t (5s).
 * @param {number} water The amount of water used in the process. Default is 100 mB.
 * @returns Immersive Geology Gravity Separator recipe object to be used in ServerEvents.recipes().
 */
const gravity_separator = (inputItem, outputItems, processingTime, water) => {
    let byproduct = item(outputItems[1]);
    return {
        type: "immersivegeology:gravity_separator",
        input: item(inputItem),
        time: processingTime || 100,
        water: water || 100,
        result: item(outputItems[0]),
        byproduct: { item: byproduct.item },
        byproduct_chance: byproduct.chance || 1.0,
    }
}

const bottling_machine = (inputItems, inputFluid, outputItems) => {
    return {
        type: "immersiveengineering:bottling_machine",
        inputs: I_parseItemList(inputItems),
        fluid: I_fluid(inputFluid, true),
        results: I_parseItemList(outputItems)
    }
}

const bottling_machine_casting = (inputFluid, mold, outputItem) => {
    // if no namespace assume immersiveengineering
    if (!mold.includes(":")) mold = `immersiveengineering:mold_${mold}`
    return bottling_machine(mold, inputFluid, [outputItem, mold]);
}

const all_crushing = (recipeEvent, inputItem, outputItem, processingTime) => {
    recipeEvent.custom(milling(inputItem, outputItem, processingTime))
        .id(`kubejs:milling/${getItemID(outputItem).path}_from_${getItemID(inputItem).path}`);
    recipeEvent.custom(crushing(inputItem, outputItem, processingTime))
        .id(`kubejs:crushing/${getItemID(outputItem).path}_from_${getItemID(inputItem).path}`);
    // TODO: IE crushing
}

ServerEvents.recipes(event => {
})