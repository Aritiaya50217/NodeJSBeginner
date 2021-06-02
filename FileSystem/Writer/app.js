var fs = require('fs');
var readMe = fs.readFileSync('code.txt','utf-8');
console.log(readMe);
// สร้างไฟล์ Hello.txt โดยมีข้อความมาจากไฟล์ code.txt
fs.writeFileSync('Hello.txt',readMe);