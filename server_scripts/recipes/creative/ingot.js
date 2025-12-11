const ingots = [
    "aluminum",
    "azure_neodymium",
    "bismuth",
    "brass",
    "bronze",
    "calorite",
    "chromium",
    "chrome_steel",
    "cobalt",
    "constantan",
    "copper",
    "desh",
    "electrum",
    "enriched_uranium",
    "gold",
    "graphite",
    "hastelloy",
    "high_brass",
    "high_speed_steel",
    "iron",
    "lead",
    "magnesium",
    "manganese",
    "mangalloy",
    "molybdenum",
    "neodymium",
    "netherite",
    "nickel",
    "osmium",
    "ostrum",
    "pipe_bronze",
    "platinum",
    "raw_silicon",
    "scarlet_neodymium",
    "silicon",
    "silver",
    "sodium",
    "stainless_steel",
    "steel",
    "thorium",
    "tin",
    "titanium",
    "tungsten",
    "tungsten_carbide",
    "uranium",
    "vanadium",
    "void_steel",
    "zinc"
];

const ingotHeight = 6;
const ingotWidth = 8;

let key = {}

ingots.forEach((ingot, i) => {
    key[String.fromCharCode(65 + i)] = `#forge:ingots/${ingot}`
})

const pattern = [];

for (let i = 0; i < Object.keys(key).length; i += ingotWidth) {
    pattern.push(Object.keys(key).slice(i, i + ingotWidth).join(""));
}

ServerEvents.recipes(recipe => {



    recipe.custom({
        type: "create:mechanical_crafting",
        key: key,
        pattern: pattern,
        result: { item: "kubejs:singularity_ingot" }
    })
})