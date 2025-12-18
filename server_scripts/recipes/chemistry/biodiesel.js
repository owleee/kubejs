ServerEvents.recipes(event => {

    // readded below
    event.remove("immersiveengineering:refinery/biodiesel")

    let biodieselCatalysts = {
        "#forge:dusts/saltpeter": 16,
        "#kubejs:metal_oxide_catalysts": 20,
        "#forge:dusts/spa": 22,
    }

    for (const [catalyst, amount] of Object.entries(biodieselCatalysts)) {
        event.custom(refinery([
            "8mB #forge:plantoil",
            "8mB #forge:ethanol",
        ], catalyst,
            `${amount}mB immersiveengineering:biodiesel`,
            80
        )).id(`kubejs:refinery/biodiesel_from_plant_oil_using_${getItemID(catalyst).path.replace("/", "_")}`)

        event.custom(refinery([
            "8mB kubejs:fish_oil",
            "8mB #forge:ethanol",
        ], catalyst,
            `${Math.floor(amount * 1.125)}mB immersiveengineering:biodiesel`,
            90
        )).id(`kubejs:refinery/biodiesel_from_fish_oil_using_${getItemID(catalyst).path.replace("/", "_")}`)
    }
})