ServerEvents.recipes(event => {
    // FIRE CLAY //
    event.remove({ id: "immersivegeology:crafting/craft_raw_fire_clay" })

    event.shapeless('3x immersivegeology:raw_fire_clay', [
        'minecraft:clay_ball',
        ["minecraft:sand", "minecraft:clay_ball"],
        "minecraft:sand",
        "#forge:dusts/cooked_flint"
    ]).id(KJ("fire_clay"))

    event.campfireCooking("kubejs:cooked_flint_dust", "#forge:dusts/flint", 0.4).cookingTime(30 * 20).id(KJ("flint_dust_campfire"))
    event.campfireCooking(IG("refractory_brick"), IG("raw_fire_clay"), 0.4).cookingTime(30 * 20).id(KJ("fireclay_campfire"))


    event.custom(mixer(
        "500mB #forge:concrete",
        "#kubejs:refractory_compounds",
        "512mB kubejs:refractory_ceramic"
    )).id("kubejs:mixer/refractory_ceramic")

    event.custom(bottling_machine_casting(
        "32mB kubejs:refractory_ceramic",
        "kubejs:ingot_mold",
        "immersivegeology:refractory_brick"
    )).id("kubejs:bottling/refractory_brick")

    event.custom(compacting(
        "32mB kubejs:refractory_ceramic",
        "immersivegeology:refractory_brick"
    )).id("kubejs:compacting/refractory_brick")


    event.shaped("immersivegeology:slab_refractory_brick",
        ["BB"],
        { B: "immersivegeology:refractory_brick" }
    ).id("immersivegeology:crafting/slab_refractory_brick")

    event.replaceInput("immersiveengineering:crafting/blastbrick", "minecraft:magma_block", "immersivegeology:storage_block_refractory_brick")
})