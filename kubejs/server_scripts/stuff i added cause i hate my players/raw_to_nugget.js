ServerEvents.recipes(event => {
    const ingots = [
        'minecraft:iron_ingot',
        'minecraft:gold_ingot',
        'minecraft:copper_ingot',
        'tconstruct:cobalt_ingot',
        'create:zinc_ingot',
        'embers:silver_ingot',
        'embers:lead_ingot'
    ];

    ingots.forEach(ingot => {
        event.remove({ type: 'minecraft:smelting', output: ingot });
        event.remove({ type: 'minecraft:blasting', output: ingot });
    });

    event.smelting('3x minecraft:iron_nugget', 'minecraft:raw_iron').xp(3)
    event.blasting('3x minecraft:iron_nugget', 'minecraft:raw_iron').xp(3)
    event.smelting('3x minecraft:gold_nugget', 'minecraft:raw_gold').xp(3)
    event.blasting('3x minecraft:gold_nugget', 'minecraft:raw_gold').xp(3)
    event.smelting('3x create:copper_nugget', 'minecraft:raw_copper').xp(3)
    event.blasting('3x create:copper_nugget', 'minecraft:raw_copper').xp(3)
    event.smelting('3x tconstruct:cobalt_nugget', 'tconstruct:raw_cobalt').xp(3)
    event.blasting('3x tconstruct:cobalt_nugget', 'tconstruct:raw_cobalt').xp(3)
    event.smelting('3x create:zinc_nugget', 'create:raw_zinc').xp(3)
    event.blasting('3x create:zinc_nugget', 'create:raw_zinc').xp(3)
    event.smelting('3x embers:lead_nugget', 'embers:raw_lead').xp(3)
    event.blasting('3x embers:lead_nugget', 'embers:raw_lead').xp(3)
    event.smelting('3x embers:silver_nugget', 'embers:raw_silver').xp(3)
    event.blasting('3x embers:silver_nugget', 'embers:raw_silver').xp(3)

    event.smelting('minecraft:iron_ingot', 'bloodmagic:ironsand').xp(3)
    event.blasting('minecraft:iron_ingot', 'bloodmagic:ironsand').xp(3)
    event.smelting('minecraft:copper_ingot', 'bloodmagic:coppersand').xp(3)
    event.blasting('minecraft:copper_ingot', 'bloodmagic:coppersand').xp(3)
    event.smelting('minecraft:gold_ingot', 'bloodmagic:goldsand').xp(3)
    event.blasting('minecraft:gold_ingot', 'bloodmagic:goldsand').xp(3)
});
