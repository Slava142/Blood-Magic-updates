ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:ender_chest' })
    event.shaped('minecraft:ender_chest',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'minecraft:blaze_powder',
            C: 'minecraft:ender_pearl'
        })

    event.remove({ output: 'sophisticatedbackpacks:xp_pump_upgrade' })
    event.shaped('sophisticatedbackpacks:xp_pump_upgrade',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:redstone',
            B: 'minecraft:ender_chest',
            C: 'minecraft:experience_bottle',
            D: 'sophisticatedbackpacks:advanced_pump_upgrade'
        })

    event.remove({ output: 'ars_nouveau:scryers_crystal' })
    event.shapeless(
        Item.of('ars_nouveau:scryers_crystal'),
        [
            'minecraft:ender_pearl',
            'minecraft:blaze_powder',
            'ars_nouveau:source_gem'
        ])

    event.remove({ output: 'ars_nouveau:scryers_oculus'})
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:observer', 'minecraft:spyglass', 'ars_nouveau:source_gem_block', 'minecraft:diamond'], // input items
        'minecraft:ender_pearl', // reagent
        'ars_nouveau:scryers_oculus' // output
         // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
})