/*
---Number---
---Double Precision For serch----
---syntactic Sugar "_"
--- e 
--- ** 
--- withe Decimal
--- Number + BigInt
--- Number Min Value
--- Number Max Value 
*/ 
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10**6);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE)
/*
----Number Methods----
--two Dots To Call A Methods
--toString();
--toFixed();
--parseInt();
--parseFloat();
--isInteger()[ES6];
--isNan()[Es6]
*/ 
let N=100;
let N2=100.2
let user=parseInt('30user');
console.log(user);
console.log(N.toString());
console.log(N2.toFixed());
console.log(parseInt('89.8user'));
console.log(Number.isInteger(100.20))// False 
console.log(Number.isNaN('NaN'));
/*
----------------MathObject-------------=
-----------Oberation-of-Math-----------=
--round();
--cell();
--floor();
--min();
--max();
--pow();
--random();
--trunc()[ES6]
*/ 
console.log(Math.round(99.5))//===> 100 [if the number after the cume is>5 cille end if the number after the cuma is<5 floor]
console.log(Math.ceil(99.5));
console.log(Math.floor(99.5));
console.log(Math.min(10,20,-39,30,405));
console.log(Math.max(10,9,-4,36,-30));
console.log(Math.trunc('99.5'))





















