ServerEvents.recipes(event => {
    event.remove("treetap:tap")
    event.remove("treetap:water_from_crying_obsidian")

    event.shaped("treetap:tap", [
        "   ",
        " / ",
        "/__",
    ], {
        "/": "#forge:rods/copper",
        "_": "#forge:plates/copper"
    })

    event.custom({
        "type": "treetap:tap_extract",
        "log": {
            "item": "kubejs:tapped_acacia_log"
        },
        "processing_time": 3600,
        "result": {
            "item": "kubejs:latex_bucket"
        },
        "collect_bucket": true,
        "display_fluid": {
            "fluid": "kubejs:latex"
        }
    }).id("kubejs:latex_from_acacia")

    event.custom({
        "type": "treetap:tap_extract",
        "log": {
            "item": "kubejs:tapped_jungle_log"
        },
        "processing_time": 3600,
        "result": {
            "item": "kubejs:latex_bucket"
        },
        "collect_bucket": true,
        "display_fluid": {
            "fluid": "kubejs:latex"
        }
    }).id("kubejs:latex_from_jungle")

    event.custom({
        "type": "treetap:tap_extract",
        "log": {
            "item": "kubejs:tapped_pewen_log"
        },
        "processing_time": 1200,
        "result": {
            "item": "kubejs:latex_bucket"
        },
        "collect_bucket": true,
        "display_fluid": {
            "fluid": "kubejs:latex"
        }
    }).id("kubejs:latex_from_pewen")
})