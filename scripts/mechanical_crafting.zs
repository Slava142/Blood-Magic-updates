import mods.recipemachinestage.RecipeMachineStage;
import mods.itemstages.ItemStages;

RecipeMachineStage.addRecipe(<recipeType:create:mechanical_crafting>, "cgs:mechanical_crafting/gatling", "restricted");
RecipeMachineStage.addRecipe(<recipeType:create:mechanical_crafting>, "cgs:mechanical_crafting/steam_engine", "restricted");
RecipeMachineStage.addRecipe(<recipeType:create:sequenced_assembly>, "cgs:sequenced_assembly/round7mm", "restricted");

ItemStages.restrict(<item:cgs:iron_sight>, "restricted");
ItemStages.restrict(<item:cgs:round_7mm>, "restricted");
ItemStages.restrict(<item:cgs:gatling>, "restricted");
ItemStages.restrict(<item:cgs:steam_engine>, "restricted");
ItemStages.restrict(<item:cgs:press_form_7mm>, "restricted");
ItemStages.restrict(<item:cgs:shell_7mm>, "restricted");
ItemStages.restrict(<item:cgs:shell_10mm>, "restricted");