let lootbags = {
    "kubejs:basic_lootbag": "kubejs:lootbags/basic",
    //"kubejs:common_lootbag",
    //"kubejs:uncommon_lootbag",
    //"kubejs:rare_lootbag",
    //"kubejs:epic_lootbag",
    //"kubejs:legendary_lootbag",
    //"kubejs:mythic_lootbag",
};

ItemEvents.rightClicked(event => {
    if (event.item.id in lootbags) {
        let lootbag = event.item.id
        let lootTable = lootbags[lootbag]

        const { x, y, z } = event.player

        event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${x} ${y} ${z} loot ${lootTable}`);
        event.server.runCommandSilent(`execute in ${event.level.dimension} run playsound minecraft:entity.experience_orb.pickup player @a ${x} ${y} ${z}`);
        event.item.count--;
        event.cancel();
    }
})