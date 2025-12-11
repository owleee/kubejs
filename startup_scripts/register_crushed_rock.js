
StartupEvents.registry('block', event => {
    ["calcite", "deepslate", "diorite", "andesite", "granite", "limestone", "blackstone", "basalt"].forEach(stone => {
        event.create(`${stone}_gravel`, "falling")
            .displayName(`Crushed ${toTitleCase(stone)}`)
            .soundType("gravel")
            .tagBlock("mineable/shovel")
            .textureAll(`kubejs:block/crushed/${stone}`)
    })
})