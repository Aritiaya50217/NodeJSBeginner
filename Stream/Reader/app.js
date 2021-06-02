var fs = require('fs');
var data = '';
// อ่านไฟล์ code.txt
var readStream = fs.createReadStream('code.txt');
// การดักจับ event
readStream.setEncoding('utf-8');
// อ่านแล้วจัดเก็บใน data
readStream.on('data',function(txt){
    data += txt; 
});
// เมื่ออ่านเสร็จ
readStream.on('end',function(){
    // แสดงข้อมูลที่อยู่ในไฟล์ code.txt
    console.log(data);
});
// กรณีเกิดข้อผิดพลาดในการอ่านข้อมูล
readStream.on('error',function(err){
    // show error
    console.log(err.stack);
});