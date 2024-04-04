/**
DOM[Add Event Listener]
---addEventListener
---Use Without On
---Attach Multiple Events 

---Search 
---Capture & Bubbling JavaScript 
---Remove
DV-2025 Submission Confirmation//D7540F358D8AC270C3B206FCF31C1BC89416BA8C
*/ 

/*
ele.addEventListener('eventName',fuction or object )
*/ 
let One=document.querySelector('.One').parentElement;
console.log(One);
One.addEventListener('click',e=>{
    e.target.style.cssText='font-weight: 800; color:green ; font-size:20px;';

})