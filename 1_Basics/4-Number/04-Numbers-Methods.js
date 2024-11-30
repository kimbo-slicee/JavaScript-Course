/*
----Number Methods----
--two Dots To Call A Methods
--toString();
--toFixed();
--parseInt();
--parseFloat();
--toPrecision()
--toExponential
*/
let N=100;
let N1=99.9999999999
let N2=99.423444455
let N3=100.2
let user=parseInt('30user');
let userTall="180.39cm"
let userEmail="userName@1234.gmail.com";
console.log(user);//30
console.log(parseFloat(userTall))// 180.39
console.log(parseInt(userEmail))//NaN parsInt can only return the number in the start of in the end of String
console.log(typeof N.toString());// string
console.log(parseInt('89.8user'));
console.log(N2.toFixed(2));//99.42
console.log(N1.toFixed(2))//100.00 important Note :
//if the Number after the coma bigger than 5 toFixed Function increase the number value to the next value
console.log(typeof N1.toFixed(2))//string to fixed return string
let num = 123.456;
console.log(num.toFixed(2));       // "123.46"
console.log(num.toExponential(1)); // "1.2e+2"
console.log(num.toPrecision(4));   // "123.5"