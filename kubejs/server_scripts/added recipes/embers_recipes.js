ServerEvents.recipes(event => {
    event.remove({ output: 'embers:ancient_codex' })
    event.shaped('embers:ancient_codex', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'embers:lead_ingot',
        B: 'embers:archaic_brick',
        C: 'embers:ancient_motive_core'
    })
})