const transitionalItem = "kubejs:incomplete_kiln_barrel"
const totalLoops = 16

ServerEvents.recipes(event => {
    for (const [materialName, wireAmount] of Object.entries({
        constantan: 64, //CuNi
        nichrome: 40, //NiCr
        kanthal: 24, //FeCrAl
        molybdenum: 24,
        tungsten: 16,
        platinum: 16
    })) {
        let sequence = [];
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: item("immersiveengineering:fluid_pipe"),
            loops: wireAmount,
            results: [item("kubejs:unplated_kiln_barrel")],
            sequence: [
                deploying(
                    transitionalItem,
                    `#forge:wires/${materialName}`,
                    transitionalItem
                ),
                filling(
                    transitionalItem,
                    "1B kubejs:refractory_ceramic",
                    transitionalItem
                )
            ],
            transitionalItem: item(transitionalItem)
        }).id("kubejs:sequenced_assembly/kiln_barrel_using_" + materialName)
    }

    event.shaped("kubejs:kiln_barrel", [
        "###",
        "#O#",
        "###"
    ], {
        "#": "#forge:plates/steel",
        O: "kubejs:unplated_kiln_barrel"
    }).id("kubejs:kiln_barrel")
})