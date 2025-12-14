ServerEvents.recipes(event => {
    event.remove({ id: /immersiveengineering:crafting\/.+_from_slab/ })

    event.replaceInput({ id: "minecraft:bucket" }, "minecraft:iron_ingot", "#kubejs:bucket_plates")

    event.replaceInput({ id: /immersiveengineering:crafting\/coil_.+/ }, "minecraft:iron_ingot", "#forge:rods/iron")

    event.replaceInput(
        [
            { id: /(minecraft|quark|farmersdelight):.+_smithing$/ },
            { id: /create:crafting\/appliances\/.*netherite.*/ }
        ],
        "minecraft:netherite_upgrade_smithing_template",
        "kubejs:netherite_plating_kit"
    )

    event.replaceInput(
        [
            { id: /(minecraft|quark|farmersdelight):.+_smithing$/ },
            { id: /create:crafting\/appliances\/.*netherite.*/ }
        ],
        "minecraft:netherite_ingot",
        "#forge:dusts/netherite"
    )

    event.remove("sophisticatedbackpacks:netherite_backpack")
    event.custom({
        type: "sophisticatedbackpacks:smithing_backpack_upgrade",
        addition: { tag: "forge:dusts/netherite" },
        base: { item: "sophisticatedbackpacks:diamond_backpack" },
        result: { item: "sophisticatedbackpacks:netherite_backpack" },
        template: { item: "kubejs:netherite_plating_kit" }
    }).id("kubejs:smithing/netherite_backpack")


})