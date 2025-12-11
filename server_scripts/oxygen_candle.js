// TODO: make it fill gas tanks etc

ItemEvents.firstRightClicked(event => {
    let { item, player, server } = event;
    if (item.id !== "kubejs:oxygen_candle") return;


    if (!player.isCreative()) event.item.count--

    Client.player.playSound("ad_astra:oxygen_intake", 1, 1);
    Client.player.playSound("minecraft:item.flintandsteel.use", 1, 1);

    oxygenTick(event, 0)
})

const oxygenTick = (event, counter) => {
    if (counter >= 75) {
        Client.player.playSound("minecraft:block.fire.extinguish", 1, 1);
        return;
    }

    let { item, player, server } = event;

    // get chest armor item
    let chest = player.chestArmorItem;

    // only works if wearing an ad_astra space suit
    if (!/ad_astra:(.*space|jet)_suit/.test(chest.id)) return;

    // get current oxygen amount from nbt
    let currentAmount = 0;
    // if the chestplate has nbt data for oxygen, get it
    if ("BotariumData" in chest.getNbt()) {
        let fluid = chest.getNbt().BotariumData.StoredFluids[0]
        // only proceed if it's oxygen
        // shouldnt be possible to have anything else but just in case
        if (fluid.Fluid !== "ad_astra:oxygen") return;

        currentAmount = fluid.Amount;
    } else {
        // if no nbt data, assume 0
        currentAmount = 0;
    }

    // preserve damage value
    // TODO: is there a better way to do this?
    let damage = 0;
    if ("Damage" in chest.getNbt()) {
        damage = chest.getNbt().Damage;
    }

    // set new oxygen amount, max 1000mB
    player.chestArmorItem.setNbt({
        BotariumData: {
            StoredFluids: [{
                Fluid: "ad_astra:oxygen",
                Amount: Math.min(currentAmount + 10, 1000)
            }]
        },
        Damage: damage
    });

    if (counter % 5 === 0) {
        Client.player.playSound("minecraft:block.fire.ambient", 1, 0.9 + Math.random() * 0.2);
        server.runCommandSilent(`execute as ${event.player.username} at ${event.player.username} run particle minecraft:lava ~ ~1 ~ 0 0 0 0.5 1 force`)
    }



    // schedule next tick
    server.scheduleInTicks(2, (c) => {
        oxygenTick(event, counter + 1)
    })
}