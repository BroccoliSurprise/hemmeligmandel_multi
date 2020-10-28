input.onButtonPressed(Button.A, function () {
    mandelNummer += -1
    if (mandelNummer < 1) {
        mandelNummer = 1
    }
    led.stopAnimation()
    basic.showNumber(mandelNummer)
})
input.onButtonPressed(Button.AB, function () {
    led.setBrightness(255)
    radio.sendNumber(mandelNummer - 1)
    basic.showNumber(mandelNummer)
    led.setBrightness(5)
})
input.onButtonPressed(Button.B, function () {
    mandelNummer += 1
    if (mandelNummer > 7) {
        mandelNummer = 7
    }
    led.stopAnimation()
    basic.showNumber(mandelNummer)
})
let mandelNummer = 0
// Endre det som er inni her
for (let index = 0; index < 1; index++) {
    mandelNummer = 1
}
radio.setGroup(42)
radio.setTransmitPower(2)
led.setBrightness(5)
basic.showNumber(mandelNummer)
basic.forever(function () {
    led.setBrightness(255)
    radio.sendNumber(mandelNummer - 1)
    basic.showNumber(mandelNummer)
    led.setBrightness(5)
    basic.pause(10000)
})
