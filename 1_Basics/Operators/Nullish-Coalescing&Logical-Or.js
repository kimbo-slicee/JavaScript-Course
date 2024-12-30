/*
----Logical Operators-----
----!NOt
----&& And
----|| Or
*/
console.log(!true);// False
console.log(!false);//True
console.log(10=='10'&& 10>=10)//&& all Condition
console.log(10==='10' || 10>=10)// One Condition (Recommender)
/*
    --------Nullish Coalescing-----------
---Null + Undefined + Any Falsy Value
---Nullish Coalescing Operator ??
---Null + undefined
*/
console.log(`The Price Is ${prix || 200 } `)
//---Nullish Coalescing Operator
console.log(`the Price Is ${prix ?? 100 }`)

console.log(Boolean(undefined))//false
console.log(Boolean(''))//false
console.log(Boolean(' '))//true
console.log(Boolean(null))//false
console.log(Boolean({}))//false
console.log(Boolean([]))//false