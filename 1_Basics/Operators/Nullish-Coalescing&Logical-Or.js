/*
--------Nullish Coalescing-----------
---Null + Undefined + Any Falsy Value
---Nullish Coalescing Operator ??
---Null + undefined
*/
// the false value in JavaScript
console.log(Boolean(undefined))//false
console.log(Boolean(''))//false
console.log(Boolean(' '))//true
console.log(Boolean(null))//false
console.log(Boolean({}))//false
console.log(Boolean([]))//false
console.log(Boolean(0))//false
console.log(`The Price Is ${price || 200 } `)// if prix is null or undefined or 0 or '' or false or NaN then 200 will
// be printed
//---Nullish Coalescing Operator
console.log(`the Price Is ${price ?? 100 }`)// if price is null or undefined then 100 will be printed

