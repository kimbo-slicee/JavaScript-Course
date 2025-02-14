/*
* before [Element || String]
* after  [Element || String]
* append [Element || String]
* prepend[Element || String]
* remove
* */
const container=document.querySelector(".container");
const h1=document.createElement("h1");
const textNode=document.createTextNode("Main Title");
const p =document.querySelector("p");
const span=document.createElement("span");
span.textContent="span"
// append
h1.append(textNode);
// before
container.before(h1)//node or text;
// after
p.after("Copyright ❌ hello world ");
// prepend
container.prepend(span)
// remove
setTimeout(()=>{
span.remove()
},2000)
