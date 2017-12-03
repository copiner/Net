var dgram=require('dgram');
var server=dgram.createSocket('udp4');

//message事件监听
server.on('message', function(message, rinfo) {
    console.log('receive:%s , from %s:%d ',message.toString('utf8'), rinfo.address, rinfo.port);
    //将收到的消息回发给客户端
    server.send(message,0,message.length,rinfo.port,rinfo.address);
});

//listening事件监听
server.on('listening',function(){
    var address=server.address();
    console.log('listening on: '+ address.address+':'+address.port)
});

//绑定3333端口
server.bind(3333);
