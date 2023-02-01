var str = ''
var v = 0
for (i = 1; i <= 5; i++){
    str = ''
    for (j = 1; j <= 5; j++){
        v = i * j
        str += v
        str += (v < 10)? '   ' : '  '
    }
    console.log(str)
} 
