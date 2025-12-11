const oof = (player) => {
    if (player.isCreative()) return
    let damageSource = player.damageSources().cactus()
    player.attack(damageSource, 1)

    const messages = {
        "Ouch!": 10,
        "That's sharp!": 10,
        "YEEOWCH!": 5,
        "oof ouch owie my bones": 1
    };

    const entries = Object.entries(messages);
    const totalWeight = entries.reduce((sum, [_, weight]) => sum + weight, 0);

    let random = Math.random() * totalWeight;

    for (const [text, weight] of entries) {
        if (random < weight) {
            player.statusMessage = Text.red(text);
            return;
        }
        random -= weight;
    }
}

BlockEvents.rightClicked(event => {
    if (
        event.block.hasTag(KJ("knapping_surface"))
        &&
        event.item.id === MC("flint")
    ) {
        if (Math.random() < 0.75) {
            if (!event.entity.isCreative()) event.item.count--
            event.player.give(KJ("knapped_flint"))
            Client.player.playSound("minecraft:block.grindstone.use", 1, 1);
        } else {
            if (Math.random() > 0.50 && !event.entity.isCreative()) event.item.count--
            oof(event.player)
            Client.player.playSound("minecraft:entity.item.break", 1, 1);
        }

    }
})

ItemEvents.firstRightClicked(event => {
    if (event.hand === "OFF_HAND") return // triggers twice otherwise
    if (event.player.mainHandItem.id === MC("flint") && event.player.offHandItem.id === MC("flint")) {
        if (Math.random() < 0.75) {
            if (!event.entity.isCreative()) event.item.count--
            event.player.give(KJ("knapped_flint"))
            Client.player.playSound("minecraft:block.grindstone.use", 1, 1);
        } else {
            if (Math.random() > 0.50 && !event.entity.isCreative()) event.item.count--
            oof(event.player)
            Client.player.playSound("minecraft:entity.item.break", 1, 1);
        }
    }
})

BlockEvents.broken(event => {

    if (!(event.player.mainHandItem.id === "kubejs:knapped_flint" && event.entity.type === "minecraft:player")) return
    oof(event.player)
})