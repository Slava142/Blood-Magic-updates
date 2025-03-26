LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST).randomChance(0.3).pool((p) => {
            p.addLoot("kubejs:folk_coin")
            p.limitCount([1, 3])
        })
});