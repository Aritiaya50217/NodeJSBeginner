// __filename คำสั่งเก็บชื่อไฟล์ที่เราทำงานอยู่
console.log(__filename);
// __dirname คำสั่งเก็บชื่อโฟลเดอร์ที่เราทำงานอยู่
console.log(__dirname);

function printHello(){
    console.log("Hello");
}
// หน่วงเวลา 2s ก่อนแสดงข้อความ Hello
setTimeout(printHello,2000);

// การ Clear Timeout
function printHello2(){
    console.log("Clear!!!");
}
setTimeout(printHello2,3000);
// clear Timeout ไม่แสดงผลลัพธ์
var t = setTimeout(printHello2,3000);
clearTimeout(t);

// Set Interval การทำงานแบบต่อเนื่อง
function printHello3() {
    console.log("Set Interval");
}
// ทำงานทุก 4s
setInterval(printHello3,4000);

