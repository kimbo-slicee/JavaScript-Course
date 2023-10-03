/*
Arrays Challenges 
*/
"use strict"; 
let zero =0;
let N=3;
let users=['Ahmed','Mazero','Elham','Osama','Gamal','Ameer'];
// Write Code Here return ['user_4','user_3','user_2','user_1'];
let NewArray=users.splice(zero,N+ +true).reverse()
console.log(NewArray);
//['user_2,user_3]
let smallArray=NewArray.splice(zero+ +true,N -true);
console.log(smallArray);
//"Elzero"
let Str=smallArray.join('');
let NewStr=Str.substring(zero,N-true)+Str.substr(-N-true);
console.log(NewStr.substring(N+true))
console.log(--N);



