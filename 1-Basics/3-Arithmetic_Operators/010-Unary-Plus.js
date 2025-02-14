/**
- + Unary Plus [Return Number if Its Not Number]
- Tests
- Normal Number 
- String Number 
- String Negative Number 
- String Text 
- Float 
- Hexadecimal Numeral System => 0xFF
- null 
- false 
- true 
*/ 
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"userName");//Nan not a number 
console.log(typeof +"userName");//error
console.log(+15.6);//15.6
console.log(+0xFF);//255
console.log(+null);// 0 
console.log(+true);// 1
console.log(+false);// 0
//
const x = 1;
const y = -1;

console.log(+x);
// Expected output: 1

console.log(+y);
// Expected output: -1

console.log(+'');
// Expected output: 0

console.log(+true);
// Expected output: 1

console.log(+false);
// Expected output: 0

console.log(+'hello');
// Expected output: NaN
