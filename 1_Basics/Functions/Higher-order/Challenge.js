/*
---Higher Order 10-Functions Challenge

You Can Use
--- , 
--- _
--- space 
--- True => 1 => One time Only in The Code 

You Cannot Use 
---Numbers 
---Letters 

---You Must Use [Filter + Map + Reduce + Your Knowledge]
---Oreder Is NOt Important 
---All IN One Chain
*/ 
let myString ='1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,2';
let solution=myString.split(',').filter(ele=>isNaN(ele)).map(ele=>!ele.startsWith('_')&& ele.length >=+true ?ele[+false]:'').reduce((perv,curr)=>`${perv} ${curr}`)
console.log(solution);