/*
---2_DOM[Cloning]
---CloneNode(Deep)
*/ 
let Pargraph=document.getElementById('Para');
console.log(Pargraph.cloneNode(true))// true[get all element in side the pargraph] || false[get just the paraggraph end his Attributs ]