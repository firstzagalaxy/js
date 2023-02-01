const prompt = require('prompt-sync')()
var year = parseInt(prompt('Enter year (CE) >>'))
if ((year  % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
    console.log (year + ' is a leap year')
} else {
    console.log (year + ' is not a leap year')
}
console.log(year  % 400 )