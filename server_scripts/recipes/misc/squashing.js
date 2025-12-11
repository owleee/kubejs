ServerEvents.recipes(event => {
    event.remove({ id: MC("bone_meal") })
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: MC("bone") }],
        result: [
            { item: MC("bone_meal"), count: 2 },
            { item: MC("bone_meal"), chance: 0.5 }
        ],
        tool: { tag: "forge:hammer" }
    }).id(KJ(`squashing/bone_meal`))

    //event.remove({ id: MC("bone_meal") })
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: MC("wheat") }],
        result: [
            { item: C("wheat_flour") },
            { item: C("wheat_flour"), count: 2, chance: 0.25 },
            { item: FD("straw"), chance: 0.75 },
            { item: MC("wheat_seeds"), chance: 0.25 }
        ],
        tool: { tag: "forge:hammer" }
    }).id(KJ(`squashing/flour`))
})