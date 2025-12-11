ServerEvents.recipes(event => {
    event.remove("ad_astra:launch_pad")
    event.shaped("ad_astra:launch_pad", [
        "PPP",
        "PPP",
        "PPP"
    ], {
        P: "kubejs:launch_plate"
    }).id("kubejs:launch_pad")

    // launch plate from steel
    event.shaped("kubejs:launch_plate", [
        "PPP",
        "CCC",
        "PPP"
    ], {
        C: "immersivegeology:storage_block_srconcrete",
        P: "#forge:plates/steel"
    }).id("kubejs:launch_plate")

    // launch plate from obsidian (lunar age)
    event.shaped("kubejs:launch_plate", [
        "PP",
        "CC",
        "PP"
    ], {
        C: "immersivegeology:storage_block_srconcrete",
        P: "#forge:plates/obsidian"
    }).id("kubejs:launch_plate_from_obsidian")

    // launch plate from titanium (late game)
    event.shaped("kubejs:launch_plate", [
        "P",
        "C",
        "P"
    ], {
        C: "immersivegeology:storage_block_trconcrete",
        P: "#forge:plates/titanium"
    }).id("kubejs:launch_plate_from_titanium")

    // launch plate from titanium and tungsten (end game)
    event.shaped("3x kubejs:launch_plate", [
        "P",
        "C",
        "P"
    ], {
        C: "immersivegeology:storage_block_trconcrete",
        P: "#forge:plates/tungsten"
    }).id("kubejs:launch_plate_from_tungsten")
})