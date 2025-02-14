/*
---Reduce 
---Method Executes a reducer Function On Each element Of The Array 
---Syntax
-Reduce(CallBack function(Accumulated,Current Value ,Current Index Source Array){},initialValue)
-Accumulator---> The Accumulated Value previously in last invocation
-Current Val---> The Current element being processed in the Array
-Index--->The index of a current element being processed in the array.
-Starts From index 0 If an initialValue is provided
-Otherwise,It starts From Index I
---Note:
---Array => The Current Array  
*/ 
let nums =[10,20,15,30];

nums.reduce((acc,current,index,arr)=>{
        console.log(`Acc ${acc}`) 
        console.log(`current ${current}`) 
        console.log(`index ${index}`) 
        console.log(`Arr ${arr}`) 
     },5)
/*
--------Reduce Practice--------
---Longest word
---Remove Characters + use Reduce  
*/
let longest_word  = ['Bla','Propaganda','Other','AAA','Battery','Test'];
let res=longest_word.reduce((acc,curr)=>acc.length>curr.length?acc:curr);
console.log(res);
let removeChar=['A','@','@','P','@','@','O','L','@','@','L','O'];
console.log(removeChar.filter(e=>e!=='@').reduce((acc,cur)=>acc+cur));

