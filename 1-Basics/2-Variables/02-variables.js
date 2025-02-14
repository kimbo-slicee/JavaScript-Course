/**
1. Variables Intro
2. what is variable
3. why we use Variables
4. loosely Typed (JavaScript) vs Strongly Typed
5. Identifiers
6. Name Convention And Rules
7. JavaScript is a case-sensitive language
## Var
- Redeclare (Yes Without message d error)
- Access Before Declare(Undefined)
- Variable Scope Drama [Added To Window](yes)
- Block or function Scop
## Let
- Redeclare (No=>Error)
- Access Before Declare (No=>Error)
- Variable Scope Drama (No)
- Block or Function Scope
## Const
- Redeclare (Error)
- Access Before Declare (Error)
- Variable Scope Drama (No)
- Block or Function Scope
*/

// using var i can redeclare the variables let's say :
var username ="user_one";
var username ="user_two"// no error 😁
// let 's test let keyword
let userAge=20;
// let userAge=10; error
// using variable before initials
console.log(varVariable);//undefined
var varVariable="declarations"
// but let and const will return error amd that's helpful in debugging mode

// var scope = window object or we can say global scope

let user_1='user_1', user_2='user_2', user_3='user_3' // we can declare variables in one line
console.log(user_3)











































