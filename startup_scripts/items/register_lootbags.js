StartupEvents.registry('item', event => {
    ["§7Basic", "Common", "§aUncommon", "§9Rare", "§5Epic", "§6Legendary", "Mythic"].forEach(rarity => {
        if (rarity === "Mythic") {
            //§c§6§e§a§9§5
            event.create("mythic_lootbag")//, "pickaxe")
                .texture(`kubejs:item/lootbag/mythic`)
                .displayName(`§cM§6y§et§ah§9i§5c §cL§6o§eo§at§9b§5a§cg`)
                .unstackable()
            //.tier("lootbag")
            return
        }
        let id = String(rarity).replace(/§./, "").toLowerCase()
        event.create(`${id}_lootbag`)//, "hoe")
            .texture(`kubejs:item/lootbag/${id}`)
            .displayName(`${rarity} Lootbag`)
            .unstackable()
    });

    //["Primitive", "Lunar", "Martian", "Venusian", "Asteroidal", "Mercurial"]
})