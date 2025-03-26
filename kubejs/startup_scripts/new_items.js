StartupEvents.registry('item', event => {

    // Custom Items
    event.create('incomplete_backpack').texture('kubejs:item/backpack_assembly').unstackable() // Backpack assembly intermediate item
    event.create('blank_template').texture('kubejs:item/blank_template')
    event.create('cogwheel_mould').texture('kubejs:item/template_cogwheel')
    event.create('large_cogwheel_mould').texture('kubejs:item/template_large_cogwheel')
    event.create('lead_sheet').texture('kubejs:item/lead_plate')
    event.create('silver_sheet').texture('kubejs:item/silver_plate')
    event.create('bounty_paper').texture('kubejs:item/bounty')

    // Glyph Frames
    event.create('source_filigree').texture('kubejs:item/source_filigree')
    event.create('lesser_glyph_frame').texture('kubejs:item/lesser_glyph_frame')
    event.create('greater_glyph_frame').texture('kubejs:item/greater_glyph_frame')
    event.create('master_glyph_frame').texture('kubejs:item/master_glyph_frame')

    // Coins
    event.create('folk_coin').texture('kubejs:item/folk_coin').maxStackSize(64).glow(true).displayName('Ancient Coin')
    event.create('copper_folk_coin').texture('kubejs:item/copper_folk_coin').maxStackSize(64).glow(true)
    event.create('iron_folk_coin').texture('kubejs:item/iron_folk_coin').maxStackSize(64).glow(true)
    event.create('gold_folk_coin').texture('kubejs:item/gold_folk_coin').maxStackSize(64).glow(true)

    // Custom Drinks
    event.create('blood_vial').texture('kubejs:item/blood_vial').maxStackSize(4).food(food => {
        food
            .hunger(6)
            .saturation(1)
            .eaten(ctx => {
                ctx.player.give("minecraft:glass_bottle")
            })
    }).useAnimation("drink");
    event.create('source_tonic').texture('kubejs:item/source_tonic').maxStackSize(1).food(food => {
        food
            .hunger(0)
            .saturation(0)
            .alwaysEdible()
            .eaten(ctx => {
                ctx.player.give("minecraft:glass_bottle")
            })
    }).useAnimation("drink");
    event.create('wet_clay').texture('kubejs:item/wet_clay').maxStackSize(64)

    // Custom Modeled Items
    event.create('parasol')
        .modelJson('kubejs:item/parasol')
})

// Custom Fluids
StartupEvents.registry('fluid', event => {
    event.create('liquid_backpack')
        .thickTexture(0xA74624)
        .bucketColor(0xA74624)  
        .displayName('Liquid Backpack')

    event.create('copper_backpack_slurry')
        .thickTexture(0xEDA17B)
        .bucketColor(0xEDA17B)
        .displayName('Copper Backpack Slurry')

    event.create('iron_backpack_slurry')
        .thickTexture(0xf5dcbf)
        .bucketColor(0xf5dcbf)
        .displayName('Iron Backpack Slurry')

    event.create('gold_backpack_slurry')
        .thickTexture(0xbdae5c)
        .bucketColor(0xbdae5c)
        .displayName('Gold Backpack Slurry')

    event.create('diamond_backpack_slurry')
        .thickTexture(0x43a8a7)
        .bucketColor(0x43a8a7)
        .displayName('Diamond Backpack Slurry')

    event.create('netherite_backpack_slurry')
        .thickTexture(0x403333)
        .bucketColor(0x403333)
        .displayName('Netherite Backpack Slurry')
})