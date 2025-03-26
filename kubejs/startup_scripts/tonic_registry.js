StartupEvents.registry('item', event => {
    // Earth Tonic
    event.create('earth_tonic').texture('kubejs:item/earth_tonic').maxStackSize(1).food(food => {
        food
            .alwaysEdible()
            .eaten(ctx => {
                ctx.player.give("minecraft:glass_bottle")
            })
    }).useAnimation("drink")
    // Water Tonic
    event.create('water_tonic').texture('kubejs:item/water_tonic').maxStackSize(1).food(food => {
        food
            .alwaysEdible()
            .eaten(ctx => {
                ctx.player.give("minecraft:glass_bottle")
            })
    }).useAnimation("drink")
    // Air Tonic
    event.create('air_tonic').texture('kubejs:item/air_tonic').maxStackSize(1).food(food => {
        food
            .alwaysEdible()
            .eaten(ctx => {
                ctx.player.give("minecraft:glass_bottle")
            })
    }).useAnimation("drink")
    // Fire Tonic
    event.create('fire_tonic').texture('kubejs:item/fire_tonic').maxStackSize(1).food(food => {
        food
            .alwaysEdible()
            .eaten(ctx => {
                ctx.player.give("minecraft:glass_bottle")
            })
    }).useAnimation("drink")

})
