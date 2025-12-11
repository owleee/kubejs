ServerEvents.recipes(event => {
    // FLINT PICKAXE //
    event.remove({ id: /.*wooden_pickaxe.*/ })
    event.shaped('minecraft:wooden_pickaxe', [
        '&#',
        '/&'
    ], {
        "&": 'kubejs:knapped_flint',
        "/": "#forge:rods/wooden",
        "#": "#kubejs:primitive_tool_bindings"
    }).id("kubejs:flint_pickaxe")

    // FLINT AXE //
    event.remove({ id: /.*wooden_axe.*/ })
    event.shaped('minecraft:wooden_axe', [
        '&#',
        '/ '
    ], {
        "&": 'kubejs:knapped_flint',
        "/": "#forge:rods/wooden",
        "#": "#kubejs:primitive_tool_bindings"
    }).id("kubejs:flint_axe")

    // FLINT KNIFE //
    event.remove({ id: /.*flint_knife.*/ })
    event.shaped(FD("flint_knife"), [
        ' &',
        '/#'
    ], {
        "&": 'kubejs:knapped_flint',
        "/": "#forge:rods/wooden",
        "#": "#kubejs:primitive_tool_bindings"
    }).id("kubejs:flint_knife")

    // FLINT SHEARS //
    event.shaped(KJ("flint_shears"), [
        '& ',
        '#&'
    ], {
        "&": 'kubejs:knapped_flint',
        "#": "#kubejs:primitive_tool_bindings"
    }).id("kubejs:flint_shears")

    // FLINT CHISEL //
    event.remove({ id: "spelunkery:flint_hammer_and_chisel" })
    event.shaped("spelunkery:flint_hammer_and_chisel", [
        '&#',
        '/H'
    ], {
        "/": "#forge:rods/wooden",
        "&": 'kubejs:knapped_flint',
        "#": "#kubejs:primitive_tool_bindings",
        "H": "#forge:hammer"
    }).consumeIngredient("#forge:hammer")
        .id("kubejs:flint_chisel")

    // FLINT SAW //
    event.shaped("kubejs:flint_saw", [
        '#/',
        '&&'
    ], {
        "/": "#forge:rods/wooden",
        "&": 'kubejs:knapped_flint',
        "#": "#kubejs:primitive_tool_bindings"
    }).id(KJ("flint_saw"));
})