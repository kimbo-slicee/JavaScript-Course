/*
--Arithmetic Operators
-- +  Addition
-- -  subtraction
-- *  Multiplication
-- /  Division 
-- ** Exponentiation(Es7)
-- %  Modulus(Division Remainder)
-- ++ Increment [Post/Pre]
-- -- Decrement[Post/pre]
*/ 
console.log(10 + 20)
console.log(10 + 'Mohammed')//=>concatination 
console.log(10 -20);
console.log(10-'Mohammed')//=>Nan(not a Number)
console.log(typeof NaN)// ==> Number
let num=1;
// Post Increment num++
num++
console.log(num);// 
console.log(num);
let num_2=1;
// Pre increment ++num
++num_2
console.log(num_2);
/*
-------------Unary Plus And Negation Operators-------------
--- + Unary Plus [Return Number If Its Not Number]
--- - Unary Negation [Return Number If Its Not Number + Negates its]
--For Search[Type Coercion] 
*/ 
let a="10";
let b=20;
let c=true;
console.log(a+b)//==>1020 end the type is string 
console.log(a-b)//==> -10 end the type is Number
console.log(''-b)// ===> -20 typeof('') Number = 0
console.log(a+b+c)// ===> 1020true  

