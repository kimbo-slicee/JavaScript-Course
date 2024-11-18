/**
---Object 
---Intro And what Is Object 
---Testing Window Object 
---Accessing Object
*/
let user ={
    // Propertie 
    TheName:'user00😁',
    userAge:20,
    // Methodes
    GoogMorning:()=>{
        return `GoogMorning ${user.TheName} Your Age Is ${user.userAge}`
    }
};
console.log(user.GoogMorning())
/**
 - Dot Notation vs Bracket Notation
---------------------------------------------Note---------------------------------------------------
The main factor that will help you make your decision is the key of the property you want to access-
If it is a static key, use Dot Notation.------------------------------------------------------------
But if it is a dynamic key (evaluated from an expression during runtime), use Bracket Notation.-----
----------------------------------------------------------------------------------------------------
*/ 
let Data="userPhone";
let user01={
    userName:'user01',
    userAge:11,
    "user Add":'Nowhere',
    userPhone:1111


}
// Acces Withe Dor Notation 
// console.log(user01."user Add")// error
// Acces Withe Bracket Notation 
console.log(user01['user Add'])//Work Good 
//dynamic key
console.log(user01[Data])
/*Nested Object And Advanced Trainings*/ 
let user02={
    userName:'user02',
    uerAge:22,
    skills:['S1','S2','S3',],
    available:false,
    addresses:{
        Addr1:'CPU',
        Addr2:'RAM'
    },
    // Methodes 
    UserM :function(){
        if(this.available){
            return 'OK'
        }else{
            return 'NON'
        }
    }

}
console.log(user02)
console.log(user02.skills.join('|'))
console.log(user02.UserM());
console.log(user02['addresses']['Addr1']);

