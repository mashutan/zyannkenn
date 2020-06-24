let release = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.pause(1000)
    if (receivedNumber == 0 && release == 0 || receivedNumber == 1 && release == 1 || receivedNumber == 2 && release == 2) {
        basic.showIcon(IconNames.Triangle)
    }
    if (receivedNumber == 0 && release == 1 || receivedNumber == 1 && release == 2 || receivedNumber == 2 && release == 0) {
        basic.showIcon(IconNames.No)
    }
    if (receivedNumber == 0 && release == 2 || receivedNumber == 1 && release == 0 || receivedNumber == 2 && release == 1) {
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    radio.sendNumber(0)
    release = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    release = 3
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    basic.pause(500)
    radio.sendNumber(2)
    release = 2
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Scissors)
    basic.pause(500)
    radio.sendNumber(1)
    release = 1
})
basic.forever(function () {
    radio.setGroup(167)
})
