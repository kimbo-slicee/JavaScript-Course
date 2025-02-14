/*
* DOM [Deal with  Children ]
* -  children
* -  childNodes
* -  firstChild
* -  lastChild
* -  firstElementChild
* -  lastElementChild
* */
const divElement=document.querySelector("div");
console.log(divElement.children)// return Just the children Elements but the comments and text NO
console.log(divElement.childNodes)// return all nodes [p, text, comments, all... ] considered space between Elements as
// text
console.log(divElement.firstChild)// return the First child where ever the type it's
console.log(divElement.lastChild)// the same as firstChild but return the last one
console.log(divElement.firstElementChild)// return the first element such as p tag or span or all Html element but
// text and comment also spaces not included
console.log(divElement.lastElementChild)// the same as firstElementChild but last Element
