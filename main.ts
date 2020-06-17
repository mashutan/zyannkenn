let rerecenumber = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.pause(100)
    if (receivedNumber == 0 && rerecenumber == 0 || receivedNumber == 1 && rerecenumber == 1 || receivedNumber == 2 && rerecenumber == 2) {
        basic.showIcon(IconNames.Triangle)
    }
    if (receivedNumber == 0 && rerecenumber == 1 || receivedNumber == 1 && rerecenumber == 2 || receivedNumber == 2 && rerecenumber == 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedNumber == 0 && rerecenumber == 2 || receivedNumber == 1 && rerecenumber == 0 || receivedNumber == 2 && rerecenumber == 1) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(5000)
    radio.sendNumber(0)
    rerecenumber = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    basic.pause(5000)
    radio.sendNumber(2)
    rerecenumber = 2
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Scissors)
    basic.pause(5000)
    radio.sendNumber(1)
    rerecenumber = 1
})
basic.forever(function () {
    radio.setGroup(167)
})
