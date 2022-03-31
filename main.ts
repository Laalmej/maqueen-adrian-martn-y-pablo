music.playMelody("C5 B C5 G A B C5 G ", 120)
basic.showString("HOLA!")
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    } else if (false) {
    	
    }
})
