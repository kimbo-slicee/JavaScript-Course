/*
* DOM [Create Elements]
* - createElement
* - createComments
* - createTextNode
* - createAttribute
* - appendChild
* */
// create programming language Card
let div=document.createElement("div");
let paragraph=document.createElement("p");
let text=document.createTextNode("JavaScript Programming language ");
let customAtt=document.createAttribute("javaScript");
// set att without value ;
div.setAttributeNode(customAtt);
div.className="card";
div.setAttribute("javaScript","true");
// append text
paragraph.append(text);
// add the p inside the div
// create Comment
let comment=document.createComment("This is dev");
document.body.append(comment);
div.appendChild(paragraph);
console.log(div);
document.body.appendChild(div)
