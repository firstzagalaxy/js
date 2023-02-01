const prompt = require('prompt-sync')()
var validCode = false
var code = ''
while (!validCode){
    code = prompt('กรุณาใส่รหัสผ่าน')
    if (code == '1234'){
        validCode = true
    }
}
console.log('คุณใส่รหัสผ่านถูกต้อง')