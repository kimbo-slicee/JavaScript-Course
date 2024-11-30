/*
----Filter 
----Methode Create a New array 
----with all element That pass the test implemented by the provided Function

Syntax Filter(callBackFunction(element,Index,Array){},thisArg)
----Element---> The current element being processed in the array
----Index---> Thethe index of current element being processed in the array
----Array-->The Current Array
*/ 
// Get Friends With Name Starts With A
let Frirnds =['Ahmed','Sameh','Sayed','Asmaa','Amjad','Israa'];
let E1=Frirnds.filter(ele=>ele.startsWith('A'))
// returne new array 
console.log(E1)
console.log(Frirnds)
// Get Even Numbers Only 
let Numbers=[11,20,2,5,17,10];
let E2=Numbers.filter(ele=>ele%2===0)
console.log(E2)
/*
----------Filter------------
---Filter Longest Word By 4-Number
*/ 
//Filter Word More Than $ Characters 
let santence='I love Foood Code Too Playing Much ';
// Ignore Numbers 
let T=santence.split(' ').filter(ele=>ele.length<=4).join(' ')
console.log(T);
// filter strings + Multiply 
let mix ="A13BS2ZX";
let T2=mix.split('').filter(ele=>!isNaN(ele)).map(ele=>ele*ele);
console.log(T2);




