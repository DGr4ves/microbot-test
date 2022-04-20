def on_forever():
    pins.analog_write_pin(AnalogPin.P0, 100)
    pins.analog_write_pin(AnalogPin.P1, 100)
basic.forever(on_forever)
