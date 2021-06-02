var buf1 = new Buffer("Hello ");
var buf2 = new Buffer("Totorial ");
var buf3 = new Buffer("NodeJS");
// การนำข้อความมาต่อกัน จะใช้ method concat
var buf4 = Buffer.concat([buf1,buf2,buf3]);

console.log(buf4.toString());

// ใช้ method json ในการแปลงให้เป็น JSON
var json = buf4.toJSON(buf4);
console.log(json);

