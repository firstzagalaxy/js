const prompt= require('prompt-sync')()
var dayOfWeek = prompt ('Enter day of week (Monday - Sunday) >> ')
switch(dayOfWeek){
    case 'Monday': case 'Tuesday': case 'Wednesday': case 'Thursday':
    case 'Friday': console.log('Workday'); break
    case 'Saturday': case 'Sunday': console.log('Weekend'); break
    default: console.log('Not the day of the week!')
} 