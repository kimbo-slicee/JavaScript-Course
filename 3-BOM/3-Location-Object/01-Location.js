  /*
* BOM [Browser Object Model]
* Location interface
* - Let's Discover the instances of this interface
* -----> Location: ancestorOrigins property
* The ancestorOrigins read-only property of the Location interface is a static DOMStringList containing, in
*  reverse order, the origins of all ancestor browsing contexts of the document associated with the given Location
* object. You can use location.ancestorOrigins in the script for a document to determine, for example, whenever the
* document is being framed by a site which you don't expect it to be framed by. You can also use it to vary the
* behavior of the document based on what site or list of sites is framing it.
* --------> href:
* --------> Get/Set[URL|| Hash || File || Mail];
* --------> host
* --------> hash || hostname
* --------> protocol
* --------> reload()
* --------> replace()
* --------> assign()
* */
// Location: ancestorOrigins property
console.log(location.ancestorOrigins)
// Href
console.log(location.href)
// Hash
// window.location.href="/#home"
// url
console.log(location.url)
console.log(location.host)// http://localhost:port
console.log(location.hostname)//http://localhost
// location.hostname="google.com"
console.log(location.protocol);//http
// location.reload()
// location.replace("https://localhost:8080")// remove the current page from the session history
// location.assign("")
