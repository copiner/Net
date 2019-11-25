var http = require("http")
var url = require("url")

http.createServer(function(req,res){
    var path = req.url;
    var params = parseUrl(url.parse(path).query);
    var data = {name:"wrq", age:20};
    var script = params.func+"("+JSON.stringify(data)+")";

    //res.write(script);
    res.end(script);
}).listen(3000,'127.0.0.1',()=>{
   console.log(`Server running at http://127.0.0.1:3000/`);
})

//解析url
function parseUrl(url){
    var obj = {};
    var urls = url.split("&");
    for(var key in urls){
        var keyVal = urls[key].split("=");
        obj[keyVal[0]] = keyVal[1];
    }
    return obj;
}
