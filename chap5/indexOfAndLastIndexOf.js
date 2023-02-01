var a = ['red', 'green', 'blue', 'green']
var i = a.indexOf('green')
var j = a.lastIndexOf('green')
var k = a.indexOf('red')
if (a.indexOf('blue') >= 0){
    console.log('i:', i)
    console.log('j:', j)
    console.log('k:', k)
    console.log('BB:', (a.indexOf('blue')))
}