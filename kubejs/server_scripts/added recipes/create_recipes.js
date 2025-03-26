ServerEvents.recipes(event => {

    // Blood Vial
    event.recipes.create.filling('kubejs:blood_vial', [Fluid.of('bloodmagic:life_essence_fluid'), 'minecraft:glass_bottle'])

    // Blank template
    event.recipes.create.pressing('kubejs:blank_template', '#minecraft:planks')

    // Cog templates
    event.recipes.create.cutting('kubejs:cogwheel_mould', 'kubejs:blank_template')
    event.recipes.create.cutting('kubejs:large_cogwheel_mould', 'kubejs:blank_template')

    // Cog wheels
    event.remove({ output: 'create:cogwheel' })
    event.shapeless(
        Item.of('create:cogwheel'),
        [
            'create:shaft',
            '#minecraft:planks'
        ]).id('kubejs:cogwheel_manual_only')
    event.recipes.create.deploying('4x create:cogwheel', ['kubejs:cogwheel_mould', 'create:andesite_alloy'])

    // Large cog wheels
    event.remove({ output: 'create:large_cogwheel' })
    event.shapeless(
        Item.of('create:large_cogwheel'),
        [
            'create:shaft',
            '#minecraft:planks',
            '#minecraft:planks'
        ]).id('kubejs:large_cogwheel_manual_only')
    event.recipes.create.deploying('2x create:large_cogwheel', ['kubejs:large_cogwheel_mould', 'create:andesite_alloy'])

    // Precision Mechanisms
    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
        Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
        Item.of('create:andesite_alloy').withChance(8.0),
        Item.of('create:cogwheel').withChance(5.0),
        Item.of('create:shaft').withChance(2.0),
        Item.of('create:crushed_gold_ore').withChance(2.0),
        Item.of('2x minecraft:gold_nugget').withChance(2.0),
        'minecraft:iron_ingot',
        'minecraft:clock'
    ], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
        // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:zinc_nugget'])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(5) // set the transitional item and the number of loops

    //Asurine
    event.recipes.create.haunting('create:asurine', 'minecraft:tuff')

    //Tuff
    event.recipes.create.mixing('8x minecraft:tuff', ['4x minecraft:charcoal', 'minecraft:cobblestone']).heated();

    // Liquid backpack
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_backpack'), 'sophisticatedbackpacks:backpack').heated();

    // Extra plates
    event.recipes.create.pressing('kubejs:silver_sheet', 'embers:silver_ingot')
    event.recipes.create.pressing('kubejs:lead_sheet', 'embers:lead_ingot')

    // CGS Revolver
    event.remove({ output: 'cgs:barrel' })
    event.remove({ output: 'cgs:barrel_sturdy' })
    event.remove({ output: 'cgs:revolver' });
    event.shaped('cgs:barrel', [
        'A A',
        'A A',
        'A A'
    ], {
        A: 'kubejs:silver_sheet'
    })
    event.shaped('cgs:barrel_sturdy', [
        'A A',
        'B B',
        'C C'
    ], {
        A: 'kubejs:silver_sheet',
        B: 'kubejs:lead_sheet',
        C: 'create:sturdy_sheet'
    })
    event.recipes.create.mechanical_crafting('cgs:revolver', [
        ' DEFGH',
        'BIBCA ',
        ' A    '
    ], {
        A: '#minecraft:logs',
        B: 'create:precision_mechanism',
        C: 'create:brass_sheet',
        D: 'create:cogwheel',
        E: 'create:sturdy_sheet',
        F: 'minecraft:netherite_ingot',
        G: 'cgs:barrel_sturdy',
        H: 'cgs:barrel',
        I: 'create:electron_tube'
    })

})