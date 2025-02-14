/*
* DOM [Traversing]
* - nextSibling
* - previousSibling
* - nextElementSibling
* - parentElement
* */

// let create a function that's helight our elements when we click in our radio
const radios=document.querySelectorAll("input[type='radio']");
const ul=document.querySelectorAll("ul");
const li =document.querySelectorAll("ul li");

// getParents Function
const getParents=()=>{

    ul.forEach((ele)=>{
        console.log(ele.children[0].firstElementChild,ele.children[1]?.firstElementChild)
    })

    // ele.firstElementChild.parentElement.style.color="#8216a0"

}

radios.forEach((radio)=>{
    radio.addEventListener("click",()=>{
        if(radio.value==="Parents"){
            getParents();
        }
    })
})

