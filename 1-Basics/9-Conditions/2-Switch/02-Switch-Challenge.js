/*
----switch--Challenge 
*/ 
//[1]:transform if to switch
let job ='Developer';
let Salary=0;
if(job==='Manager'){
    Salary=8000;
}else if(job=='IT' || job === "support"){
    Salary=6000;
}else if(job==='Developer'|| job==="Designer"){
    Salary=7000;
}else{
    Salary=4000
}
// 
switch(job){
    case 'Manager':
        Salary=8000;
        console.log(Salary)
    break;
    case 'IT':
    case 'support':
        Salary=6000;
        console.log(Salary)
    break;
    case 'Developer':
    case 'Designer' :
        Salary=7000;
        console.log(Salary)
    break;
    default:
        Salary=4000;
        console.log(Salary)
    break;
}
/*
----If_challenge
*/ 
//[2]:2-Switch To If
let hoidays=0,money=0
switch(hoidays){
    case 0:
        money=5000
        console.log(`my money is ${money}`)
        break;
    case 1:
    case 2:
        money=3000
        console.log(`my Money is ${money}`);
        break;
    case 4:
        money=1000;
        console.log(`my Money is ${money}`)
        break;   
    case 5:
        money=500;
        console,log(`my Money is ${money}`)
        break;
    default:
        money=0;
        console.log(`My Money ${money}`)
}
// If condition
if(hoidays===0){
    money=5000
        console.log(`my money is ${money}`)
}else if(hoidays===1 || hoidays===2){
    money=3000
    console.log(`my Money is ${money}`);
}else if(hoidays===4){
    money=1000;
    console.log(`my Money is ${money}`)
}else if(hoidays===5){
    money=500;
    console.log(`my Money is ${money}`)
}else{
    money=0;
    console.log(`My Money ${money}`)
}







