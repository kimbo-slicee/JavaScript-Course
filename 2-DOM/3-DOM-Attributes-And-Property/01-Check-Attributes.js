/*
* DOM[check Attributes ]
* - Change Attribute Directly
* - Change Attribute with methods
* - getAttribute
* - setAttribute
* - Elements.attributes
* - Elements.hasAttribute
* - Element.hasAttributes
* - Element.removeAttribute
* */

// Elements.attributes
const images=document.images;
for (let i = 0; i < images.length; i++) {
    if(images[i].hasAttribute("alt")){
        let alt=images[i].getAttribute("alt");
        if(alt===""){
            images[i].removeAttribute("alt");
        }
    }else{
        images[i].setAttribute("alt","JavaScript Course")
    }
    // check if the element has eny att
    if(images[i].hasAttributes()){
        console.log(`${images[i].alt} Has attributes`)
    }else {
        console.log(`${images[i].alt} Has No attributes`)
    }

}

