/**
 # Type Coercion (Type Casting)
 - Type coercion refers to the automatic conversion of values from one data type to another, typically performed
  during operations or comparisons involving different data types. By using Type Coercion, JavaScript attempts to
 make the data types compatible to complete the operation or comparison.
  Examples:
    - +
    - -
    - "" - 1
    - false - ture
 * */
let a ="10";
let b=20;
let x=true;
let f=false;
let m="";
console.log(b+a)//2010 + is used as concatenation operator
console.log(b-a)//10 - subtraction operator
console.log(b-+a)//10
console.log(b+x)//21
console.log(a+x)//10true
console.log(m+a)//10
console.log(typeof m+a)//string
console.log(+m)// 0
console.log(false-true);//-1
console.log(true-false);//0
console.log(a+b+x+f+m)// 1020truefalse : the million dollar question is why 🙄??
/**
 - the answer it's so simple.
 - bcs of (a) it's String type that's why type Coercion will convert all this boolean and number data type to
 string and concat them with a variable
*/

console.log(+a+b+x+f+m)//31


