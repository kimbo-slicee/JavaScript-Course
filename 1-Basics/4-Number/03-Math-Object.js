/*
----------------Math Object-------------
-----------Operation-of-Math------------
--round();
--cell();
--floor();
--min();
--max();
--pow();
--random();
--trunc()[ES6]
*/
let price=50.45;
//  round method if number after comma bigger then 5 incrise to the next value if note remove the float number
console.log(Math.round(price))//50
let newPrice =50.55;
console.log(Math.round(newPrice))//51
// universal constant of ideal gases
let  R = 8.314_462_618_153_24
console.log(Math.ceil(R));// 9
console.log(Math.floor(R));// 8
console.log(Math.trunc(R));// 8
// trunc remove all the numbers after the coma
console.log(Math.max(1,2,3,4,5,6,7,8,9,1000));//1000
console.log(Math.min(1,2,3,4,5,6,7,8,9,1000));//1

