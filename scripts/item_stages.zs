import mods.itemstages.ItemStages;

ItemStages.restrict(<item:ars_nouveau:novice_spell_book>, "awakened");
ItemStages.restrict(<item:ars_nouveau:apprentice_spell_book>, "awakened");
ItemStages.restrict(<item:ars_nouveau:archmage_spell_book>, "awakened");

ItemStages.restrict(<item:bloodmagic:daggerofsacrifice>, "vampire");
ItemStages.restrict(<item:bloodmagic:livinghelmet>, "vampire");
ItemStages.restrict(<item:bloodmagic:livingplate>, "vampire");
ItemStages.restrict(<item:bloodmagic:livingleggings>, "vampire");
ItemStages.restrict(<item:bloodmagic:livingboots>, "vampire");

ItemStages.restrict(<item:ars_elemental:fire_hat>, "genasi");
ItemStages.restrict(<item:ars_elemental:fire_robes>, "genasi");
ItemStages.restrict(<item:ars_elemental:fire_leggings>, "genasi");
ItemStages.restrict(<item:ars_elemental:fire_boots>, "genasi");

ItemStages.restrict(<item:ars_elemental:aqua_hat>, "genasi");
ItemStages.restrict(<item:ars_elemental:aqua_robes>, "genasi");
ItemStages.restrict(<item:ars_elemental:aqua_leggings>, "genasi");
ItemStages.restrict(<item:ars_elemental:aqua_boots>, "genasi");

ItemStages.restrict(<item:ars_elemental:earth_hat>, "genasi");
ItemStages.restrict(<item:ars_elemental:earth_robes>, "genasi");
ItemStages.restrict(<item:ars_elemental:earth_leggings>, "genasi");
ItemStages.restrict(<item:ars_elemental:earth_boots>, "genasi");

ItemStages.restrict(<item:ars_elemental:air_hat>, "genasi");
ItemStages.restrict(<item:ars_elemental:air_robes>, "genasi");
ItemStages.restrict(<item:ars_elemental:air_leggings>, "genasi");
ItemStages.restrict(<item:ars_elemental:air_boots>, "genasi");

ItemStages.restrict(<item:ars_elemental:fire_focus>, "genasi");
ItemStages.restrict(<item:ars_elemental:water_focus>, "genasi");
ItemStages.restrict(<item:ars_elemental:air_focus>, "genasi");
ItemStages.restrict(<item:ars_elemental:earth_focus>, "genasi");

ItemStages.restrict(<item:ars_nouveau:enchanters_mirror>, "restricted");
ItemStages.restrict(<item:ars_nouveau:caster_tome>, "restricted");
ItemStages.restrict(<item:ars_elemental:fire_caster_tome>, "restricted");
ItemStages.restrict(<item:ars_elemental:air_caster_tome>, "restricted");
ItemStages.restrict(<item:ars_elemental:water_caster_tome>, "restricted");
ItemStages.restrict(<item:ars_elemental:earth_caster_tome>, "restricted");
ItemStages.restrict(<item:ars_elemental:anima_caster_tome>, "restricted");
ItemStages.restrict(<item:ars_elemental:manipulation_caster_tome>, "restricted");

ItemStages.restrict(<item:ars_elemental:necrotic_focus>, ["vampire", "awakened"]);

ItemStages.restrict(<tag:items:human_specific>, ["human"]);
ItemStages.restrict(<item:create:cart_assembler>, ["human"]);
ItemStages.restrict(<item:create:extendo_grip>, ["human"]);
ItemStages.restrict(<item:create:potato_cannon>, ["human"]);
