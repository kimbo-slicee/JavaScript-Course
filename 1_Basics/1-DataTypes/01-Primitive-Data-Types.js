/**
 --Data Type Intro
 --String
 --4-Number
 --Array => Object
 --Object
 --boolean
 --undefined
 --null => object
 --BigInt
 --symbol
 */

console.log(typeof "Hello World ")// string
console.log(typeof "5000")//string
console.log(typeof null)//object
console.log(typeof "");//string
console.log(typeof " ");//string
console.log(typeof ["10",20,"30"])// object
console.log(typeof 2025)//number
console.log(typeof 20.25)//number
console.log(typeof 0.23)//number
console.log(typeof 10)//number
console.log(typeof true)//boolean
console.log(typeof false)//boolean
console.log(typeof undefined)//undefined
console.log(typeof null)//object
//ES6
console.log(typeof 1234567890123456789012345678901234567890n)//bigint
const uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"



