ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:novice_spell_book' })
    event.recipes.shaped('ars_nouveau:novice_spell_book', [
        'AXB',
        'XYX',
        'CXD'
    ], {
        A: 'minecraft:iron_pickaxe',
        B: 'minecraft:iron_axe',
        C: 'minecraft:iron_shovel',
        D: 'minecraft:iron_sword',
        X: 'ars_nouveau:source_gem',
        Y: 'minecraft:book'
    })

    event.remove({ output:'ars_nouveau:ritual_flight' })
    event.recipes.ars_nouveau.enchanting_apparatus([
        'ars_nouveau:glyph_extend_time', 'ars_nouveau:glyph_extend_time', 'ars_nouveau:glyph_extend_time', 'ars_nouveau:air_essence', 'ars_nouveau:air_essence', 'ars_nouveau:wilden_tribute'],
        'ars_nouveau:belt_of_levitation',
        'ars_nouveau:ritual_flight',
        20000
    )
// Source Filigree
    event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:source_gem_block", // input item
        "kubejs:source_filigree", // output
        1000, // source cost
        [
            "embers:silver_ingot",
            "minecraft:gold_ingot",
            "embers:silver_ingot",
            "minecraft:gold_ingot"
        ])
        .id('kubejs:source_filigree')

// Tier 1 Glyph Frame
    event.recipes.ars_nouveau.enchanting_apparatus([
        'ars_nouveau:source_gem', 'minecraft:gold_ingot', 'ars_nouveau:source_gem', 'minecraft:gold_ingot'],
        'ars_nouveau:blank_parchment',
        'kubejs:lesser_glyph_frame',
        500
    )

// Tier 2 Glyph Frame
    event.recipes.ars_nouveau.enchanting_apparatus([
        'embers:silver_ingot', 'minecraft:blaze_rod', 'kubejs:source_filigree', 'embers:silver_ingot', 'minecraft:blaze_rod', 'kubejs:source_filigree'],
        'kubejs:lesser_glyph_frame',
        'kubejs:greater_glyph_frame',
        2000
    )

