var net = require('net');

//通过UNIX socket套接字创建客户端
// var client = net.connect({path: '/tmp/echo.sock'}, function() {
//通过端口创建客户端
var client = net.connect({port: 2345}, function() {
    console.log('connected serve');
    client.write('placekitten.com!\r\n');
});

//data事件监听。收到数据后，断开连接
client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

//end事件监听，断开连接时会被触发
client.on('end', function() {
    console.log('close from serve');
});
