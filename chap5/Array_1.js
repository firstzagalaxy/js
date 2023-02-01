var arr = [1, 2, 3, 4, 5]
for (i in arr) {
    console.log(arr[i])
}

let a = 3 in arr 
console.log(a)
let b = 5 in arr 
console.log(b)

if (3 in arr) {
    arr[3] += 1
}
console.log(arr[3])
console.log(arr[4])

let emptyArr = new Array(3)
emptyArr[0] = 1
let len = emptyArr.length
console.log(`ความยาวของ Array คือ ${len}`)
let f = 0 in emptyArr
console.log(f)
let g = 1 in emptyArr
console.log(g)