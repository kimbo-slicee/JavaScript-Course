/**
 - Unary Negation [Return Number if Its Not number + Negates It ]
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
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"userName");//Nan not a number
console.log(typeof -"userName");//error
console.log(-15.6);//15.6
console.log(- -15.6);//15.6
console.log(-0xFF);//255
console.log(-null);// 0
console.log(-true);// 1
console.log(- +false);// 0