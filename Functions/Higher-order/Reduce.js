/*
---Reduce 
---Method Executes a reducer Function On Each element Of The Array 
---Resulting in a Single output Value 

Syntax 
--Reduce(CallBackfunction(Accumulated,Current Value ,Current Index Source Array){},initialValue)
--Accumulator---> The Accumulated Value previously in last invocation 
--Current Val---> The Current element being processed in the Array
-----Index--->The index of currentt element being procesed in the array.
-------Starts From index 0 If an initialValue is provided
-------Otherwise,It starts From Index I
---Array => The Current Array  
*/ 
let nums =[10,20,15,30];

let add = nums.reduce((acc,current,index,arr)=>{
        console.log(`Acc ${acc}`) 
        console.log(`current ${current}`) 
        console.log(`index ${index}`) 
        console.log(`Arr ${arr}`) 
     },5)
// console.log(add) 
/*
--------Reduce Practice--------
---Lngest word 
---Remove Characters + use Reduce  
*/
let TheBiggest  = ['Bla','Propaganda','Other','AAA',];
let E1=TheBiggest.reduce((prev,current)=>prev.length>current.length?prev:current);
console.log(E1)
let removeChars = ["E","@","L","Z","@","@","E","R","@","O"];
let E2=removeChars.filter(ele=>ele!=='@').reduce((prev,current)=>prev+current)
console.log(E2)
