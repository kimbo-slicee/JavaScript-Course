/*
* - AJAX (Asynchronous javascript and XML)
* - Approach To Use Many Technologies Together [HTML, CSS ,JavaScript]
* - It use "XMLHTTPRequest" Object To interact with The server
* - You Can Fetch Data Or Send Data Without Page Refresh
* - test new XMLHttpRequest
* - Request And Response
* - Status Code
* - [200] Response is success
* - [404] Not found
* - Ready Status Of The Request
* - [0] Request not Initialized
* - [1] Server Connection Established
* - [2] Request Received
* - [3] Processing Request
* - [4] Request is Finished And Response Is Ready
* */
let request =new XMLHttpRequest();
console.log(request);
console.log(request.status);
// check api
document.querySelector(".btn").addEventListener("click",()=>{
    let xhr= new XMLHttpRequest()
    xhr.open("GET","https://api.github.com/users/");
    xhr.send();
    xhr.addEventListener("readystatechange",()=>{
        if(this.status===200 && this.readyState===4){
            console.log(this.responseText);
        }
    })
})
