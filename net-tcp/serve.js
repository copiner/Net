var net = require('net');
var server = net.createServer(function(connection) {
    console.log('TCP client in...');
    connection.on('end', function() {
        console.log('client close...');
    });
    //向客户端写入数据
    connection.write('hello\r\n');
    //将客户端发来的数据原样pipe返回
    connection.pipe(connection);
});

//TCP服务器开始socket监听
// server.listen('/tmp/echo.sock', function() {
//     console.log('TCP服务启动');
// });

//TCP服务器开始端口监听
server.listen(2345, function() {
    console.log('TCP Loading...');
});

//https://itbilu.com/nodejs/core/VJBIh73q.html
//http://blog.csdn.net/langzi7758521/article/details/52922595
