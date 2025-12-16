ServerEvents.recipes(event => {
    event.replaceInput({ id: /create:crafting\/logistics\/andesite_.unnel/ }, "create:andesite_alloy", "#forge:ingots/steel")
    event.replaceInput({ id: /create:crafting\/logistics\/andesite_.unnel/ }, "minecraft:dried_kelp", "#kubejs:rubber_substitutes")

    // replace andesite alloy with structural plates
    event.replaceInput([
        { id: "createbigcannons:basin_foundry_lid" },
        { id: /create:crafting\/kinetics\/(nozzle|cart_assembler|.+_chassis|sticker)/ },
        { id: /create:crafting\/logistics\/.+_postbox/ }
    ], "create:andesite_alloy", "#kubejs:structural_plates")

    // replace andesite alloy with shaft
    event.replaceInput([
        { id: "railways:crafting/handcar" },
        { id: /create:crafting\/kinetics\/(copper_valve_handle|piston_extension_pole|steam_engine|gantry_shaft)/ }
    ], "create:andesite_alloy", "create:shaft")

    event.replaceInput({ output: "create:mechanical_arm" }, "create:andesite_alloy", "create:brass_hand")

    event.replaceInput({ id: /create:crafting\/logistics\/.+_table_cloth/ }, "create:andesite_alloy", "#kubejs:mats")

    event.remove({ id: /createaddition:crafting\/.+_connector_.+/ })
    event.remove({ id: /create_new_age:shaped\/connector.*/ })

    event.replaceInput({ id: "createaddition:crafting/rolling_mill" }, "create:andesite_alloy", "#forge:ingots/steel")

    event.replaceInput({ id: /create:crafting\/kinetics\/.+_bracket/ }, "create:andesite_alloy", "#forge:ingots/iron")
})