/*
----Logical Operators----- 
----!NOt 
----&& And 
----|| Or 
*/ 
console.log(!true);// False
console.log(!false);//True
console.log(10=='10'&& 10>=10)//&& all Condition  
console.log(10==='10' || 10>=10)// One Condition 
/*
--------Nullish Coalescing-----------
---Null + Undefined + Any Falsy Value 
---Nullish Coalescing Perator ??
---Null + undefind
*/ 
console.log(Boolean(100))
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
let prix = '';
console.log(`The Price Is ${prix || 200 } `)
//---Nullish Coalescing Perator 
console.log(`the Price Is ${prix ?? 100 }`)
