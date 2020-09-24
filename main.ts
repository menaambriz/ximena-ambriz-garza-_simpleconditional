let celcius = 0
basic.forever(function () {
    basic.showNumber(celcius)
    celcius = input.temperature()
    if (celcius == 10) {
        basic.showString("Ski Time!")
    } else if (celcius == 20) {
        basic.showString("Picnic time!")
    } else if (celcius == 30) {
        basic.showString("Beach time!")
    } else if (celcius == 40) {
        basic.showString("It is better to stay at home")
    }
})
