const admins=["Ahmed","Osama","Sayed","Stop","Samera"];
const employees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"]
const div=document.createElement('div');
const div_2 =document.createElement("div");
let counter=0
for (let i = 0; i <admins.length ; i++) {
    if (admins[i]==="Stop") break;
    counter++
    div.innerHTML+=`<hr/>
    <p>The Admin For Team ${i+1} is ${admins[i]}</p>
    <h1>Team Members</h1>`
for(let j=0 ; j<employees.length ; j++){
    if(employees[j].startsWith(admins[i][0])){
     div.innerHTML+=`<p>${employees[j]}</p>`
    }
}
}
div_2.innerText=`We Have ${counter} admins`;
document.body.appendChild(div_2);
document.body.appendChild(div);
