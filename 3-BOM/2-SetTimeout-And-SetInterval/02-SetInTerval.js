/*
* BOM[Browser Object Model]
* - setInterval(function,Milliseconds,additional Params)'
* - clearInterval(Identifier);
* - steInterval execute a code block every deal of Time
*/
let num=0;
let interValCounter=setInterval(()=>{
    window.alert(`Hello From SetInterVale ${num++}!`)
},5000)
if(interValCounter>=5){
    clearInterval(interValCounter);
}