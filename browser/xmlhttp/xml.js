//XMLHttpRequest

//属性
/*
XMLHttpRequest.onreadystatechange
当 readyState 属性发生变化时调用的 EventHandler。
XMLHttpRequest.readyState 只读
返回 一个无符号短整型（unsigned short）数字，代表请求的状态码。
XMLHttpRequest.response 只读
返回一个 ArrayBuffer、Blob、Document，或 DOMString，具体是哪种类型取决于 XMLHttpRequest.responseType 的值。其中包含整个响应体（response body）。
XMLHttpRequest.responseText 只读
返回一个 DOMString，该 DOMString 包含对请求的响应，如果请求未成功或尚未发送，则返回 null。
XMLHttpRequest.responseType
一个用于定义响应类型的枚举值（enumerated value）。
XMLHttpRequest.responseURL 只读
返回响应的序列化（serialized）URL，如果该 URL 为空，则返回空字符串。
XMLHttpRequest.responseXML 只读
返回一个 Document，其中包含该请求的响应，如果请求未成功、尚未发送或时不能被解析为 XML 或 HTML，则返回 null。
XMLHttpRequest.status 只读
返回一个无符号短整型（unsigned short）数字，代表请求的响应状态。
XMLHttpRequest.statusText 只读
返回一个 DOMString，其中包含 HTTP 服务器返回的响应状态。与 XMLHTTPRequest.status 不同的是，它包含完整的响应状态文本（例如，"200 OK"）。

XMLHttpRequest.timeout
一个无符号长整型（unsigned long）数字，表示该请求的最大请求时间（毫秒），若超出该时间，则请求会自动结束。

XMLHttpRequestEventTarget.ontimeout
当请求超时调用的 EventHandler。

XMLHttpRequest.upload 只读
XMLHttpRequestUpload，代表上传过程。

XMLHttpRequest.withCredentials
一个布尔值，用来指定跨域 Access-Control 请求是否应带有授权信息，如 cookie 或授权 header 头。
*/

/*
0	UNSENT	代理被创建，但尚未调用 open() 方法。
1	OPENED	open() 方法已经被调用。
2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
3	LOADING	下载中； responseText 属性已经包含部分数据。
4	DONE	下载操作已完成。
*/

/*
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState 为 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState 为 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState 为 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState 为 4
};

xhr.send(null);
*/
function xhttp(url,method,options) {
    if(options == undefined || method == 'GET' || method == 'HEAD'){
      options = null;
    }
    var XHR = new XMLHttpRequest();
    XHR.open('GET', url, true);
    XHR.timeout = 2000;

    //发送合适的请求头信息
    XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //方法
    /*
    XMLHttpRequest.abort()
    如果请求已被发送，则立刻中止请求。
    XMLHttpRequest.getAllResponseHeaders()
    以字符串的形式返回所有用 CRLF 分隔的响应头，如果没有收到响应，则返回 null。
    XMLHttpRequest.getResponseHeader()
    返回包含指定响应头的字符串，如果响应尚未收到或响应中不存在该报头，则返回 null。
    XMLHttpRequest.open()
    初始化一个请求。该方法只能在 JavaScript 代码中使用，若要在 native code 中初始化请求，请使用 openRequest()。
    XMLHttpRequest.overrideMimeType()
    重写由服务器返回的 MIME 类型。
    XMLHttpRequest.send()
    发送请求。如果请求是异步的（默认），那么该方法将在请求发送后立即返回。
    XMLHttpRequest.setRequestHeader()
    设置 HTTP 请求头的值。您必须在 open() 之后、send() 之前调用 setRequestHeader() 方法。
    */
    //事件
    XHR.onload = function () {
      // XMLHttpRequest请求成功完成时触发。
    };

    XHR.ontimeout = function (e) {
      // XMLHttpRequest 超时。在此做某事。
    };

    XHR.onerror = function (e) {
      // 当request遭遇错误时触发。
    };

    XHR.onabort = function (e) {
      //当 request 被停止时触发，例如当程序调用 XMLHttpRequest.abort() 时。
    };

    XHR.onloadend = function(e) {
      //当请求结束时触发, 无论请求成功 ( load) 还是失败 (abort 或 error)。
    }
    XHR.onloadstart = function(e) {
      //接收到响应数据时触发。
    }

    XHR.onprogress = function(e) {
      //接收数据开始周期触发。
    }

    /*
    XMLHttpRequest.send();
    XMLHttpRequest.send(ArrayBuffer data);
    XMLHttpRequest.send(ArrayBufferView data);
    XMLHttpRequest.send(Blob data);
    XMLHttpRequest.send(Document data);
    XMLHttpRequest.send(DOMString? data);
    XMLHttpRequest.send(FormData data);

    // xhr.send('string');
    // xhr.send(new Blob());
    // xhr.send(new Int8Array());
    // xhr.send({ form: 'data' });
    // xhr.send(document);
    */
    XHR.send(options);

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4) {
            if (XHR.status == 200) {
                try {
                    var response = XHR.responseText;
                } catch (e) {
                    throw new Error(e);
                }
            } else {
                reject(new Error(XHR.statusText));
            }
        }
    }

}

/*
//progress

var progressBar = document.getElementById("p"),
    client = new XMLHttpRequest()
client.open("GET", "magical-unicorns")
client.onprogress = function(pe) {
  if(pe.lengthComputable) {
    progressBar.max = pe.total
    progressBar.value = pe.loaded
  }
}
client.onloadend = function(pe) {
  progressBar.value = pe.loaded
}
client.send()
*/
