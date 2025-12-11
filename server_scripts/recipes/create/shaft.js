ServerEvents.recipes(event => {
    event.remove({ id: "create:crafting/kinetics/shaft" })
    event.remove({ id: "create:cutting/andesite_alloy" })
    const postWoods = [
        "minecraft:oak",
        "minecraft:spruce",
        "minecraft:birch",
        "minecraft:jungle",
        "minecraft:acacia",
        "minecraft:dark_oak",
        "minecraft:mangrove",
        "minecraft:cherry",
        "quark:ancient",
        "quark:azalea",
        "quark:blossom",
        "minecraft:bamboo",
        "minecraft:crimson",
        "minecraft:warped"
    ]

    postWoods.forEach(wood => {
        event.remove({ id: `quark:building/crafting/${wood.path}_post` })
        event.remove({ id: `quark:building/crafting/stripped_${wood.path}_post` })

        let logName = (wood.path === "crimson" || wood.path === "warped") ? "stem" : (wood.path === "bamboo") ? "block" : "log";

        event.shaped(
            `8x quark:${wood.path}_post`,
            ['|', '|', '|'],
            { "|": `${wood}_${logName}` }
        )

        event.shaped(
            `8x quark:stripped_${wood.path}_post`,
            ['|', '|', '|'],
            { "|": `${wood.namespace}:stripped_${wood.path}_${logName}` }
        )
    })

    event.shapeless(
        'create:andesite_alloy',
        ['minecraft:clay_ball', "#forge:gravel"]
    ).id(KJ("shaft_compound"))

    event.shapeless(
        '4x create:andesite_alloy',
        ['minecraft:clay_ball', "#forge:gravel", "#forge:nuggets/zinc"]
    ).id(KJ("shaft_compound_from_zinc"))

    event.shapeless(
        '2x create:andesite_alloy',
        ['minecraft:clay_ball', "#forge:gravel", "#forge:nuggets/iron"]
    ).id(KJ("shaft_compound_from_iron"))

    event.shapeless(
        '3x create:andesite_alloy',
        ['minecraft:clay_ball', "#forge:gravel", "#forge:nuggets/nickel"]
    ).id(KJ("shaft_compound_from_nickel"))

    event.shapeless(
        '3x create:andesite_alloy',
        ['minecraft:clay_ball', "#forge:gravel", "#forge:nuggets/tin"]
    ).id(KJ("shaft_compound_from_tin"))

    event.custom({
        type: "create:item_application",
        ingredients: [
            { tag: "quark:posts" },
            { item: "create:andesite_alloy" }],
        results: [{ item: C("shaft") }]
    }).id(KJ("application/shaft"))

    event.shaped(
        `8x create:shaft`,
        ['/', '/', '/'],
        { "/": "#forge:rods/steel" }
    ).id(KJ("shaft_from_steel"))

    event.shaped(
        `12x create:shaft`,
        ['/', '/', '/'],
        { "/": "#forge:rods/stainless_steel" }
    ).id(KJ("shaft_from_stainless_steel"))

    event.shaped(
        `24x create:shaft`,
        ['/', '/', '/'],
        { "/": "#forge:rods/highspeedsteel" }
    ).id(KJ("shaft_from_hss"))

})