/*
--Create Arrays [Two Methodws] new Array() +[]
--Access Arrays Elements
--Nested Arrays 
--Change Arrays Elements 
--Check For Array Array isArray(Arr)
*/ 
let user=['user_1','user_2','user_3','user_4'];
// 
console.log(user[4]);
console.log(user[1][5]);
//Nested Array == Array in side Array 
let carsList=['car_1','car_2','car_3',['car_4_1','car_4_2'],'car_5'];
console.log(`we Have to moduls in cars cartegori ${carsList[3][0]}`);
//Change Arrays Elements 
user[3]='user_n';
console.log(Array.isArray(carsList[3]));
/*
--Array Methods 
--Length 
*/ 

