ItemEvents.tooltip(tooltip => {
    tooltip.add("#forge:saw", 'Cuts logs into planks and planks into sticks');
    tooltip.add("#forge:saw", 'Can harvest ice blocks');

    [
        "64",
        "4,096",
        "262,144",
        "16,777,216",
        "1,073,741,824",
        "68,719,476,736",
        "4,398,046,511,104",
        "281,474,976,710,656",
        "18,014,398,509,481,984"
    ].forEach((amount, index) => {
        tooltip.add(`kubejs:singularity_${index + 1}`, amount + "x")
    })

    tooltip.add("kubejs:nothing", "Placeholder item used in certain picky recipes. Does nothing. Trash immediately.")

    tooltip.add("kubejs:oxygen_candle", "Burns to release oxygen. Refills space suit oxygen tanks.")

    tooltip.add("kubejs:mnt_dust", "Mononitrotoluene")
    tooltip.add("kubejs:dnt_dust", "Dinitrotoluene")
    tooltip.add("kubejs:raw_tnt_dust", "Trinitrotoluene")
    tooltip.add("kubejs:tnt_dust", "Trinitrotoluene")
    tooltip.add("kubejs:spa_dust", "Solid Phosphoric Acid")
})
