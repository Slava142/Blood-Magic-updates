ServerEvents.recipes(event => {
    // Source Tonic
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:abjuration_essence', 'ars_nouveau:glyph_sense_magic',
            'ars_nouveau:manipulation_essence', 'ars_nouveau:wilden_tribute',
            'ars_elemental:anima_essence', 'ars_nouveau:glyph_sense_magic',
            'ars_nouveau:conjuration_essence', 'ars_nouveau:wilden_tribute'], // input items
        'minecraft:nether_star', // reagent
        'kubejs:source_tonic', // output
        100000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    ).id('kubejs:source_tonic')

    // Earth Tonic
    event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:earth_essence", // input item
        "kubejs:earth_tonic", // output
        2000, // source cost
        ["minecraft:raw_iron",
        "minecraft:coal",
        "minecraft:cobblestone"]
    ).id('earth_tonic')

    // Water Tonic
    event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:water_essence", // input item
        "kubejs:water_tonic", // output
        2000, // source cost
        ["minecraft:water_bucket",
            "minecraft:kelp",
            "minecraft:pufferfish"]
    ).id('water_tonic')

    // Air Tonic
    event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:air_essence", // input item
        "kubejs:air_tonic", // output
        2000, // source cost
        ["minecraft:feather",
            "minecraft:arrow",
            "minecraft:powder_snow_bucket"]
    ).id('air_tonic')

    // Fire Tonic
    event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:fire_essence", // input item
        "kubejs:fire_tonic", // output
        2000, // source cost
        ["minecraft:obsidian",
            "minecraft:flint_and_steel",
            "minecraft:lava_bucket"]
    ).id('fire_tonic')
})
