var fs = require('fs');
var readMe = fs.readFileSync('code.txt','utf-8');
// สร้างโฟลเดอร์ project
fs.mkdir("Project",function(){
    // สร้างไฟล์ Readme.txt ให้อยู่ใน โฟลเดอร์ Project
    fs.writeFileSync('./Project/Readme.txt',readMe);
});