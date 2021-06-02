var fs = require('fs');

var reader = fs.createReadStream('code.txt');
// นำข้อมูลในไฟล์ code.txt ไปเขียนใน file1.txt
var writer = fs.createWriteStream('file1.txt');

reader.pipe(writer);