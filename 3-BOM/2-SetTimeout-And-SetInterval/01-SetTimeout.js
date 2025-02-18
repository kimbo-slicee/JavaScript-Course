/*
* BOM[Browser Object Model]
* - setTimeout(Functions ,Timeout,Addition Params)
* - clearTimeout(Identifier)
*/


let notificationCard=document.querySelector(".notificationCard");
let clearBtn=document.querySelector(".clear");
let beforeTimeOut=document.querySelector(".beforeTimeOut")
let p=document.querySelector(".beforeTimeOut p")
let showCard=setTimeout(()=>{
    notificationCard.style.display="flex";
    beforeTimeOut.style.display="none";
},3000)
clearBtn.addEventListener("click",()=>{
    clearTimeout(showCard)
    p.innerText="SetTime out Has Ben cleared Successful"
})

// Simple Example
setTimeout(()=>{
    console.log("hello World !")
    },2000)
setTimeout(() => {
    console.log("this is the first message");
}, 5000);
setTimeout(() => {
    console.log("this is the second message");
}, 3000);
setTimeout(() => {
    console.log("this is the third message");
}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message

// Example withe additional params
let userName="me";
setTimeout((user)=>{
    console.log(`Hello ${user}`)
},2000,userName)
// clear TimeOut
