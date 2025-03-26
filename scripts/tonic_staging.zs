import mods.recipemachinestage.RecipeMachineStage;
import mods.itemstages.ItemStages;

RecipeMachineStage.addRecipe(<recipeType:ars_nouveau:imbuement>, "minecraft:earth_tonic", "earthrecipeunlocked");
RecipeMachineStage.addRecipe(<recipeType:ars_nouveau:imbuement>, "minecraft:water_tonic", "waterrecipeunlocked");
RecipeMachineStage.addRecipe(<recipeType:ars_nouveau:imbuement>, "minecraft:air_tonic", "airrecipeunlocked");
RecipeMachineStage.addRecipe(<recipeType:ars_nouveau:imbuement>, "minecraft:fire_tonic", "firerecipeunlocked");
RecipeMachineStage.addRecipe(<recipeType:ars_nouveau:enchanting_apparatus>, "kubejs:source_tonic", "genasi");

ItemStages.restrict(<item:kubejs:earth_tonic>, "earthunlocked");
ItemStages.restrict(<item:kubejs:water_tonic>, "waterunlocked");
ItemStages.restrict(<item:kubejs:air_tonic>, "airunlocked");
ItemStages.restrict(<item:kubejs:fire_tonic>, "fireunlocked");
ItemStages.restrict(<item:kubejs:source_tonic>, "genasi").preventInventory(false).preventUsing(false).preventPickup(false);