/*
---2-Switch Statement
----switch(expression){
---Case 1:
// block of code 
---Case 2:
// block of Code 
---break ; 
// Default:
---// code Block 
}
---Default Ordering 
---Multiple Match
*/ 
let day = 0;
switch(day){
    case 0:
        console.log("Saturday")
        break;
    case 1:
        console.log("Sunday")
        break;
    default:
    console.log('Unknown Day ')// we can use the default in the start or in the end 

}