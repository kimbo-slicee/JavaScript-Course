/**
--DOM---------------------------------
---What Is DOM ?----------------------
----DOM Selectors---------------------
-----Find Element By ID---------------
------Find Eelement By Tag Name-------
-------Find element By css Selectors--
--------Find element By Collection---- 
----------Title-----------------------
------------Body----------------------
-------------Image--------------------
---------------Forms------------------
-----------------Links----------------
*/  
let myIdEelement = document.getElementById('my-div');
console.log(myIdEelement);
let mytagElement=document.getElementsByTagName('p');
console.log(mytagElement[0])
console.log(mytagElement[1])
let ClassName=document.getElementsByClassName('my-span');
console.log(ClassName);
let qeuryslector=document.querySelector('.my-span')
console.log(document.title)
console.log(document.body)
/*
---------DOM[Get/Set Elements Content And Attributes]--------
----innerHTML
----textContent
-----Change Attributes Directly
-----Change Attributes With Methods
-----getAttribute
-----setAttribute

Search
---innerText
*/ 
let myElement=document.querySelector('.js');
// all The HTML
// myElement.innerHTML=`<h1>innerHTML</h1>`;
// just Text
console.log(myElement.textContent);
console.log(document.images)
document.links[0].href='#';
let mydiv=document.querySelector('img').setAttribute('className','teste')
/*
--------DOM[Check Attributes]----------
----------Element.Attributes-----------
----------Element.hasAttribute('NameOfAttr')---------
----------Element.hasAttributes---------returne boolean 
----------Element.removeAttribute------

*/ 
let Attribute=document.getElementById('btn');
let testeAttr= Attribute.hasAttribute('href')?Attribute.getAttribute('href'):Attribute.setAttribute('href','#');
console.log(testeAttr)
setTimeout(()=>{
    document.links[0].removeAttribute('href');
},2000)
console.log(document.forms[0][0].attributes);
/*
--------------Create And Append Elements-----------------
--------------------CreateElement------------------------
--------------------createComment------------------------
--------------------createTexteNode----------------------
--------------------createAttribute----------------------
----------------------AppendChild------------------------
*/
// Create Element Div
let div_1=document.createElement('div');
//Create Cooment 
let comment01=document.createComment('Hello I\'m div ');
// Add className 
div_1.className='container';
// create Attr
DivAttr=document.createAttribute('Data-costum');
div_1.setAttributeNode(DivAttr);//set Attr but vide 
// create texte 
let DivText=document.createTextNode(`hello world!`)
// Append element to Div 
div_1.appendChild(DivText);
//append elemt to body 
document.body.appendChild(div_1)
div_1.appendChild(comment01);
console.log(div_1)
document.write(`<hr>`)
/*
DOM[Practice Product With Heading And Paragraph]
*/



// for(let i=0 ; i<100 ; i++){
let div_2 =document.createElement('div');
let comment02=document.createComment('commit -m"test"');
div_2.setAttribute('class','product');
let title=document.createElement('h1');
texteTitel=document.createTextNode('Porducts');
let disc=document.createElement('p');
let discText=document.createTextNode('Java script products produit ');
disc.appendChild(discText);
title.appendChild(texteTitel);
div_2.appendChild(title);
div_2.appendChild(disc);
let teste =document.body.appendChild(div_2)
// }
document.write(`<hr>`);
/*
------------DOM[Deal With Childrens]------
--Children--------------------------------
---ChildNodes-----------------------------
----firstChild----------------------------
-----lastChild----------------------------
------firstElementChild-------------------
-------lastElementChild-------------------
*/ 
let div3=document.getElementsByClassName('Childrens')[0];
console.log(div3.children[0]);
console.log(div3.childNodes);
console.log(div3.firstChild);
console.log(div3.firstElementChild);
/*
--------DOM[Deal With Elements]----------
----before[Element|| string ]
----After[Element || String ]
----Append[Element || String] // in the end of element 
----prepend[Elemnet || String] // prepend in the the firts 
*/ 
let element=document.getElementsByClassName('style')[0];
let text_1=document.createTextNode('befor Div ')
let text_2=document.createTextNode('After Div ')

// element.before(text_1);
// element.before(text_2);
// element.append(document.createElement('p'))




















