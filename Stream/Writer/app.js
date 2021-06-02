var fs = require('fs');
var data = 'Hello';
// เขียนข้อความลงใน output.txt ที่สร้างขึ้นใหม่
var writerStream = fs.createWriteStream('output.txt');
// เข้ารหัส utf-8
writerStream.write(data,'utf-8');
writerStream.end();
// เมื่อเขียนเสร็จให้แสดงคำว่า Output
writerStream.on('finish',function(){
    console.log("Output Finished");
});
