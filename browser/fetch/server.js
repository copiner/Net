var http = require('http');
var url = require("url");
var path = require("path");
var fs = require('fs');
//var qs = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(handle_incoming_request);

function handle_incoming_request(req, res){
	//设置允许跨域的域名，*代表允许任意域名跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	//跨域允许的header类型
	res.setHeader("Access-Control-Allow-Headers","Content-type,Content-Length,Authorization,Accept,X-Requested-Width");
	//跨域允许的请求方式
	res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	//设置响应头信息
	res.setHeader("X-Powered-By",' 3.2.1');
	//让options请求快速返回
	if(req.method == "OPTIONS"){
		return res.end();
	}

	console.log("Incoming request: (" + req.method + ") " + req.url);
	req.parsed_url = url.parse(req.url, true);
	//console.log(req.parsed_url);
	var core_url = req.parsed_url.pathname;
  //console.log(core_url);
  if(core_url.substring(0, 7) == '/calvin'){
    serve_calvin(req, res);

  } else if(core_url.substring(0, 5) == '/rose'){
    console.log(req.parsed_url.query);
    res.end(JSON.stringify({ name: 'rose' }));
  } else if(core_url.substring(0, 5) == '/anna'){
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        body = JSON.parse(body);
				res.end(JSON.stringify(body));
    });
	} else {
		res.writeHead(404, {"Content-Type": "application/json"});
		res.end(JSON.stringify({error: "unknown_resource"}));
	}
}

function serve_calvin(req, res){
	var page_name = req.parsed_url.pathname.substring(0, 8);
  //console.log(page_name);
	res.writeHead(200, { "Content-Type": "text/html"} );
  res.end(fs.readFileSync('app.html'));
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
