ServerEvents.recipes(event => {
    event.custom({
        "type": "immersivegeology:centrifuge",
        "energy": 614400,
        "fluid_input": {
            "amount": 1000,
            "tag": "forge:acid"
        },
        "item_output": {
            "item": CAVES("toxic_paste")
        },
        "primary_fluid_out": {
            "amount": 500,
            "fluid": "immersivegeology:fluid_sulfuric_acid"
        },
        "secondary_fluid_out": {
            "amount": 250,
            "fluid": "immersivegeology:fluid_hydrochloric_acid"
        },
        "time": 1200
    }).id("kubejs:centrifuge/toxic_acid")
})