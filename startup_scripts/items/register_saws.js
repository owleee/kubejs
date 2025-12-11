StartupEvents.registry('item', event => {
    event.create("flint_saw", "axe")
        .texture("kubejs:item/saw/flint")
        .maxDamage(32).attackDamageBaseline(1.5).speed(1)

    event.create("copper_saw", "axe")
        .texture("kubejs:item/saw/copper")
        .maxDamage(64).attackDamageBaseline(1.5).speed(3)

    event.create("bronze_saw", "axe")
        .texture("kubejs:item/saw/bronze")
        .maxDamage(128).attackDamageBaseline(1.5).speed(4)

    event.create("iron_saw", "axe")
        .texture("kubejs:item/saw/iron")
        .maxDamage(128).attackDamageBaseline(1.5).speed(5)

    event.create("gold_saw", "axe").displayName("Golden Saw")
        .texture("kubejs:item/saw/gold")
        .maxDamage(32).attackDamageBaseline(1.5).speed(11)

    event.create("diamond_saw", "axe")
        .texture("kubejs:item/saw/diamond")
        .maxDamage(512).attackDamageBaseline(1.5).speed(7)

    event.create("netherite_saw", "axe")
        .texture("kubejs:item/saw/netherite")
        .maxDamage(1024).attackDamageBaseline(1.5).speed(8)

    event.create("steel_saw", "axe")
        .texture("kubejs:item/saw/steel")
        .maxDamage(320).attackDamageBaseline(1.5).speed(6)

    event.create("boron_nitride_saw", "axe")
        .texture("kubejs:item/saw/boron_nitride")
        .maxDamage(1024).attackDamageBaseline(1.5).speed(7)
})