/*
-----Number--Challenge 
*/ 
let a=1_00;
let b=2_00.5;
let c=1e2;
let d=2.4;
//[1]:find Smallest Number in All Variables And Return Integer
//[2]:Use Variable a + d One Time To Get The Needed Output //10000
//[3]:Get Integer "2" From d Variable With 4 Methods 
/*[4]:Use Variables b+d To get This Values [66.67] String 
[67] Number*/
//[1]
console.log(Math.round(Math.min(a,b,c,d)));
//[2]
console.log(a+Math.pow(Math.ceil(d),2)*100);
//[3]
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(Number(d.toFixed(0)));
//[4]
console.log();