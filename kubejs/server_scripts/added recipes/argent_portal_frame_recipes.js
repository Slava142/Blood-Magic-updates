ServerEvents.recipes(event => {

    // TConstruct support deprecated. Created custom recipe from https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/generated/resources/data/tconstruct/recipes/smeltery/casting/seared/smeltery_controller.json
    event.custom({
        "type": "tconstruct:retextured_casting_basin",
        "cast": {
            "item": "embers:silver_block"
        },
        "cast_consumed": true,
        "cooling_time": 400,
        "fluid": {
            "amount": 1000,
            "tag": "tconstruct:molten_obsidian"
        },
        "result": "kubejs:argent_portal_frame"
    })

    // Create recipe
    event.recipes.create.mixing(Fluid.of('tconstruct:molten_obsidian'), 'minecraft:obsidian').superheated();
    event.recipes.create.filling('kubejs:argent_portal_frame', [Fluid.of('tconstruct:molten_obsidian'), 'embers:silver_block'])

    // Ars recipe
    event.recipes.ars_nouveau.crush(
        'minecraft:obsidian',
        [
            Item.of('4x create:powdered_obsidian').withChance(1.0)
        ])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['create:powdered_obsidian', 'minecraft:blaze_rod', 'create:powdered_obsidian', 'minecraft:blaze_rod',
            'create:powdered_obsidian', 'minecraft:blaze_rod', 'create:powdered_obsidian', 'minecraft:blaze_rod'], // input items
        'embers:silver_block', // reagent
        'kubejs:argent_portal_frame', // output
        2000 // source cost
    )

    event.recipes.bloodmagic.soulforge('kubejs:argent_portal_frame', ['embers:silver_block'], ['minecraft:obsidian'], ['minecraft:blaze_rod']).minimumDrain(1000).drain(200)
})