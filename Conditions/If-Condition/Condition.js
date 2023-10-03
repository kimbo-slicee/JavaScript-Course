/*
----------------------------------------------Control-Flow---------------------------------------------------
---------In computer science, control flow (or flow of control) is the order in which individual statements--
---------instructions or function calls of an imperative program are executed or evaluated.------------------
-------------------------------------------------------------------------------------------------------------
--If---- 
--Else--
--else--
if(Condition){
    // Bolck Of code 

}else{
    // Bock of Code 
}
*/
let CarName='Volkswagen',
CarModel='Touareg',
CarColor='Black',
Interior_color='Red',
Engine='Electric',
SaftyMode=true,
discountAmount=30,
discount=false,
country='Morocco',
delivery=100,
Accidents_or_damage='none reported';
if(CarName==='Volkswagen' && CarModel==='Touareg'){
    let Prix=29995;
    if(CarColor==='Black' && Engine==='Electric'){
        Prix+=1000;
        if(Accidents_or_damage==='none reported'){
            Prix+=500;
        }else if(Accidents_or_damage==='reported'){
            Prix-=500;
        }else{
            Prix=Prix
        }
    }
    if(SaftyMode===true){
        Prix+=2099
    }
    if(country==='Morocco'){
        if(discount===true){
            if(discountAmount<30){
                Prix-=discountAmount
            }else{
                console.log('Error')
            }
        }
        delivery=0
    }else{
        delivery=delivery
    }
}

/*
-----Nested If Condition-----
*/ 
/*
------Conditional(Ternary)Operator
---Syntax [condtion?if true :If False ]
*/ 
let userName='user',TheGender='Male',TheAge=25;
//TheGender==='Male'?console.log('Mr'):console.log('Mrs');
let result=TheGender==='Male'?console.log('Mr'):console.log('Mrs');
console.log(result);
















