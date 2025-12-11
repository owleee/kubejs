ItemEvents.rightClicked(event => {
    let { item, player } = event;
    if (item.id !== "kubejs:research_paper") return;
    if (player.getXp() >= 160 || player.isCreative()) {

        event.player.sendData("totemAnimation", { item: event.item.id });
        Client.player.playSound("minecraft:entity.villager.work_cartographer", 1, 1);

        if (!player.isCreative()) {
            player.setXp(player.getXp() - 160)
            item.count--;
            if (player.hasEffect("kubejs:cosmic_wonder")) {
                player.removeEffect("kubejs:cosmic_wonder");
                player.potionEffects.add("kubejs:cosmic_determination", 8 * 20 * 60, 0, false, false)
                player.give(Item.of('immersiveengineering:blueprint', {
                    blueprint: "Space"
                }))
                return;
            }
            event.player.give("kubejs:completed_research_paper")
        }
    } else {
        Client.player.playSound("create:deny", 1, 1);
        player.statusMessage = "You aren't feeling very inspired right now";
    }
})