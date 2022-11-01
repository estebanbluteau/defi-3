basic.forever(function () {
    basic.clearScreen()
    servos.P0.setAngle(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    10,
    170
    ))
})
