
function sumRange(begin, end){
    var sum = 0
    for (i = begin; i <= end; i++){
        sum += i
    }
    console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)
}

sumRange(1,10)
sumRange(3,30)
sumRange(4,40)