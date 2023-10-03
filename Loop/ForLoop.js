/*
---Loop
---For
for([1] [2] condition === true  [3]){
    // block of Code 

}
*/
let users=['user-1',2,'user-2',2.5,'user-3',5,'user-4','user-5',10];
let onlyUsresName=[];
for(let i=0 ; i<users.length;i++){
    // typeof users[i]==="string"?onlyUsresName.unshift(users[i]):
    if(typeof users[i]==="string"){
        onlyUsresName.push(users[i])
    }else{
        continue
    }
}
console.log(onlyUsresName);
/*
-----Nested--Loop----
*/ 
// let products=['P1','P2','P3','P4','P5'];
// let Colors=['Red','Green','Black'];
// let Models=[2020,2023];
// for(let i=0 ; i<products.length;i++){
//     document.write(`<h3>your Products Name Are ${products[i]}</h3>`);
//     for(x=0;x<Colors.length;x++){
//         document.write(`<p> Colors${Colors[x]}</p></br>`)
//     }
//     for(let n=0 ; n<Models.length;n++){
//         document.write(` ${Models[n]} `)

//     }
// }
/*
-----Loop Control-----
--Break 
--Continue
--Lable---[search]
*/  
let Cars=['C1','C2','C3','C4','C5','C6','C7','C8'];
let Type=['SEDAN','COUPE','SPORTS_CAR','SUV'];
MainLoop:for(let i=0;i<Cars.length;i++){
    if(Cars[i]==='C4'){
        for(let n =0 ; n<Type.length ; n++){
            if(Type[n]==='SUV'){
                break MainLoop
            }
        }

    }


}
/*
---Loop For Advanced Example
*/ 

let Days=['Monday', 'Tuesday',' Wednesday', 'Thursday','Friday','Saturday','Sunday' ];
let i =0 ;
// for(;i<Days.length;++i){
//     console.log(Days[i],i)

    
// }
// console.log(i)// === 7 ?? 
for(;;){
    i++
    console.log(Days[i]);
    if(i===Days.length) break
}
























