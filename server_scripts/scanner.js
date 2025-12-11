const $DensityFunction$SinglePointContext = Java.loadClass("net.minecraft.world.level.levelgen.DensityFunction$SinglePointContext")

ItemEvents.firstRightClicked(event => {
    const { item, block, player, hand } = event
    if (hand == "OFF_HAND") return;

    if (item.id === "kubejs:biomometer") {
        const serverLevel = event.server.getOverworld()

        const V = serverLevel
            .getChunkSource()
            .randomState()
            .router()
            .vegetation()
            .compute(new $DensityFunction$SinglePointContext(player.x, player.y, player.z))

        const T = serverLevel
            .getChunkSource()
            .randomState()
            .router()
            .temperature()
            .compute(new $DensityFunction$SinglePointContext(player.x, player.y, player.z))

        player.statusMessage = `T: ${T.toFixed(3)} V: ${V.toFixed(3)}`;

    } else if (item.id === "kubejs:scanner") {
        let ore = item.nbt.display.Name.split("\"")[3]
        tell(ore)
        if (["copper", "gold", "lead", "platinum", "silver"].includes(ore)) {
            player.runCommand(`locate metal ${ore} 16`)
        }
        return;
        event.server.runCommandSilent(`execute as ${player} at ${player} run `)
    }
})