ServerEvents.recipes(event => {
    [
        "rocksalt",
        "saltpeter",
        "carnallite"
    ].forEach(brineType => {
        event.custom({
            type: "immersiveengineering:crusher",
            energy: 3200,
            input: { item: `immersivegeology:crystal_${brineType}` },
            result: { item: `immersivegeology:sediment_${brineType}` },
            secondaries: []
        }).id(`kubejs:crusher/${brineType}_crystal`)
    })
})
