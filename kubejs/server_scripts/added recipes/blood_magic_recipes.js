ServerEvents.tags('item', event => {
    event.add('bloodmagic:orb', 'bloodmagic:weakbloodorb')
    event.add('bloodmagic:orb', 'bloodmagic:apprenticebloodorb')
    event.add('bloodmagic:orb', 'bloodmagic:magicianbloodorb')
    event.add('bloodmagic:orb', 'bloodmagic:masterbloodorb')
    event.add('bloodmagic:orb', 'bloodmagic:archmagebloodorb')

    event.add('bloodmagic:strongorb', 'bloodmagic:apprenticebloodorb')
    event.add('bloodmagic:strongorb', 'bloodmagic:magicianbloodorb')
    event.add('bloodmagic:strongorb', 'bloodmagic:masterbloodorb')
    event.add('bloodmagic:strongorb', 'bloodmagic:archmagebloodorb')
})

ServerEvents.recipes(event => {
    event.remove({ output: 'bloodmagic:apprenticebloodorb' })
    event.remove({ output: 'bloodmagic:magicianbloodorb' })
    event.recipes.bloodmagic.altar('bloodmagic:apprenticebloodorb', 'minecraft:clock').upgradeLevel(1).altarSyphon(5000)
    event.recipes.bloodmagic.altar('bloodmagic:magicianbloodorb', 'create:precision_mechanism').upgradeLevel(2).altarSyphon(25000)

    event.remove({ output: 'bloodmagic:lavacrystal' })
    event.remove({ output: 'bloodmagic:selfsacrificerune' })
    event.shaped(
        Item.of('bloodmagic:lavacrystal'),
        [
            'ABA',
            'BCB',
            'DED'
        ],
        {
            A: 'create:rose_quartz_block',
            B: 'minecraft:lava_bucket',
            C: '#bloodmagic:orb',
            D: 'minecraft:obsidian',
            E: 'minecraft:diamond'
        }
    )
    event.shaped(
        Item.of('bloodmagic:selfsacrificerune'),
        [
            'ABA',
            'CEC',
            'ADA'
        ],
        {
            A: 'minecraft:stone',
            B: 'bloodmagic:infusedslate',
            C: 'tconstruct:necrotic_bone',
            D: '#bloodmagic:strongorb',
            E: 'bloodmagic:blankrune'
        }
    )
})