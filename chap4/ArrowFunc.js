function calculate(a, b, func){
    return func(a,  b)
}

var add = (x, y) => x + y
var a = calculate(10, 20, add)
var subtract = (x, y) => x - y
var b = calculate(30, 5, subtract)
console.log(a)
console.log(b)

var c = calculate(10, 2, (x, y) => x * y)
console.log(c)
var d = calculate(51, 10, (x, y) => x % y)
console.log(d)