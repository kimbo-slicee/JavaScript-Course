let userNameValid=false ;
let usserEmailValid=false;
let userPhoneValide=false;
let userName=document.querySelector('#Name');
let userEmail=document.querySelector('#Email');
let userPhone=document.querySelector('#Phone');
let btn=document.getElementById('btn');
document.forms[0].onsubmit=(e)=>{
    if(userName.value!=="" || userName.value.length<=10){
        userNameValid=true
    }if(userEmail.value.includes('@')){
        usserEmailValid===true;

    }
    if(typeof +userPhone.value==='number' && userPhone.value.length>=10){
        userPhoneValide===true


    }
if(userNameValid===false || usserEmailValid===false || userPhoneValide===false){
    e.preventDefault();
    
    }
    
} 





