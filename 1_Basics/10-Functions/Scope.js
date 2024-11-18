/*
Scope 
--- Global And local Scope
*/ 
var a=1
let B=true
if(B){
    var a=2

}
console.log(a)// a=2 var is note a local scope so over ride 
let x=10
if(true){
console.log(`form if Block ${x}`)
let x=20
// 11-output == error
}
console.log(`form local ${x}scope `);
/*
----Scope - Lexical (Static)---
--for-Search---
-------------------Execution Context-------------------------------
--There are two types of execution contexts: global and function---
--There are two types of execution contexts: global and function---
--The global execution context is created when a JavaScript script-
--first starts to run, and it represents the global scope in------- 
--JavaScript. A function execution context is created whenever----- 
--a function is called, representing the function's local scope----
-------------------------------------------------------------------
--Lexical Enivronment
*/ 