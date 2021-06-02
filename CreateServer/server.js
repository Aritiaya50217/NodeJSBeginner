var http = require('http');
// การสร้าง server
http.createServer(function(req,res){
    // status 200 OK
    // แสดงคำว่า Hello World 
    // โดยเป็นประเภทข้อความ จึงใช้ "Content-Type":"text/plain" 
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World");

    // port 
}).listen(8000,'127.0.0.1');
