input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 10)
        pins.analogWritePin(AnalogPin.P1, 100)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 100)
        pins.analogWritePin(AnalogPin.P1, 100)
        basic.pause(500)
    }
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
})
basic.forever(function () {
	
})
