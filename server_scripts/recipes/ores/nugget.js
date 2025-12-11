ServerEvents.recipes(event => {
    event.remove({ id: /spelunkery:raw_.+/ });
    event.remove({ id: /spelunkery:.+_nugget_from_smelting/ });
    event.remove({ id: /spelunkery:.+_nugget_from_blasting/ });

    for (const [name, ore] of Object.entries(ores)) {

        if (!ores.nugget || !ores.normal_ore) continue;

        event.shaped(
            ore.normal_ore,
            [
                'OOO',
                'OOO',
                'OOO'
            ],
            {
                O: ore.nugget
            }
        ).id(`kubejs:${name}_from_nugget`)

        event.shapeless(
            Item.of(ore.nugget, 9),
            [
                `#forge:raw_materials/${name}`
            ]
        ).id(`kubejs:${name}_nugget`)
    }
})