LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("kubejs:netherrack_silver_ore")
        .removeLoot(Ingredient.all)
        .addLoot("embers:raw_silver")
        .applyOreBonus("minecraft:fortune")

    event
        .addBlockLootModifier("kubejs:netherrack_lead_ore")
        .removeLoot(Ingredient.all)
        .addLoot("embers:raw_lead")
        .applyOreBonus("minecraft:fortune")
});
