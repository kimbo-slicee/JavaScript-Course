/*
* DOM Selectors
* ----Find Element By ID
* -----Find Element By Tag Name
* -------Find Element By Class Name
* ---------Find Element By Css Selector
* -----------Find Element By Collection
* */

// getElementById Methode we can access the element use his Id
const homeSection=document.getElementById("Home");
console.log(homeSection)
// By Tag Name <form></form>
const forms=document.getElementsByTagName("form");
console.log(forms)//form#Form-1.First.Form;
console.log(forms[0])
// get Elements By Class Name
const containers=document.getElementsByClassName("container");
console.log(containers)
//querySelector
const firstContainer=document.querySelector(".container")//
console.log(firstContainer);// div.container
// querySelectorAll
const allContainers=document.querySelectorAll(".container");
console.log(allContainers);//[div.container, div.container.data-form, div.container.links]
