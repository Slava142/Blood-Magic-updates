
// Backpack
ServerEvents.recipes(event => {
    let inter = 'kubejs:incomplete_backpack' // Intermediate item
    event.recipes.create.sequenced_assembly([
        Item.of('sophisticatedbackpacks:backpack').withChance(90.0), // Expected output
        Item.of('minecraft:leather').withChance(2.0), // Chance scrap
        Item.of('minecraft:oak_planks').withChance(8.0), // Chance scrap
        ],
        'minecraft:chest', // Input here
        [
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:leather']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:string']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:iron_ingot']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:tripwire_hook'])
        ]).transitionalItem(inter).loops(5) // Set the transitional item and the number of loops
})

// Backpack upgrade template
ServerEvents.recipes(event => {
    let inter = 'kubejs:incomplete_backpack' // Intermediate item
    event.recipes.create.sequenced_assembly([
        Item.of('sophisticatedbackpacks:upgrade_base').withChance(90.0), // Expected output
        Item.of('minecraft:leather').withChance(2.0), // Chance scrap
        Item.of('minecraft:oak_planks').withChance(8.0), // Chance scrap
    ],
        'minecraft:chest', // Input here
        [
            event.recipes.createCutting(inter, inter),
            event.recipes.createDeploying(inter, [inter, 'minecraft:leather']),
            event.recipes.createDeploying(inter, [inter, 'minecraft:string']),
            event.recipes.createDeploying(inter, [inter, 'minecraft:iron_ingot']),
            event.recipes.createDeploying(inter, [inter, 'minecraft:tripwire_hook']),
            event.recipes.createPressing(inter, inter)
        ]).transitionalItem(inter).loops(5) // Set the transitional item and the number of loops
})

// Copper Backpack, Liquid Backpack & Copper Backpack Slurry
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_backpack'), 'sophisticatedbackpacks:backpack').heated();
    event.recipes.create.mixing(Fluid.of('kubejs:copper_backpack_slurry'), [Fluid.of('kubejs:liquid_backpack'), 'minecraft:copper_ingot']).heated();

    let inter = 'kubejs:incomplete_backpack' // Intermediate item
    event.recipes.create.sequenced_assembly([
        Item.of('sophisticatedbackpacks:copper_backpack').withChance(90.0), // Expected output
        Item.of('minecraft:copper_ingot').withChance(2.0), // Chance scrap
        Item.of('sophisticatedbackpacks:backpack').withChance(8.0), // Chance scrap
    ],
        'sophisticatedbackpacks:backpack', // Input here
        [
            event.recipes.createCutting(inter, inter),
            event.recipes.createFilling(inter, [Fluid.of('kubejs:copper_backpack_slurry'), inter]),
            event.recipes.createDeploying(inter, [inter, 'minecraft:string']),
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(1) // Set the transitional item and the number of loops
})

// Iron Backpack & Iron Backpack Slurry
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:iron_backpack_slurry'), [Fluid.of('kubejs:liquid_backpack'), 'minecraft:iron_ingot']).heated();

    let inter = 'kubejs:incomplete_backpack' // Intermediate item
    event.recipes.create.sequenced_assembly([
        Item.of('sophisticatedbackpacks:iron_backpack').withChance(90.0), // Expected output
        Item.of('minecraft:iron_ingot').withChance(2.0), // Chance scrap
        Item.of('sophisticatedbackpacks:copper_backpack').withChance(8.0), // Chance scrap
    ],
        'sophisticatedbackpacks:copper_backpack', // Input here
        [
            event.recipes.createCutting(inter, inter),
            event.recipes.createFilling(inter, [Fluid.of('kubejs:iron_backpack_slurry'), inter]),
            event.recipes.createDeploying(inter, [inter, 'sophisticatedbackpacks:upgrade_base']),
            event.recipes.createDeploying(inter, [inter, 'minecraft:string']),
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(1) // Set the transitional item and the number of loops
})

// Gold Backpack & Gold Backpack Slurry
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:gold_backpack_slurry'), [Fluid.of('kubejs:liquid_backpack'), 'minecraft:gold_ingot']).heated();

    let inter = 'kubejs:incomplete_backpack' // Intermediate item
    event.recipes.create.sequenced_assembly([
        Item.of('sophisticatedbackpacks:gold_backpack').withChance(80.0), // Expected output
        Item.of('minecraft:gold_ingot').withChance(4.0), // Chance scrap
        Item.of('sophisticatedbackpacks:iron_backpack').withChance(16.0), // Chance scrap
    ],
        'sophisticatedbackpacks:iron_backpack', // Input here
        [
            event.recipes.createCutting(inter, inter),
            event.recipes.createFilling(inter, [Fluid.of('kubejs:gold_backpack_slurry'), inter]),
            event.recipes.createDeploying(inter, [inter, 'sophisticatedbackpacks:upgrade_base']),
            event.recipes.createDeploying(inter, [inter, 'ars_nouveau:magebloom_fiber']),
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(1) // Set the transitional item and the number of loops
})

// Diamond Backpack & Diamond Backpack Slurry
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:diamond_backpack_slurry'), [Fluid.of('kubejs:liquid_backpack'), 'minecraft:diamond']).superheated();

    let inter = 'kubejs:incomplete_backpack' // Intermediate item
    event.recipes.create.sequenced_assembly([
        Item.of('sophisticatedbackpacks:diamond_backpack').withChance(70.0), // Expected output
        Item.of('minecraft:diamond').withChance(6.0), // Chance scrap
        Item.of('sophisticatedbackpacks:gold_backpack').withChance(24.0), // Chance scrap
    ],
        'sophisticatedbackpacks:gold_backpack', // Input here
        [
            event.recipes.createCutting(inter, inter),
            event.recipes.createFilling(inter, [Fluid.of('kubejs:diamond_backpack_slurry'), inter]),
            event.recipes.createDeploying(inter, [inter, 'sophisticatedbackpacks:upgrade_base']),
            event.recipes.createDeploying(inter, [inter, 'sophisticatedbackpacks:upgrade_base']),
            event.recipes.createDeploying(inter, [inter, 'ars_nouveau:blank_thread']),
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(1) // Set the transitional item and the number of loops
})

// Netherite Backpack & Netherite Backpack Slurry
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:netherite_backpack_slurry'), [Fluid.of('kubejs:liquid_backpack'), 'minecraft:netherite_ingot']).superheated();

    let inter = 'kubejs:incomplete_backpack' // Intermediate item
    event.recipes.create.sequenced_assembly([
        Item.of('sophisticatedbackpacks:netherite_backpack').withChance(60.0), // Expected output
        Item.of('minecraft:netherite_ingot').withChance(8.0), // Chance scrap
        Item.of('sophisticatedbackpacks:diamond_backpack').withChance(32.0), // Chance scrap
    ],
        'sophisticatedbackpacks:diamond_backpack', // Input here
        [
            event.recipes.createCutting(inter, inter),
            event.recipes.createFilling(inter, [Fluid.of('kubejs:netherite_backpack_slurry'), inter]),
            event.recipes.createDeploying(inter, [inter, 'sophisticatedbackpacks:upgrade_base']),
            event.recipes.createDeploying(inter, [inter, 'sophisticatedbackpacks:upgrade_base']),
            event.recipes.createDeploying(inter, [inter, 'ars_nouveau:thread_magic_capacity']),
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(1) // Set the transitional item and the number of loops
})