var sayHello = function() {
    console.log('Hello World')
}

var square = function(x) {
    if (isFinite(x)){
        return x ** 2
    }
}

var repeatString = function(str, times, separator=''){
    if (!Number.isInteger(times)){
        return
    }

    for (i = 0; i < times; i++){
        console.log(str + separator)
    }
}


sayHello()
var sq = square(10)
console.log(square(-2.5))
repeatString('5', '3')