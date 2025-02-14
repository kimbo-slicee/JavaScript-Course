/*
* challenge Link https://www.youtube.com/watch?v=mGhGjzIKEqk&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=101
*/
// create the header
const header=document.createElement("header");
const nav=document.createElement("nav");
const ul =document.createElement("ul");
const a=document.querySelector("li a ");
const listItems=["Home","About","Services","Contact"];
document.body.style.cssText=`
    background-color: #f3f3f1;
    margin: 0;
    padding: 0;
    overflow:hidden;
`
header.className="web-siteHeader";
header.style.cssText=` 
    background:#ffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    padding:5px 10px;
   `
nav.style.cssText="width:20%; margin:0px 2%;";
ul.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`
document.addEventListener("DOMContentLoaded",()=>{
    // Body style
    headerFunc();// header
    mainFunc()
    // footerFunc();//
})
// header function
function headerFunc(){
// add className
    logoMaker()// create logo section function
    navBar()// create nav Bar
   document.body.appendChild(header);

}
// create navBar
function navBar(){
    listItems.forEach((ele)=>ul.innerHTML+=`<li><a class="item" style="color: #949191;cursor: pointer">${ele}</a></li>`);

    nav.appendChild(ul);
    header.appendChild(nav)

}

function logoMaker(){
    const logoContainer=document.createElement("div");
    const brandNam=document.createElement("a");
    brandNam.innerText="Logo";
    logoContainer.className="logo";
    brandNam.style.cssText=`
        font-family: Inter,"sans-serif";
        font-weight: bold;
        font-size: 2rem;
        color: #16C47F;
    `
    logoContainer.appendChild(brandNam);
    header.appendChild(logoContainer);
}
// creat Body section
function mainFunc(){
   const  div=document.createElement("div");
   div.style.cssText=`
   
   `
    for (let i = 0; i <=15 ; i++) {
        div.innerHTML+=`<span>${i}</span><p>Product</p>`

    }
}
