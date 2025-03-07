/*
* The event loop
* JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting
* and processing events, and executing queued sub-tasks. This model is quite different from models in other languages  like C and Java.
*/
setTimeout(()=>{
    console.log(counter)
},0)
let counter=5;
counter+=10;
// output 15
