/**
* The scope is the current context of execution in which values and expressions are "visible" or can be
* referenced. If a variable or expression is not in the current scope, it will not be available for use.
* Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice
* versa.
* - Search From scope chaining in JS
* - Note: Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
* - ES6 introduced two important new JavaScript keywords: let and const.
* These two keywords provide Block Scope in JavaScript.
*/
// Global scope : The default scope for all code running in script mode.
const w=100;
const l=120;
let name="me";
let age =30;
var location =""
// Block scope
{
    const w=200;
    const l=5;
    let name="you";
    let age =20;

}

const calculateRectangleArea=(length,width)=>console.log(length*width);
const printUserData=(name,age)=>{
    console.log(`Hello ${name} ur age is ${age}`)
}
calculateRectangleArea(w,l)// 12000
printUserData(name,age);// Hello me ur age is 1
// important Note : if u check the output u will know that's the function (calculateRectangleArea,printUserData)
// access immediately to the global scope and ignore the block scope why ?

