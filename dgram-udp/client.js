//启动格式：node 文件名 host port
var host = process.argv[2];
var port = parseInt(process.argv[3],10);

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

process.stdin.resume();

//通过stdin接受用户输入数据
process.stdin.on('data', function(data){
    client.send(data, 0, data.length, port, host);
})

var message=new Buffer('hello UDP, from placekitten.com');
client.send(message, 0, message.length, port, host, function (err, bytes) {
    //数据发送监听器
    if(err) {throw err;}
});

//监听message事件，接收数据
client.on('message', function(msg){
    console.log('receive from UDP serve:', msg.toString());
    // client.close();
})

// node client.js localhost 3333
