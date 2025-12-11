ServerEvents.recipes(event => {
})

const wood = [
    "minecraft:oak",
    "minecraft:spruce",
    "minecraft:birch",
    "minecraft:jungle",
    "minecraft:acacia",
    "minecraft:dark_oak",
    "minecraft:mangrove",
    "minecraft:cherry",
    "quark:ancient",
    "quark:blossom",
    "quark:azalea",
    "alexscaves:pewen",
    "alexscaves:thornwood",
    "ad_astra:glacian",
    "ars_nouveau:red_archwood",
    "ars_nouveau:blue_archwood",
    "ars_nouveau:purple_archwood",
    "ars_nouveau:green_archwood",
    "minecraft:warped",
    "minecraft:crimson"
]
// TODO: add more and fix edge cases (different archwood, nether tree "stems" etc)

LootJS.modifiers(event => {
    wood.forEach(w => {
        let mod = w.namespace
        let name = w.path
        let plankName = name
        if (/.*archwood.*/.test(name)) plankName = "archwood";
        let logName = `${name}_log`
        if (name === "crimson" || name === "warped") logName = `${name}_stem`
        event.addBlockLootModifier(`${mod}:stripped_${logName}`)
            .matchMainHand("#forge:saw")
            .removeLoot(Ingredient.all).addWeightedLoot(
                [3, 4],
                `${mod}:${plankName}_planks`
            );

        let woodName = `${name}_log`
        if (name === "crimson" || name === "warped") woodName = `${name}_hyphae`
        event.addBlockLootModifier(`${mod}:stripped_${woodName}`)
            .matchMainHand("#forge:saw")
            .removeLoot(Ingredient.all).addWeightedLoot(
                [3, 4],
                `${mod}:${plankName}_planks`
            );
    })

    event.addBlockLootModifier(`minecraft:stripped_bamboo_block`)
        .matchMainHand("#forge:saw")
        .removeLoot(Ingredient.all).addWeightedLoot(
            [1, 2],
            `minecraft:bamboo_planks`
        );

    event.addBlockLootModifier("#minecraft:planks")
        .matchMainHand("#forge:saw")
        .removeLoot(Ingredient.all).addWeightedLoot(
            [3, 4],
            "minecraft:stick"
        );
})

ServerEvents.recipes(event => {
    event.remove({
        type: "minecraft:crafting_shapeless",
        input: [/.*log.*/, /.*stem.*/, "minecraft:bamboo_block"],
        output: /.*planks.*/
    })

    event.remove({ id: /quark:.+easy_sticks/ })
    event.remove({ id: MC("stick") })
    event.remove({ id: MC("stick_from_bamboo_item") })

    wood.concat(["minecraft:bamboo"]).forEach(w => {
        let mod = w.namespace
        let name = w.path
        if (/(red|blue|green)/.test(name)) return;
        if (/.*archwood.*/.test(name)) name = "archwood"
        let slabName = name
        if (mod === "quark") slabName = `${name}_planks`
        event.custom({
            "type": "lychee:block_interacting",
            "item_in": { "tag": "forge:hammer" },
            "block_in": `${mod}:${name}_planks`,
            "post": [
                {
                    "type": "place",
                    "block": `${mod}:${slabName}_slab`,
                }, {
                    "type": "drop_item",
                    "item": IE("dust_wood"),
                    "contextual": {
                        "type": "chance",
                        "chance": 0.5
                    }
                },
                { type: "damage_item" },
                {
                    type: "execute",
                    command: "playsound immersiveengineering:metal_press_smash block @a",
                    hide: true
                }
            ]
        }).id(KJ(`squashing/${mod}/${name}_planks`))
    })

    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": "forge:hammer" },
        "block_in": "#minecraft:wooden_slabs",
        "post": [
            {
                "type": "place",
                "block": FD("cutting_board"),
            },
            { type: "damage_item" },
            {
                type: "execute",
                command: "playsound immersiveengineering:metal_press_smash block @a",
                hide: true
            }
        ]
    }).id(KJ(`squashing/worksurface`))
})