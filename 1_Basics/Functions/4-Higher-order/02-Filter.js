/*
----Filter 
----Methode Create a New array 
----with all element That pass the test implemented by the provided Function
Syntax Filter(callBackFunction(element,Index,Array){},thisArg)
----Element---> The current element being processed in the array
----Index---> The index of current element being processed in the array
----Array-->The Current Array
*/ 
// Get Friends With Name Starts With A
let Friends =['Ahmed','Sameh','Sayed','Asmaa','Amjad','Israa'];
let E1=Friends.filter(ele=>ele.startsWith('A'))
// return new array
console.log(E1)
console.log(Friends)
// Get Even Numbers Only
let Numbers=[11,20,2,5,17,10];
let E2=Numbers.filter(ele=>ele%2===0)
console.log(E2)
/*
----------Filter------------
---Filter Longest Word By 4-Number
*/
//Filter Word More Than $ Characters
let sentence='I love Food Code Too Playing Much ';
// Ignore Numbers
let T=sentence.split(' ').filter(ele=>ele.length<=4).join(' ')
console.log(T);
// filter strings + Multiply
let mix ="A13BS2ZX";
console.log(mix.split("").filter(e=>parseInt(e)).map(e=>e*e).join(""))



