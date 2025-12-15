const itemTypes = ['ingot', 'nugget', 'plate', 'dust', 'pile'];
const basicItemTypes = ['ingot', 'nugget', 'dust', "pile"];

let _;

StartupEvents.registry('item', event => {

    const iterateItems = (materialName, itemList) => {
        let itemBuilderList = []
        itemList.forEach(itemType => {
            itemBuilderList.push(
                event.create(`${materialName}_${itemType}`)
                    .texture(`kubejs:item/${itemType}/${materialName}`)
                    .tag(`forge:${itemType}s`).tag(`forge:${itemType}s/${materialName}`)
            )
        })
        return itemBuilderList;
    }

    const basicMaterialSet = (materialName) => {
        return iterateItems(materialName, basicItemTypes);
    }

    const materialSet = (materialName) => {
        return iterateItems(materialName, itemTypes);
    }

    materialSet("chrome_steel")
    event.create("chrome_steel_ball")
    materialSet("mangalloy")
    materialSet("high_brass")
    materialSet("pipe_bronze");
    materialSet("nichrome")
    materialSet("kanthal")

    basicMaterialSet("purple_gold")

    basicMaterialSet("metallic_hydrogen")

    basicMaterialSet("antimony")

    dust(event, "arsenic")
    basicMaterialSet("gallium")
    basicMaterialSet("indium")

    _ = [
        "molybdenum",
        "nichrome",
        "kanthal",
    ].forEach(i => {
        event.create(`${i}_wire`)
            .texture(`kubejs:item/wire/${i}`)
            .tag("forge:wires").tag(`forge:wires/${i}`)
    });

    // DUSTS //
    _ = [
        "quartz", "copper", "iron", "zinc", "tin", "nickel", "steel", "brass", "gold", "glowstone",
        "ash", "kelp_ash", "silicon", "silica", "raw_silicon", "graphite", "constantan", "neodymium",
        "manganese", "chromium", "high_speed_steel", "sodium", "magnesium", "lead", "uranium", "enriched_uranium"
    ].forEach(i => {
        event.create(`${i}_pile`).displayName(`Pile of ${toTitleCase(i)} Dust`).texture(`kubejs:item/pile/${i}`)
    });
    ["brass", "desh", "ostrum", "calorite", "quartz", "azure_neodymium", "scarlet_neodymium"].forEach(i => {
        event.create(`${i}_dust`)
            .texture(`kubejs:item/dust/${i}`)
            .tag("forge:dusts").tag(`forge:dusts/${i}`)
    })
})

ItemEvents.modification(event => {
    event.modify("kubejs:indium_ingot", item => {
        item.foodProperties = food => {
            food.hunger(0);
            food.saturation(0);
            food.alwaysEdible(true);
        }
    })
})