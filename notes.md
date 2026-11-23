<!-- Node.js Module's -> Meaning / Purpose -->
1. http -> HTTP server create karna aur requests/responses handle karna.
2. https -> Secure HTTP communication handle karna.
3. fs -> Files ko read, write, update aur delete karna.
4. path-> File aur folder paths ko handle karna.
5. os -> Operating system ki information lena.
6. events -> Custom events create aur handle karna.
7. url-> URLs ko parse aur manipulate karna.
8. crypto -> Encryption, hashing aur cryptographic operations.
9. stream -> Large data ko chunks mein process karna.
10. buffer -> Binary data handle karna.

<!-- What are the important functions of HTTP module? -->
http.createServer() -> HTTP server create karta hai.
server.listen()-> Server ko specified port par start karta hai.
server.close() -> Server stop karta hai.
http.request() -> HTTP request send karta hai.
http.get() -> GET request send karta hai.
res.setHeader() -> Response header set karta hai.
res.writeHead() -> Status code aur headers set karta hai.
res.write() -> Response mein data write karta hai.
res.end() -> Response complete karta hai.
req.on("data") -> Incoming request data receive karta hai.
req.on("end") -> Request body ka complete data receive hone par execute hota hai.

<!-- HTTP Request Methods? -->
GET -> Retrieves data from the server.
POST -> Creates new data on the server.
PUT -> Replaces or updates an entire resource.
PATCH -> Updates specific parts of a resource.
DELETE -> Deletes a resource from the server.
HEAD -> Retrieves response headers without the response body.
OPTIONS -> Checks which HTTP methods are supported by a resource.