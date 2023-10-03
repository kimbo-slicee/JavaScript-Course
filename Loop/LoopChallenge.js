/*
Loop Challenge 

*/ 
let myAdmin=["Ahmed","Osama","Sayed","Stop","Samera"];
let myEmployess=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
let N=myAdmin.indexOf("Stop")
document.write(`<div> We Have ${N} Admins</div>`)
let count=0
MainLoop:for(let i=0; i<myAdmin.length ;i++){
    if(myAdmin[i]=='Stop')break;
    document.write(`<p>The Admin For Team ${i} is ${myAdmin[i]}</p>`)
    document.write(`<h3>Team Members:</h3>`)
    forkLoop:for(let x=0 ; x<myEmployess.length ; x++ ){
        if(myEmployess[x][0]===myAdmin[i][0]){
            // console.log(myEmployess[x])
            document.write(`<p> - ${count+=1} ${myEmployess[x]}</p>`)  
        }
    }
    count=0
    document.write(`<hr>`)
}

  
