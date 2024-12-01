// The Number object provides static properties and methods to work with numbers:
let num=200;
let a=100;
let b=500;
let e=2.89;
console.log(Number.MAX_VALUE)// 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.NEGATIVE_INFINITY)// -Infinity
console.log(Number.isInteger(100.20))// False
console.log(Number.isSafeInteger(100.20))// False
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER))// true
console.log(Number.isFinite(Number.MAX_SAFE_INTEGER))// true
console.log(Number.isNaN('NaN'));// False
console.log(Number.isNaN(Number("Hello It's me ")))// true
console.log(Number.isNaN(num+"Hello world"))//false
