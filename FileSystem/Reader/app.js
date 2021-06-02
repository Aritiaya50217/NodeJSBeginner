var fs = require('fs');
// ระบุไฟล์ที่ต้องการอ่าน
// utf-8 ต้องใส่เพื่อให้แสดงเป็นอักษรออกมา
var readMe = fs.readFileSync('code.txt','utf-8');
console.log(readMe);