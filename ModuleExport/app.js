// เรียกใช้งาน module จาก method.js
var response = require('./method.js');
// response เรียกใช้งาน update
console.log(response.update());
// response เรียกใช้งาน pi
// pi ไม่ใช่ function ไม่ต้องใส่ ()
console.log(response.pi);

console.log(response.data);

response.data.deleteUser();