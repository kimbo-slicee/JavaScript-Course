/*
DOM[Class list]
---ClassList
---Length
---contains
---iltems(indsx)
---add
---remove
---toggle
 */ 
let mydiv=document.querySelector('.container');
console.log(typeof mydiv.classList)// object
console.log(mydiv.classList.contains('container'))//returen boolen Value
console.log(mydiv.classList.item(0));
console.log(mydiv.classList.add('add-one','add-tow'))
console.log(mydiv.classList.toggle('user'))// if the class existe removit if note add it 