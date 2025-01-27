/*
------ForEach
==============================================================
---- Method Executed a provided Function Once For each Array Element
Syntax ForEach(callbackFunction(element,Index,Array){},ThisArg)
---Element ---> The current element being processed in the array
---Index----> The index of current element being processed in the array  
---Array----> The Current Array 
===============================================================
Note 
---Doesnt Return Anything [Undefined]
---Break Will Not Break the Loop
*/ 

const div=document.querySelectorAll("div");
div.forEach((ele,index)=>{
    ele.addEventListener("click",(e)=>{
        div.forEach(ele=>ele.classList.remove("active"))
        ele.classList.add("active");
        setTimeout(()=>ele.classList.remove("active"),5000)
    })
})

