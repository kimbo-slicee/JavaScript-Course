/**
------String-Challenge------=
---You Can use Concatenate--=
*/ 
let a ='Elzero Web School';
// Inculde This Methods in Your Solution[Slice,CharAt] | .com
console.log(a.charAt(2).toUpperCase()+a.slice(3,6),'//done');
//8 H 
console.log(a.substr(-4,1).repeat(8).toLocaleUpperCase());
//Return Array [Elzero]
console.log(a.split(" ",1));
//Use Only "substr" Methode + tamplate Literals In Yout Solution
console.log (`${a.substr(0,6)} ${a.substr(-6)}`);
// Solution Must Be Dynamic And String May Change 
console.log(` ${a.charAt(0).toLocaleLowerCase()}${a.substring(1,a.length-1).toUpperCase()}${a.substr(a.length-1,1).toLowerCase()}`)
 