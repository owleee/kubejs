ItemEvents.rightClicked(event => {
    let { item, player, server, level } = event;


    // if the item is not a spyglass, return
    if (item.id !== "minecraft:spyglass") return;

    if (player.hasEffect("minecraft:blindness") || player.hasEffect("minecraft:darkness")) return;

    // if it's not nighttime, return
    let time = server.overworld().dayTime()
    if (time <= 13000 || time >= 23000) return;

    // if it's raining or thundering, return
    if (level.isRaining() || level.isThundering()) return;

    // if the player isn';t looking up, return
    if (player.getViewVector(1).y() < 0.5) return;

    // if there is anything in the way, return
    let { x, y, z } = player;
    for (let i = y; i < 320; i++) {
        let block = level.getBlock(x, i, z - 1);
        if (block.id !== "minecraft:air" && block.hasTag("forge:glass")) return;
    }

    // if the player already has the effect, return with a little message :3
    if (player.hasEffect("kubejs:cosmic_wonder")) {
        player.statusMessage = Text.darkAqua("Beautiful, isn't it?");
        return;
    }

    if (player.hasEffect("kubejs:cosmic_determination")) {
        player.statusMessage = Text.aqua("As you gaze upon the stars, your thoughts drift toward industry and automation.");
        Client.player.playSound("create:deny", 1, 1);
        return;
    }

    player.statusMessage = Text.blue("You are filled with wonder as you gaze upon the stars.");
    player.potionEffects.add("kubejs:cosmic_wonder", 8 * 20 * 60, 0, false, false)
})