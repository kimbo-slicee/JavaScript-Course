/*
* DOM [Cloning ]
* - cloneNode(Deep) deep true or false
* Warning: cloneNode() may lead to duplicate element IDs in a document!
If the original node has an id attribute, and the clone will be placed in the same document, then you should modify the clone's ID to be unique.
Also, name attributes may need to be modified, depending on whether duplicate names are expected.
* */
const container=document.querySelector(".container");
const btn=document.querySelector("button");
let counter=0

console.log(btn)
console.log(container);
//
btn.addEventListener("click",()=>{
    counter++
    let containerNode=container.cloneNode(true );
    // if the that's true he will clone the id to and that's a problem
    // bcs we have just one id in the page
    containerNode.id=`${container.id}-${counter}`
    document.body.appendChild(containerNode);
})