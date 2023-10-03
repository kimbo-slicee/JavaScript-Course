/*
---Variables Intro 
--what is varibale 
--why we use Variables 
--loosely Typed (JavaScript) vs Strongly Typed 
--Identifiers
--Name Convention And Rules
--JavaScript is a case-sensitive language
*/ 
//================================================//
/*
-------Var-------------------------------- 
--Redeclare (Yes Without message d error)
--Access Before Declare(Undefined)
--Variable Scope Drama [Added To Window](yes)
--Block or function Scop
-------Let---------------------------------
--Redeclare (Error)
--Access Before Declare (Error)
--Variable Scope Drama (No)
--Block or Function Scop
--------Const-----------------------------
--Redeclare (Error)
--Access Before Declare (Error)
--Varibale Scope Darama (No)
--Block or Function Scope 
*/ 
/*
-----------------String Syntax--------------
String Syntax + Character Escape Sequences (for search)
\Escape + Line Continue 
\n
*/
window.onload=()=>{
console.log('Hello "mohammed" your Last Name is \'El aouri\' \\');
console.log("hello \
mohammed\
it s\
javascript ")/* \ Scape new ligne */
console.log('mohemmd \n El aouri \n ');
let a='we Love';
let b='Mohammed';
let c='And';
let d='Programming';
console.log(a +' ' + b + ' ' + "\n" + c + "\n" + d);
/*
------Template Literals-------
`${a} + ${b} +${c}`
*/ 
 let TemplateLiterals=`hello ${a} ${b}`;
 console.log(TemplateLiterals);
 let user_1='mohammed',
 user_2='yassine',
 user_3='Ahmed'
 console.log(user_3)

} 











































