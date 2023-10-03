/*
---function  
--What Is Function ? 
--User-Defined Vs Built In Functions 
--Syntax + Basics Usage 
--Parameter + Argument 
--Practical example 

*/ 
let result=0
function F1(a,b){
    result=a+b
    return result;
}
console.log(F1(10,30));
function generateYears(Start,end,exclude){
    for(let i=Start ; i<=end ; i++){
        if(i===exclude){
            continue;
        }
        console.log(i)
    }

}
generateYears(1998,2023,2020)
/*
--Automatic semicolon Innsertion [No Line Terminator Allowed]
--Function Default Parameters[Undefind]
--Old Strategies [Condition + Logical or ]
--Es6 Method
*/ 
function teste(a,b){
    // if(a===undefined){
    //     a="unknown"

    // }
    a=a||'Unknown'

}
function F2 (a='userName',g='Age'){
    return`Hello ${a} Your Age is ${g}`
}
console.log(F2())
/*
----Function Rest Parameters---
--Only One Allowed--
--Must Be Last Element
*/ 
function Calc(...Numbers){
    let result=0;
    for(let i=0 ; i<Numbers.length ; i++){
        result+=Numbers[i]
    }
    return result;
}
console.log(Calc(1,1,1,1,1,1,1)) 
// function F3(a,b,...c){
//     console.log(Array.isArray(c))//True
//     let R=a+b+c[0]+c[1]
//     return R
// }
// console.log(F3(10,20,10,40,50));
let userData = function(u='Un',a='Un',rt=0,show='Yes',...s){
    document.write(`<div>`)
    document.write(`<h1>welcome,${u}</h1>`)
    document.write(`<p>Age:${a}</p>`)
    document.write(`<p>Hour Rate:$${rt}</p>`)
    show==='Yes' && s.length > 0 
    ?document.write(`<p>${s.join('|')}</p>`)
    :document.write(`<p>Skills Is Hidden or Ther Is No Skills <p>`)
    document.write(`</div>`)
}
userData('mohammed',25,20,'Yes','one','tow','three');
/*
--Function
---Anonymous Function 
---Calling Named Function vs Anonymous Function 
---Argument To Other Function 
---Task Without Name 
---SetTimeOut
*/ 
/*---Return Nested Function--*/ 
function F_1(N1,N2){
let result=N1+N2;
    function F_2(N3){
        let result_2=N3+10
        return result_2;
    }
        return F_2(result);
}
console.log(F_1(10,10))
 











