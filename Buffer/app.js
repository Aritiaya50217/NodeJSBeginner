// จองพื้นที่ไป 10 หน่วย
var buf = new Buffer(10);
console.log(buf);

// จองพื้นที่แบบอาร์เรย์
var arraybuf = new Buffer([10,20,30]);
console.log(arraybuf);

// เก็บพื้นที่ให้กับข้อความ
var stringbuf = new Buffer('Hello');
console.log(stringbuf.toString());

// จองพื้นที่สำหรับ 200 หน่วย
// เก็บคำว่า Hello
var buf2 = new Buffer(200);
// ใช้ len นับจำนวนตัวอักษร ภายใน Buffer
len = buf2.write("Hello");
// output = 5
console.log(len);
console.log(buf2.toString());

// สร้างตัวแปร เก็บ Buffer 26 ตัว
// วนตามตัวอักษร a-z
var buf3 = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf3[i] = i + 97 ;
}
// ascii การเข้ารหัสแอสกี
console.log(buf3.toString('ascii'));
// การเข้ารหัสด้วย utf-8
console.log(buf3.toString('utf-8'));
