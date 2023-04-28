basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(30000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(5000)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
