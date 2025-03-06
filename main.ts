input.onButtonPressed(Button.A, function () {
    led.unplot(light2 / 5, light2 % 5)
    index += -1
    led.setBrightness(light2 % 25)
    led.plot(light2 / 5, light2 % 5)
})
input.onButtonPressed(Button.AB, function () {
    let guess = ""
    radio.sendValue(guess, light2)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(light2 / 5, light2 % 5)
    index += -1
    if (light2 < 24) {
        led.plot(light2 / 5, light2 % 5)
    }
})
radio.onReceivedValue(function (name, value) {
    if (Ready) {
        basic.clearScreen()
        Ready = true
        moves = 0
        Left = 5
        light2 = 0
        led.plot(light2 / 5, light2 % 5)
    }
    if (name) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.clearScreen()
        led.plot(light2 / 5, light2 % 5)
        Left += -1
    }
    if (Left == 0) {
        radio.sendValue("results", moves)
        basic.clearScreen()
        basic.showString("Winner")
        basic.showNumber(moves)
    }
})
let Left = 0
let moves = 0
let index = 0
let light2 = 0
let Ready = false
Ready = false
basic.showString("X")
