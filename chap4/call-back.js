function inc(num, func){
    num += 1
    func(num)
}

// function showValue(v){
//     console.log(v)
// }

// inc(10, showValue)

// Anonymous Func
// let showValue = function (v){ console.log(v) }
// inc(99, showValue)

// inc(99, function(v) {
//     console.log(v)
// })

//inc(99, showValue)


// Arrow Func
// inc(99, (v) => {
//     console.log(v)
// })

inc(98, v => console.log(v))


