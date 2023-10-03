/*
------ForEach
==============================================================
---- Method Executed a provided Function Once For each Array Eelement 
Syntax ForEach(clalbackFunction(element,Index,Array){},ThisArg)
---Eelement ---> The current element being processed in the array
---Index----> The index of current element being processed in the array  
---Array----> The Current Array 
===============================================================
Note 
---Doesnt Return Anything [Undefined]
---Break Wiil Not Break the Loop 
*/ 
let AllListe=document.querySelectorAll('ul li ')
let Divs=document.querySelectorAll('div>div');
console.log(AllListe);
AllListe.forEach(ele=>{
    ele.onclick= _ => {
        // Remove all classes
    AllListe.forEach(ele=>ele.classList.remove('active'))
    // add the active classs to the current element 
    ele.classList.add('active')
    Divs.forEach(ele=>ele.style.color='red')

}

    
})
