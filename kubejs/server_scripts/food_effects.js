ItemEvents.foodEaten('kubejs:blood_vial', event => {
    const player = event.player;
    if (player.stages.has('vampire')) {
        player.heal(3);
    } else {
        player.tell('The blood catches in your throat, making you retch');

        // Run the effects from the server context
        event.server.runCommandSilent(`effect give ${player.username} minecraft:nausea 15 2 true`);
        event.server.runCommandSilent(`effect give ${player.username} minecraft:hunger 10 1 true`);
        event.server.runCommandSilent(`effect give ${player.username} minecraft:poison 10 3 true`);
    }
});

ItemEvents.foodEaten('kubejs:earth_tonic', event => {
    const player = event.player;
    event.server.runCommandSilent(`power grant ${player.username} folktale:strengths/genasi/earth`)
    player.stages.remove('earthrecipeunlocked')
});

ItemEvents.foodEaten('kubejs:water_tonic', event => {
    const player = event.player;
    event.server.runCommandSilent(`power grant ${player.username} folktale:strengths/genasi/water`)
    player.stages.remove('waterrecipeunlocked')
});

ItemEvents.foodEaten('kubejs:air_tonic', event => {
    const player = event.player;
    event.server.runCommandSilent(`power grant ${player.username} folktale:strengths/genasi/air`)
    player.stages.remove('airrecipeunlocked')
});

ItemEvents.foodEaten('kubejs:fire_tonic', event => {
    const player = event.player;
    event.server.runCommandSilent(`power grant ${player.username} folktale:strengths/genasi/fire`)
    player.stages.remove('firerecipeunlocked')
});

ItemEvents.foodEaten('kubejs:source_tonic', event => {
    if (!event.getEntity().player) return;

    const player = event.player;
    if (!player.stages.has('awakened')) {
        player.stages.add('awakened')
        player.tell("You feel strange energies circulating within your body. You have changed on a fundamental level.")
    }
    else
        player.tell("Nothing happened...")
}) 

