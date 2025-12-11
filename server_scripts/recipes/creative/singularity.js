ServerEvents.recipes(event => {

    // compact energy singularity to once compressed
    event.custom(compacting(
        "64x kubejs:energy_singularity",
        "kubejs:singularity_1",
        Heat.SUPERHEATED
    )).id(`kubejs:compacting/singularity_1`)

    event.custom(squeezer(
        `64x kubejs:energy_singularity`,
        `kubejs:singularity_1`,
    )).id(`kubejs:squeezer/singularity_1`)

    // compact once through nonuple compressed
    for (let i = 1; i < 9; i++) {
        event.custom(compacting(
            `64x kubejs:singularity_${i}`,
            `kubejs:singularity_${i + 1}`,
            Heat.SUPERHEATED
        )).id(`kubejs:compacting/singularity_${i + 1}`)

        event.custom(squeezer(
            `64x kubejs:singularity_${i}`,
            `kubejs:singularity_${i + 1}`,
        )).id(`kubejs:squeezer/singularity_${i + 1}`)
    }

    // compact 5 nonuple compressed to matter singularity
    event.custom(compacting(
        "5x kubejs:singularity_9",
        "kubejs:matter_singularity",
        Heat.SUPERHEATED
    )).id(`kubejs:compacting/singularity_10`)

    event.custom(squeezer(
        `5x kubejs:singularity_9`,
        `kubejs:matter_singularity`,
    )).id(`kubejs:squeezer/singularity_10`)
});