/*
* Async Before the function that means the function return promise
* async help to create In Creating Asynchronous Promise Behavior With Cleaner Style
* - Await Works Only Inside Async Functions
* - Await Make JavaScript wait for The Promise Result
* - Await Is More Elegant Syntax Of Getting Result
* */

//Promise
function getData(){
    return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve("The Promise in Resolved"),3000)
    })
}
getData().then(msg=>console.log(msg));
//async
async function fetchData(){
  return "Fetch Data";
}
fetchData().then((msg)=>console.log(msg))
// Error Handling
// async function fetch() {
//     throw new Error("Something went wrong!");
// }
//
// fetch().catch(console.error);
//
// function fetchWithPromise() {
//     return Promise.reject(new Error("Something went wrong!"));
// }
// Example without await and withe await
const promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I'm a Promise")
    },3000)
})
// without await
async function test_1(){
    console.log("FIRST TASK");
    promise.then(msg=>console.log(msg))
    console.log("SECOND TASK")
}
// withe await
async function test_2(){
    console.log("FIRST TASK");
    await promise.then(msg=>console.log(msg))
    console.log("SECOND TASK")
}
test_1();
test_2();