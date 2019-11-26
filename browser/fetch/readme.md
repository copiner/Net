### fetch


The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
It returns a Promise that resolves to the Response to that request, whether it is successful or not.
You can also optionally pass in an init options object as the second argument

Once a Response is retrieved,
there are a number of methods available to define what the body content is and how it should be handled

The fetch specification differs from jQuery.ajax() in three main ways:

1、The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

2、fetch() won't receive cross-site cookies; you can’t establish a cross site session using fetch.
Set-Cookie headers from other sites are silently ignored.

3、fetch won’t send cookies, unless you set the credentials init option


### Fetch Interfaces

`WindowOrWorkerGlobalScope.fetch()`
The fetch() method used to fetch a resource.

`Headers`
Represents response/request headers, allowing you to query them and take different actions depending on the results.

`Request`
Represents a resource request.

`Response`
Represents the response to a request.

### Fetch mixin
`Body`
Provides methods relating to the body of the response/request, allowing you to declare what its content type is and how it should be handled.

#### WindowOrWorkerGlobalScope.fetch()

```javascript
const myImage = document.querySelector('img');

let myRequest = new Request('flowers.jpg');

fetch(myRequest)
.then(function(response) {
  if (!response.ok) {
    throw new Error('HTTP error, status = ' + response.status);
  }
  return response.blob();
})
.then(function(response) {
  let objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});
```

#### Headers

`Constructor`
Headers(), Creates a new Headers object.

`Methods`

#### Request

#### Response

#### Body