// Tier 3 Glyph Frame
    event.recipes.ars_nouveau.enchanting_apparatus([
        'minecraft:dragon_breath', 'kubejs:source_filigree', 'minecraft:shulker_shell', 'kubejs:source_filigree', 'minecraft:dragon_breath', 'kubejs:source_filigree', 'minecraft:shulker_shell', 'kubejs:source_filigree'],
        'kubejs:greater_glyph_frame',
        'kubejs:master_glyph_frame',
        5000
    )

    /* // GlyphName
event.remove({ output: 'ars_nouveau:glyph_NAME' })
event.recipes.ars_nouveau.glyph(
    'ars_nouveau:glyph_NAME', // output item (glyph)
    ['ars_nouveau:blank_glyph', ''],
    30 // exp cost (not level)
)      */

    /* EXP VALUES:
    1: 7
    2: 16
    3: 27
    4: 40
    5: 55
    6: 72
    7: 91
    8: 112
    9: 135
    10: 160
    11: 187
    12: 216
    13: 247
    14: 280
    15: 315
    16: 352
    17: 394
    18: 441
    19: 493
    20: 550
    21: 612
    22: 679
    23: 751
    24: 828
    25: 910
    26: 997
    27: 1089
    28: 1186
    29: 1288
    30: 1395
    31: 1507
    32: 1628
    33: 1758
    34: 1897
    35: 2045
    36: 2202
    37: 2368
    38: 2543
    39: 2727
    40: 2920
    41: 3122
    42: 3333
    43: 3553
    44: 3782
    45: 4020
    46: 4267
    47: 4523
    48: 4788
    49: 5062
    50: 5345
    */
    function T1glyph(glyph_output, input, exp) {
        event.remove({ output: glyph_output })
        event.recipes.ars_nouveau.glyph(
            glyph_output, // output item (glyph)
            ['kubejs:lesser_glyph_frame'].concat(input),
            exp // exp cost (not level)
        ).id(glyph_output)
    }

    function T2glyph(glyph_output, input, exp) {
        event.remove({ output: glyph_output })
        event.recipes.ars_nouveau.glyph(
            glyph_output, // output item (glyph)
            ['kubejs:greater_glyph_frame'].concat(input),
            exp // exp cost (not level)
        ).id(glyph_output)
    }

    function T3glyph(glyph_output, input, exp) {
        event.remove({ output: glyph_output })
        event.recipes.ars_nouveau.glyph(
            glyph_output, // output item (glyph)
            ['kubejs:master_glyph_frame'].concat(input),
            exp // exp cost (not level)
        ).id(glyph_output)
    }

    // glyph('OUTPUT', ['INPUT1', 'INPUT2' '...'], EXP)
    T1glyph('ars_nouveau:wololo', ['ars_nouveau:abjuration_essence', 'forge:dyes', 'forge:dyes', 'forge:dyes'], 27)
    T1glyph('ars_nouveau:glyph_rotate', ['ars_nouveau:manipulation_essence'], 27)
    T1glyph('ars_nouveau:reset', ['minecraft:target'], 27)
    T1glyph('ars_nouveau:glyph_randomize', ['minecraft:pink_carpet', 'minecraft:pink_carpet'], 27)
    T1glyph('ars_nouveau:glyph_underfoot', ['minecraft:iron_boots', '#minecraft:wooden_pressure_plates'], 27)
    T1glyph('ars_nouveau:glyph_rune', ['ars_nouveau:manipulation_essence', 'ars_nouveau:runic_chalk', 'minecraft:tripwire_hook'], 27)
    T1glyph('ars_nouveau:glyph_place_block', ['ars_nouveau:manipulation_essence', 'minecraft:dispenser'], 27)
    T1glyph('ars_nouveau:glyph_redstone_signal', ['ars_nouveau:manipulation_essence', '#forge:storage_blocks/redstone', '#forge:storage_blocks/redstone', '#forge:storage_blocks/redstone'], 27)
    T1glyph('ars_nouveau:glyph_summon_steed', ['minecraft:leather', 'minecraft:leather', 'minecraft:leather', 'minecraft:leather'], 27)
    T1glyph('ars_nouveau:glyph_light', ['minecraft:lantern', 'minecraft:torch'], 27)
    T1glyph('ars_nouveau:glyph_cut', ['ars_nouveau:manipulation_essence', 'minecraft:shears', 'minecraft:iron_sword'], 27)
    T1glyph('ars_nouveau:glyph_harm', ['ars_nouveau:earth_essence', 'minecraft:iron_sword', 'minecraft:iron_sword', 'minecraft:iron_sword'], 27)
    T1glyph('ars_nouveau:glyph_evaporate', ['ars_nouveau:manipulation_essence', 'minecraft:sponge', 'minecraft:sponge', 'minecraft:sponge'], 27)
    T1glyph('ars_nouveau:glyph_toss', ['ars_nouveau:manipulation_essence', 'minecraft:dropper'], 27)
    T1glyph('ars_nouveau:glyph_delay', ['ars_nouveau:manipulation_essence', 'minecraft:repeater', 'minecraft:clock'], 27)
    T1glyph('ars_nouveau:glyph_snare', ['ars_nouveau:earth_essence', 'minecraft:cobweb', 'minecraft:cobweb', 'minecraft:cobweb', 'minecraft:cobweb'], 27)
    T1glyph('ars_nouveau:glyph_summon_wolves', ['ars_nouveau:conjuration_essence', 'minecraft:bone', 'minecraft:bone', 'minecraft:bone', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_wing'], 27)
    T1glyph('ars_nouveau:glyph_projectile', ['minecraft:fletching_table', 'minecraft:arrow'], 27)
    T1glyph('ars_nouveau:glyph_dispel', ['ars_nouveau:abjuration_essence', 'minecraft:milk_bucket', 'minecraft:milk_bucket', 'minecraft:milk_bucket'], 27)
    T1glyph('ars_nouveau:glyph_ignite', ['minecraft:flint_and_steel', 'minecraft:coal', 'minecraft:coal', 'minecraft:coal'], 27)
    T1glyph('ars_nouveau:glyph_launch', ['ars_nouveau:air_essence', 'minecraft:rabbit_hide', 'minecraft:rabbit_hide', 'minecraft:rabbit_hide'], 27)
    T1glyph('ars_nouveau:glyph_harvest', ['ars_nouveau:earth_essence', 'minecraft:iron_hoe'], 27)
    T1glyph('ars_nouveau:glyph_craft', ['minecraft:crafting_table'], 27)
    T1glyph('ars_nouveau:glyph_bounce', ['ars_nouveau:abjuration_essence', '#forge:slimeballs', '#forge:slimeballs', '#forge:slimeballs'], 27)
    T1glyph('ars_nouveau:glyph_gust', ['ars_nouveau:air_essence', 'minecraft:piston', 'minecraft:piston', 'minecraft:piston'], 27)
    T1glyph('ars_nouveau:glyph_pickup', ['minecraft:hopper', 'minecraft:hopper'], 27)
    T1glyph('ars_nouveau:glyph_self', ['#minecraft:wooden_pressure_plates', 'minecraft:iron_chestplate'], 27)
    T1glyph('ars_nouveau:glyph_freeze', ['ars_nouveau:water_essence', 'minecraft:snow_block', 'minecraft:snow_block'], 27)
    T1glyph('ars_nouveau:glyph_amplify', ['minecraft:diamond_pickaxe'], 27)
    T1glyph('ars_nouveau:glyph_leap', ['ars_nouveau:air_essence', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_wing'], 27)
    T1glyph('ars_nouveau:glyph_interact', ['ars_nouveau:manipulation_essence', 'minecraft:lever', '#minecraft:wooden_pressure_plates', '#minecraft:buttons'], 27)
    T1glyph('ars_nouveau:glyph_phantom_block', ['#forge:glass', '#forge:glass', '#forge:glass', '#forge:glass', '#forge:glass', '#forge:glass', '#forge:glass', '#forge:glass'], 27)
    T1glyph('ars_nouveau:glyph_touch', ['#minecraft:buttons'], 27)
    T1glyph('ars_nouveau:glyph_pull', ['minecraft:fishing_rod'], 27)
    T1glyph('ars_nouveau:glyph_fell', ['ars_nouveau:earth_essence', 'minecraft:diamond_axe'], 55)
    T1glyph('ars_nouveau:glyph_break', ['minecraft:iron_pickaxe'], 27)
    T1glyph('ars_nouveau:glyph_sensitive', ['minecraft:scaffolding', 'minecraft:poppy', 'minecraft:water_bucket'], 27)
    T1glyph('ars_elemental:glyph_not_insect_filter', ['ars_nouveau:deny_scroll', 'minecraft:spider_eye'], 27)
    T1glyph('ars_elemental:glyph_undead_filter', ['ars_nouveau:allow_scroll', 'minecraft:rotten_flesh'], 27)
    T1glyph('ars_elemental:glyph_aerial_filter', ['ars_nouveau:allow_scroll', 'minecraft:phantom_membrane'], 27)
    T1glyph('ars_elemental:glyph_conjure_terrain', ['ars_nouveau:earth_essence', 'minecraft:dirt'], 27)
    T1glyph('ars_elemental:glyph_not_summon_filter', ['ars_nouveau:deny_scroll', 'minecraft:bone'], 27)
    T1glyph('ars_elemental:glyph_not_fiery_filter', ['ars_nouveau:deny_scroll', 'minecraft:blaze_powder'], 27)
    T1glyph('ars_elemental:glyph_fiery_filter', ['ars_nouveau:allow_scroll', 'minecraft:blaze_powder'], 27)
    T1glyph('ars_elemental:glyph_summon_filter', ['ars_nouveau:allow_scroll', 'minecraft:bone'], 27)
    T1glyph('ars_elemental:glyph_spark', ['ars_nouveau:air_essence', '#minecraft:wool', 'minecraft:iron_bars'], 27)
    T1glyph('ars_elemental:glyph_not_aerial_filter', ['ars_nouveau:deny_scroll', 'minecraft:phantom_membrane'], 27)
    T1glyph('ars_elemental:glyph_not_undead_filter', ['ars_nouveau:deny_scroll', 'minecraft:rotten_flesh'], 27)
    T1glyph('ars_elemental:glyph_insect_filter', ['ars_nouveau:allow_scroll', 'minecraft:spider_eye'], 27)
    T1glyph('ars_elemental:glyph_aquatic_filter', ['ars_nouveau:allow_scroll', '#minecraft:fishes'], 27)


    T2glyph('ars_nouveau:glyph_infuse', ['ars_nouveau:abjuration_essence', 'minecraft:blaze_rod', 'minecraft:glass_bottle'], 55)
    T2glyph('ars_nouveau:glyph_wind_shear', ['ars_nouveau:air_essence', 'minecraft:iron_sword', 'minecraft:iron_sword', 'minecraft:iron_sword'], 55)
    T2glyph('ars_nouveau:glyph_flare', ['ars_nouveau:fire_essence', 'minecraft:flint_and_steel', 'minecraft:flint_and_steel', 'minecraft:fire_charge', 'minecraft:fire_charge', 'minecraft:blaze_rod'], 55)
    T2glyph('ars_nouveau:glyph_decelerate', ['minecraft:soul_sand', 'minecraft:cobweb', 'minecraft:clock'], 55)
    T2glyph('ars_nouveau:glyph_fortune', ['minecraft:rabbit_foot'], 55)
    T2glyph('ars_nouveau:glyph_pierce', ['minecraft:arrow', 'ars_nouveau:wilden_spike'], 55)
    T2glyph('ars_nouveau:glyph_name', ['ars_nouveau:manipulation_essence', 'minecraft:name_tag'], 55)
    T2glyph('ars_nouveau:glyph_invisibility', ['ars_nouveau:abjuration_essence', 'minecraft:fermented_spider_eye', '#forge:rods/blaze'], 55)
    T2glyph('ars_nouveau:glyph_ender_inventory', ['ars_nouveau:manipulation_essence', 'minecraft:ender_chest'], 55)
    T2glyph('ars_nouveau:glyph_duration_down', ['minecraft:clock', 'minecraft:glowstone_dust'], 55)
    T2glyph('ars_nouveau:glyph_extend_time', ['minecraft:clock', '#forge:storage_blocks/redstone'], 55)
    T2glyph('ars_nouveau:glyph_dampen', ['minecraft:nether_brick'], 55)
    T2glyph('ars_nouveau:glyph_extract', ['minecraft:emerald'], 55)
    T2glyph('ars_nouveau:glyph_aoe', ['minecraft:firework_star'], 55)
    T2glyph('ars_nouveau:glyph_smelt', ['ars_nouveau:fire_essence', 'minecraft:blast_furnace', 'minecraft:blast_furnace', 'minecraft:blast_furnace', 'minecraft:blast_furnace', '#forge:rods/blaze'], 55)
    T2glyph('ars_nouveau:glyph_cold_snap', ['ars_nouveau:water_essence', 'minecraft:powder_snow_bucket', 'minecraft:ice'], 55)
    T2glyph('ars_nouveau:glyph_sense_magic', ['ars_nouveau:abjuration_essence', 'ars_nouveau:dowsing_rod', 'ars_nouveau:starbuncle_shards'], 55)
    T2glyph('ars_nouveau:glyph_heal', ['ars_nouveau:abjuration_essence', 'minecraft:glistering_melon_slice', 'minecraft:glistering_melon_slice', 'minecraft:glistering_melon_slice', 'minecraft:glistering_melon_slice', 'minecraft:golden_apple'], 55)
    T2glyph('ars_nouveau:glyph_conjure_water', ['ars_nouveau:water_essence', 'minecraft:water_bucket'], 55)
    T2glyph('ars_nouveau:glyph_grow', ['ars_nouveau:earth_essence', 'minecraft:bone_block', 'minecraft:bone_block', 'minecraft:bone_block', 'minecraft:bone_block', 'minecraft:bone_block', '#forge:seeds', '#forge:seeds', '#forge:seeds'], 55)
    T2glyph('ars_nouveau:glyph_firework', ['ars_nouveau:fire_essence', 'minecraft:firework_rocket', 'minecraft:firework_rocket', 'minecraft:firework_star'], 55)
    T2glyph('ars_nouveau:glyph_accelerate', ['minecraft:powered_rail', 'minecraft:sugar', 'minecraft:clock'], 55)
    T2glyph('ars_nouveau:glyph_exchange', ['ars_nouveau:manipulation_essence', 'minecraft:emerald_block', '#forge:ender_pearls', '#forge:ender_pearls'], 55)
    T2glyph('ars_nouveau:glyph_crush', ['ars_nouveau:earth_essence', 'minecraft:grindstone', 'minecraft:piston'], 55)
    T2glyph('ars_nouveau:glyph_slowfall', ['ars_nouveau:air_essence', 'ars_nouveau:wilden_wing', 'minecraft:feather', 'minecraft:feather', 'minecraft:feather', '#forge:rods/blaze', '#forge:crops/nether_wart'], 55)
    T2glyph('ars_elemental:glyph_bubble_shield', ['minecraft:heart_of_the_sea', 'minecraft:prismarine_shard', 'ars_nouveau:bastion_pod', 'ars_nouveau:water_essence'], 55)
    T2glyph('ars_elemental:glyph_discharge', ['minecraft:lightning_rod', 'ars_elemental:flashpine_pod', 'ars_nouveau:air_essence'], 55)
    T2glyph('ars_elemental:glyph_watery_grave', ['minecraft:kelp', 'minecraft:prismarine_shard', 'ars_nouveau:water_essence'], 55)
    T2glyph('ars_elemental:glyph_spike', ['minecraft:pointed_dripstone', 'minecraft:netherite_ingot', 'ars_nouveau:earth_essence'], 55)
    T2glyph('ars_elemental:glyph_arc_projectile', ['minecraft:arrow', 'minecraft:snowball', 'minecraft:slime_ball', 'minecraft:ender_pearl'], 55)
    T2glyph('ars_elemental:glyph_phantom_grasp', ['minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'ars_elemental:anima_essence'], 55)
    T2glyph('ars_elemental:glyph_charm', ['ars_elemental:anima_essence', 'minecraft:golden_carrot', 'ars_nouveau:source_berry_pie', 'minecraft:cake'], 55)
    T2glyph('ars_elemental:glyph_propagator_arc', ['ars_nouveau:manipulation_essence', 'ars_elemental:glyph_arc_projectile'], 55)
    T2glyph('ars_elemental:glyph_poison_spores', ['minecraft:spore_blossom', 'minecraft:red_mushroom', 'ars_nouveau:earth_essence'], 55)
    T2glyph('starbunclemania:glyph_pickup_fluid', ['starbunclemania:fluid_jar', 'minecraft:hopper'], 55)
    T2glyph('starbunclemania:glyph_place_fluid', ['ars_nouveau:water_essence', 'minecraft:dispenser'], 55)
    T2glyph('ars_elemental:glyph_envenom', ['minecraft:poisonous_potato', 'minecraft:fermented_spider_eye', 'minecraft:suspicious_stew'], 55)

    T3glyph('ars_nouveau:glyph_wall', ['minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:dragon_breath', 'minecraft:diamond_block', 'ars_nouveau:manipulation_essence'], 160)
    T3glyph('ars_nouveau:rewind', ['minecraft:clock', 'minecraft:clock', 'minecraft:clock', 'ars_nouveau:manipulation_essence'], 160)
    T3glyph('ars_nouveau:burst', ['minecraft:tnt', 'minecraft:tnt', 'minecraft:tnt', 'minecraft:tnt', 'minecraft:tnt', 'minecraft:firework_star', 'ars_nouveau:manipulation_essence'], 160)
    T3glyph('ars_nouveau:glyph_hex', ['ars_nouveau:abjuration_essence', 'minecraft:fermented_spider_eye', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:wither_rose'], 160)
    T3glyph('ars_nouveau:glyph_summon_decoy', ['ars_nouveau:conjuration_essence', 'minecraft:armor_stand', 'minecraft:armor_stand', 'minecraft:armor_stand', 'minecraft:armor_stand'], 160)
    T3glyph('ars_nouveau:glyph_split', ['ars_nouveau:relay_splitter', 'ars_nouveau:wilden_spike', 'minecraft:stonecutter'], 160)
    T3glyph('ars_nouveau:glyph_lightning', ['ars_nouveau:air_essence', 'minecraft:lightning_rod', 'minecraft:lightning_rod', 'minecraft:lightning_rod', 'minecraft:heart_of_the_sea'], 160)
    T3glyph('ars_nouveau:glyph_blink', ['ars_nouveau:manipulation_essence', '#forge:ender_pearls', '#forge:ender_pearls', '#forge:ender_pearls', '#forge:ender_pearls'], 160)
    T3glyph('ars_nouveau:glyph_wither', ['ars_nouveau:abjuration_essence', 'minecraft:wither_skeleton_skull', 'minecraft:wither_skeleton_skull', 'minecraft:wither_skeleton_skull'], 160)
    T3glyph('ars_nouveau:glyph_fangs', ['ars_nouveau:conjuration_essence', 'minecraft:prismarine_shard', 'minecraft:prismarine_shard', 'minecraft:totem_of_undying'], 160)
    T3glyph('ars_nouveau:glyph_intangible', ['ars_nouveau:manipulation_essence', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', '#forge:ender_pearls', '#forge:ender_pearls'], 160)
    T3glyph('ars_nouveau:glyph_linger', ['ars_nouveau:manipulation_essence', 'minecraft:dragon_breath', '#forge:storage_blocks/diamond', '#forge:rods/blaze', '#forge:rods/blaze'], 160)
    T3glyph('ars_nouveau:glyph_summon_vex', ['ars_nouveau:conjuration_essence', 'minecraft:totem_of_undying'], 160)
    T3glyph('ars_nouveau:glyph_orbit', ['minecraft:compass', 'minecraft:ender_eye', '#forge:rods/blaze'], 160)
    T3glyph('ars_nouveau:glyph_glide', ['ars_nouveau:air_essence', 'minecraft:elytra', '#forge:gems/diamond', '#forge:gems/diamond', '#forge:gems/diamond'], 160)
    T3glyph('ars_nouveau:glyph_summon_undead', ['ars_nouveau:conjuration_essence', 'minecraft:bone', 'minecraft:wither_skeleton_skull'], 160)
    T3glyph('ars_elemental:glyph_propagator_homing', ['ars_nouveau:manipulation_essence', 'ars_elemental:glyph_homing_projectile'], 160)
    T3glyph('ars_elemental:glyph_homing_projectile', ['minecraft:nether_star', 'ars_nouveau:manipulation_essence', 'ars_nouveau:dowsing_rod', 'minecraft:ender_eye'], 160)
    T3glyph('ars_elemental:glyph_life_link', ['minecraft:lead', 'ars_elemental:anima_essence', 'minecraft:sculk_sensor'], 160)
    T3glyph('ars_additions:glyph_recall', ['ars_nouveau:conjuration_essence', 'minecraft:ender_pearl', 'ars_nouveau:scryer_scroll', 'ars_nouveau:enchanters_eye'], 160)
    T3glyph('ars_additions:glyph_retaliate', ['minecraft:netherite_sword', 'ars_nouveau:wilden_spike'], 160)
    T3glyph('ars_additions:glyph_mark', ['ars_nouveau:manipulation_essence', 'minecraft:ender_pearl', 'ars_nouveau:mob_jar', 'ars_nouveau:ritual_containment'], 160)
})