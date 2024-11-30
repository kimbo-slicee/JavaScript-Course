/*
Function-Randome Argument Challenge [1]
===================================
----Create Function ShowDetails----
--Function Accept 3 Parameters [a,b,c]
--Data Types For info is 
--String => Name 
--4-Number => Age
--Boolean => Status 
-Argument Is Random
-Data Is Note Sorted Output depend On Data Types
--Use ternary Conditional Operator
https://www.youtube.com/watch?v=rLbr9bPrNcg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=63&ab_channel=ElzeroWebSchool
*/ 
//showDetails('Mohammed',24,true)//"Hello Mohammed,Your Is 24 You Are Available For Hier";
//showDetails(24,'Mohammed',true)//"Hello Mohammed,Your Is 24 You Are Available For Hier";
//showDetails(true,24,'Mohammed')//"Hello Mohammed,Your Is 24 You Are Available For Hier";
//showDetails(false,'Mohammed',24)//"Hello Mohammed,Your Is 24 You Are Not Available For Hier";

let R;
const showDetails = (Ar1,Ar2,Ar3)=>{
    // type of Ar1 chenging and Ar2 and Ar3 fixe
    // typeof Ar1==='string' && typeof Ar2==='number' && typeof Ar3==="boolean" 
    // ?console.log(`Hello ${Ar1},Your Is Age  ${Ar2} You ${Ar3?'Are':'Are Not'} Available For Hier`)
    // :typeof Ar1==='number' && typeof Ar2==='string' && typeof Ar3==='boolean' 
    // ?console.log(`Hello ${Ar2},Your Is Age  ${Ar1} You ${Ar3?'Are':'Are Not'} Available For Hier`)
    // :typeof Ar1==='boolean' &&  typeof Ar2==='number' && typeof Ar3==='string' 
    // ?console.log(`Hello ${Ar3},Your Is Age  ${Ar2} You ${Ar1?'Are':'Are Not'} Available For Hier`)
    // // type of Ar1 end Ar3 fixe but Ar2 chnage 
    // :typeof Ar1==='boolean' && typeof Ar2 ==='string' && typeof Ar3==='number'
    // ?console.log(`Hello ${Ar2},Your Is Age  ${Ar3} ,You ${Ar1?'Are':'Are Not'} Available For Hier`)
    // :typeof Ar1==='string' && typeof Ar2 ==='boolean' && typeof Ar3==='number'
    // ?console.log(`Hello ${Ar1},Your Is Age  ${Ar3} ,you ${Ar2?'Are':'Are Not'} Available For Hier`) 
    // :typeof Ar1==='number' && typeof Ar2 ==='boolean' && typeof Ar3==='string'
    // ?console.log(`Hello ${Ar3},Your Is Age  ${Ar1} ,you ${Ar2?'Are':'Are Not'} Available For Hier`) 
    // //type of Ar1 and Ar2 fixe but Ar3 change 
    // :console.log(`erorr 404`);
    let Ar=[Ar1,Ar2,Ar3]
    let types =['string','number','boolean'];
    for(let i = 0 ; i<Ar.length ;i++ ){
        if((Ar1||Ar2||Ar3)===undefined){
            return console.error('erorr 404')
//    }for(let n = 0 ; n<types.length ;n++ ){

//         if( typeof Ar[i]===types[n].startsWith('s')){
//             console.log( Ar[i])
//         // R=`Hello ${Ar[i]}` 
//     }else if(typeof Ar[i]===types[n].startsWith('n')){
//         R+=` Your Is Age  ${Ar[i]}` 
//     }else if(typeof Ar[i]===types[n].startsWith('b') ){
//         if(Ar[i]===true){
//              R+=` You are Available For Hier`;
//         }else{
//             R+=` You are Not Available For Hier`;
//         }
//     }else{
//         return 'not working 🐞'
//     }     

}
        }
        
  
    return R

    
}
 showDetails('user',24,true) // logicale erorre

/*
Function Arrow Challenges
==========================
//[1]One Statement In Function
//[2]Conert To Arrow Function 
//[3]Print The Output [Ar] 
*/ 
let name =function(){
    // Parameter 
    return '??'
};
console.log(name('user_1','user_2','user_3','user_4','user_5'));
// String [user_1],[user_2],[user_3],[user_4],[user_5]=>Done !
/*==============================================================*/
let N=[20,50,10,60]
let calc =(one,two,...nums)=>'???';
console.log(calc(10,'???','???'))//80 














