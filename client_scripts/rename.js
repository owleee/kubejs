const toTitleCase = str => {
    return str.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    ).replace("_", "");
}

ClientEvents.lang(["en_gb", "en_us"], event => {
    event.renameItem("minecraft:wooden_pickaxe", 'Flint Pickaxe');
    event.renameItem("minecraft:wooden_axe", 'Flint Hatchet');
    event.renameItem("minecraft:stone_pickaxe", 'Copper Pickaxe');
    event.renameItem("minecraft:stone_axe", 'Copper Axe');

    event.renameItem("create:andesite_alloy", "Shaft Compound")

    event.renameItem("create:andesite_casing", 'Steel Casing');
    event.renameItem("create:andesite_funnel", 'Steel Funnel');
    event.renameItem("create:andesite_tunnel", 'Steel Tunnel');
    event.renameItem("create:andesite_table_cloth", 'Steel Table Cover');
    event.renameItem("create:brass_hand", 'Mechanical Hand');

    event.renameItem("snad:snad", 'Alien Slag Gravel');

    event.renameItem("immersivegeology:hammer_stone", 'Stone Hammer');

    event.renameItem("immersivegeology:raw_fire_clay", 'Raw Fireclay');
    event.renameItem("immersivegeology:refractory_brick", 'Firebrick');

    event.renameItem("immersive_aircraft:propeller", "Large Rotor")

    ["copper", "lead", "silver", "nickel", "uranium", "constantan", "electrum", "steel", "iron", "gold"].forEach(metal => {
        event.renameItem(`immersiveengineering:dust_${metal}`, `${toTitleCase(metal)} Dust`);
    });

    event.renameItem("immersiveengineering:dust_aluminum", 'Aluminium Dust');

    event.renameItem("tinore:raw_tin", 'Raw Cassiterite');
    event.renameItem("tinore:block_of_raw_tin", 'Block of Raw Cassiterite');
    event.renameItem("tinore:tin_ore", 'Stone Cassiterite');
    event.renameItem("tinore:deepslate_tin_ore", 'Deepslate Cassiterite');

    event.renameItem("create:raw_zinc", 'Raw Smithsonite');
    event.renameItem("create:block_of_raw_zinc", 'Block of Raw Smithsonite');
    event.renameItem("create:zinc_ore", 'Stone Smithsonite');
    event.renameItem("create:deepslate_zinc_ore", 'Deepslate Smithsonite');

    event.renameItem("create_new_age:basic_motor", "LV Motor")
    event.renameItem("create_new_age:advanced_motor", "MV Motor")
    event.renameItem("create_new_age:reinforced_motor", "HV Motor")
})