/*
* To Understand AJAX , Fetch ,Promises
* - Asynchronous vs Synchronous Programming
* - Meaning
* Synchronous Runs in Sequence
* - Each Operation Must wait For Th Previous One To Complete
* Asynchronous
* - Operations Runs In Parallel this Means That An Operation Cn Occur while Another One Is Still Being Processed
* Search
* - JavaScript Is A Single Threaded
* - Multi Threaded Languages
* */

// Synchronous
console.log("start")
for (let i = 0; i <100 ; i++) {
    console.log("Loop")
}
console.log("End")
// Asynchronous
console.log("Start")
setTimeout(()=>{
    console.log("Loop")
},1000)
console.log("End")