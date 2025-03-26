ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:copper_folk_coin', 4),
        [
            'kubejs:folk_coin'
        ])

    event.shapeless(
        Item.of('kubejs:copper_folk_coin', 9),
        [
            'kubejs:iron_folk_coin'
        ])

    event.shapeless(
        Item.of('kubejs:iron_folk_coin'),
        [
            'kubejs:copper_folk_coin',
            'kubejs:copper_folk_coin',
            'kubejs:copper_folk_coin',
            'kubejs:copper_folk_coin',
            'kubejs:copper_folk_coin',
            'kubejs:copper_folk_coin',
            'kubejs:copper_folk_coin',
            'kubejs:copper_folk_coin',
            'kubejs:copper_folk_coin'
        ])

    event.shapeless(
        Item.of('kubejs:iron_folk_coin', 9),
        [
            'kubejs:gold_folk_coin'
        ])

    event.shapeless(
        Item.of('kubejs:gold_folk_coin'),
        [
            'kubejs:iron_folk_coin',
            'kubejs:iron_folk_coin',
            'kubejs:iron_folk_coin',
            'kubejs:iron_folk_coin',
            'kubejs:iron_folk_coin',
            'kubejs:iron_folk_coin',
            'kubejs:iron_folk_coin',
            'kubejs:iron_folk_coin',
            'kubejs:iron_folk_coin'
        ])
})