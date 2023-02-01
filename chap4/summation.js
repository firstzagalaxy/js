function summation(...nums){
    var sum = 0
    for (i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    return sum 
}

var s = [1, 2, 3, 4, 5]
console.log(summation(...s))