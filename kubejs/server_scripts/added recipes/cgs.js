ServerEvents.recipes(event => {
    // This is just cause it was annoying to fix with craftweaker. For other CGS recipe removals look in scripts.
    event.remove({ output: 'cgs:press_form_7mm' })

    // CGS Revolver
    event.remove({ output: 'cgs:barrel' })
    event.remove({ output: 'cgs:barrel_sturdy' })
    event.remove({ output: 'cgs:revolver' });
    event.shaped('cgs:barrel', [
        'A A',
        'A A',
        'A A'
    ], {
        A: '#forge:plates/silver'
    })
    event.shaped('cgs:barrel_sturdy', [
        'A A',
        'B B',
        'C C'
    ], {
        A: '#forge:plates/silver',
        B: '#forge:plates/lead',
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