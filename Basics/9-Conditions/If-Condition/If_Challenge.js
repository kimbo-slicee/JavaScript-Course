/*
If Challenge 
*/ 
let a=10;
if(a<10){
    console.log(10);
}else if(a>=10 && a<=40){
    console.log("10 To 40")
}else if(a>40){
    console.log('>40')
}else{
    console.log('Unknown')
}
//solution 
a==10?console.log(10)
:a>=10 && a<=40
?console.log("10 To 40"):a>40
?console.log('>40')
:console.log('Unknown');


// Write with Ternary If Syntax 
let str ='Elzero Web school';
if((str.length*2).toString()==='34'){
    // console.log('Good');
} 
// W Position May change 
if(str.charAt(str.indexOf('W'))==="W"){
    console.log('Good');
}
if(str.length!=='string'){
    console.log('Good')

}
if(str!=='number'){
    console.log('Good')

}

if("????"==='ElzeroElzero'){
    console.log('Good')
}