basic.forever(function () {
    music.playMelody("- - - - - - - - ", 120)
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
