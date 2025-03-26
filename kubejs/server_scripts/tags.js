ServerEvents.tags('item', event => {

    // Locking Create addons behind Human
    event.add('human_specific', '@cgs')
    event.add('human_specific', '@create_enchantment_industry')
    event.add('human_specific', '@trading_floor')
    event.add('human_specific', '@create_mechanical_spawner')

    // Adding newly added plates to oredict
    event.add('forge:plates/silver', 'kubejs:silver_sheet')
    event.add('forge:plates/lead', 'kubejs:lead_sheet')
})