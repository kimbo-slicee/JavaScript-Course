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
- Redeclare (Error)
- Access Before Declare (Error)
- Variable Scope Drama (No)
--Block or Function Scop
## Const
- Redeclare (Error)
- Access Before Declare (Error)
- Variable Scope Drama (No)
- Block or Function Scope
*/


/*
-----------------String Syntax--------------
String Syntax + Character Escape Sequences (for search)
\Escape + Line Continue 
\n
*/
window.onload=()=>{
console.log('Hello "Bimo" your Last Name is \'LastName\' \\');
console.log("hello \
mohammed\
it s\
javascript ")/* \ Scape new ligne */
console.log('userName \n LastName \n ');
let a='we Love';
let b='userName';
let c='And';
let d='Programming';
console.log(a +' ' + b + ' ' + "\n" + c + "\n" + d);
/*
------Template Literals-------
`${a} + ${b} +${c}`
*/ 
 let TemplateLiterals=`hello ${a} ${b}`;
 console.log(TemplateLiterals);
 let user_1='user_1',
 user_2='user_2',
 user_3='user_3'
 console.log(user_3)

}












































