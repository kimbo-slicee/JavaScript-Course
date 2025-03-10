/*
* - 14-Promise Intro and syntax
* - 14-Promise Is Something That Will Happen in The Future
* - 14-Promise Avoid Callback Hell
* - 14-Promise Is the Object That Represent the Status Of An Async Operation And Its Resulting Value
* - 14-Promise Status
* - Pending: Initial Status
* - Fulfilled: Completed Successfully
* - Rejected: Failed
* */
// Simple Example
const promise=new Promise((resolve, reject)=>{
    let connection=true;
    if(connection){
        resolve("Connection Affected Successfully ✔")
    }else {
        reject(Error("Failed Connection ❌"));
    }
})
promise.then((res)=>{
    console.log(res)
}).catch(err=>console.log(err))