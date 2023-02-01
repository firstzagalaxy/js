const prompt = require('prompt-sync')()
var number = parseInt(Math.random() * 100)
var win = false
var count = 1
const maxGuess = 7
var guessNum
var message = ' '
var input = ' '

do{
    input  = prompt(`การทายครั้งที่: ${count} กรุณาใส่ตัวเลข >> `)
    guessNum = input
    if (guessNum > number) {
        message = 'น้อยกว่านี้'
    } else if (guessNum < number){
        message = 'มากกว่านี้'
    } else if (guessNum == number){
        message = 'ถูกต้อง'
        win = true
    } else {
        message = 'กรุณาใส่เป็นตัวเลข 0 - 100'
    }
    console.log(message + '\n' )

    if (count == maxGuess) {
        console.log('ทายเกินจำนวนครั้งที่กำหนด')
        break
    }
    count++
} while (!win)