const DEBUG = false;

const log = (msg) => {
    if (DEBUG) tell(msg);
}

BlockEvents.rightClicked(event => {
    let { block, item, player, level } = event;
    let { x, y, z } = block;
    if (
        // If item is not a knife
        !event.item.hasTag("forge:tools/knives")
        // or block isn't a valid log
        || ![
            "minecraft:acacia_log",
            "minecraft:jungle_log",
            "alexscaves:pewen_log",
        ].includes(block.id)
        // immediately return 
    ) return;

    // if log isn't vertical, return
    if (block.properties.axis !== "y") return;

    let logType = `${block.id}`.path.split("_")[0];
    let mod = `${block.id}`.namespace;

    let dirtFound = false;
    // search downward 16 blocks
    for (let i = y; i > y - 16; i--) {
        let testBlock = level.getBlock(x, i, z)

        // if dirt is found, break with success
        if (testBlock.hasTag("minecraft:dirt")) {
            log(`dirt found at y${i}`)
            dirtFound = true;
            break;
        }
        // if any block different from the initial log is found, return
        else if (testBlock.id !== block.id) {
            log(`invalid block ${testBlock.id} found at y${i}`)
            return;
        }
    }
    // if no dirt is found, immediately return
    if (!dirtFound) {
        log("no dirt found. tree too tall?")
        return;
    }


    let leafLayout = [
        [1, -1, 0],
        [0, -1, 1],
        [-1, -1, 0],
        [0, -1, -1],
    ]

    // search upward 16 blocks
    for (let i = y; i < y + 16; i++) {
        let testBlock = level.getBlock(x, i, z)

        // if leaves are found, perform extra checks
        if (testBlock.hasTag("minecraft:leaves")) {
            log(`leaves found at y${i}, checking:`)
            let leavesOK = true;
            // iterate over each set leaf layout pattern
            leafLayout.forEach(l => {
                let testLeaf = level.getBlock(x + l[0], i + l[1], z + l[2])
                // if block at position isn't the specific type of leaves, return
                if (testLeaf.id !== `${mod}:${logType}_leaves`) {
                    log(`invalid block ${testLeaf.id} found at ${x + l[0]},${i + l[1]},${z + l[2]}`)
                    leavesOK = false;
                    return;
                }
            })
            // if leaves don't match pattern, return
            if (!leavesOK) return;
            break;
        }
        // if any block different from the initial log is found, return
        else if (testBlock.id !== block.id) {
            log(`invalid block ${testBlock.id} found at y${i}`)
            return;
        }
    }

    log("tree ok!")
    level.getBlock(x, y, z).set(`kubejs:tapped_${logType}_log`)
})