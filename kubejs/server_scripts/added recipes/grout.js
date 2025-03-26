ServerEvents.recipes(event => {
    event.recipes.create.mixing(['kubejs:sandy_gravel'], ['minecraft:sand', 'minecraft:gravel'])
    event.recipes.create.filling('kubejs:wet_clay', [Fluid.water(), 'minecraft:clay_ball'])
    event.recipes.create.mixing(['tconstruct:grout'], ['kubejs:sandy_gravel', 'kubejs:wet_clay'])

    event.remove({ output: 'tconstruct:seared_brick', type: 'tconstruct:casting' })
})