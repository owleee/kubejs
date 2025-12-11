ServerEvents.recipes(event => {
    event.shaped("kubejs:space_fabric", [
        "RRR",
        "LLL",
        "FFF"
    ], {
        R: "#forge:rubbers",
        L: "#forge:plates/lead",
        F: "#forge:fabric_hemp"
    }).id("kubejs:space_fabric")

    event.remove({ id: "ad_astra:space_suit" })

    event.shaped(
        Item.of('ad_astra:space_suit', {
            BotariumData: {
                StoredFluids: [{
                    Amount: 500,
                    Fluid: "kubejs:air"
                }]
            }
        }), [
        "# #",
        "TOT",
        "###"
    ], {
        "#": "kubejs:space_fabric",
        O: "ad_astra:oxygen_gear",
        T: "ad_astra:gas_tank"
    }
    ).id("kubejs:space_suit")
})
