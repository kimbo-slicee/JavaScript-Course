/*
* DOM[Get/Set Elements Content And Attributes ]
* - innerHtml
* - Text Content
* - Change Attribute Directly
* - Change Attribute with methods
* - getAttribute
* - setAttribute
* */
const logo =document.querySelector(".logo");
console.log(logo);
logo.innerHTML=`<img src="" alt="logo image" style="border-radius: 50%" height="100px" width="100px">`;
const p=document.querySelector("p");
p.innerText+="hello world !"
document.images[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s";
p.id="text";
p.className="description";
p.style.background="#efefef"
// get and set Attributes
const btn=document.getElementsByTagName("button");
console.log(btn);
const style=` 
    font-family: inherit;
      border: none;
      outline: 1px dotted rgb(37, 37, 37);
      outline-offset: -4px;
      cursor: pointer;
      background: hsl(0deg 0% 75%);
      box-shadow:
      inset -1px -1px #292929,
      inset 1px 1px #fff,
      inset -2px -2px rgb(158, 158, 158),
      inset 2px 2px #ffffff;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 5px 30px;`
for (let i = 0; i < btn.length; i++) {
    btn[i].setAttribute("style",style);
}

// get attributes
