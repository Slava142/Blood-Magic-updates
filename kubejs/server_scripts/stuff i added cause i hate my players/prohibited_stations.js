BlockEvents.rightClicked('tconstruct:tinker_station', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf')) {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('tconstruct:part_builder', event =>
{
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf'))
    {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('tconstruct:tinkers_anvil', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf')) {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('tconstruct:modifier_worktable', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf')) {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('tconstruct:crafting_station', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf')) {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('tconstruct:tinkers_chest', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf')) {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('tconstruct:part_chest', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf')) {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('tconstruct:cast_chest', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf')) {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('tconstruct:scorched_anvil', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('dwarf')) {
        player.tell("Do not trifle with the dwarven gods! Your unskilled hands are unworthy to touch this station!")
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${player.x} ${player.y} ${player.z}`);
        event.cancel();
    }
})

BlockEvents.rightClicked('ars_nouveau:scribes_table', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('awakened')) {
        event.server.runCommandSilent(`effect give ${player.username} minecraft:nausea 10 1 true`);
        event.server.runCommandSilent(`effect give ${player.username} minecraft:darkness 10 1 true`);
        event.cancel();
    }
})

BlockEvents.rightClicked('ars_additions:warp_nexus', event => {
    if (!event.getEntity().player) return;
    const player = event.player;
    if (!player.stages.has('awakened')) {
        event.server.runCommandSilent(`effect give ${player.username} minecraft:nausea 10 1 true`);
        event.server.runCommandSilent(`effect give ${player.username} minecraft:darkness 10 1 true`);
        event.cancel();
    }
})

BlockEvents.rightClicked('sophisticatedbackpacks:backpack', event => event.cancel())