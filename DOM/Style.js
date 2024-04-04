/*
---DOM[Css]
--style
--cssText
--removeProperty(PropertyName)[inline,Stylesheet]
--setPorperty(propertyName,Value,priority)
*/ 

let Pargraph=document.querySelector('.Lorem');
let mybtn=document.getElementsByClassName('click-her')[0];
let myspan=document.getElementById('span');
// mybtn.onclick=()=>{
//     Pargraph.classList.toggle('active')

//     myspan.style.cssText='font-weight: bold; color:green';
//     // myspan.style.removeProperty('color')
//     myspan.style.setProperty('font-size','40px','important')


// };
document.styleSheets[0].rules[3].style.setProperty('background-color','red')