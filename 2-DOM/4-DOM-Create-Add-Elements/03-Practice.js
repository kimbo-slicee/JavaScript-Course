for (let i=0 ; i<=100; i++){
    const div=document.createElement("div");
    const heading=document.createElement("h3");
    const p=document.createElement("p")
    const headingTextContent=document.createTextNode("Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Fully Unlocked ");
    const comment =document.createComment("Product");
    div.prepend(comment);
    div.className="product"
    //  add text note to the heading
    heading.append(headingTextContent);
    // add heading to the div
    div.appendChild(heading);
    // create text to the p element
    p.textContent=`This product is inspected, tested, and refurbished, as necessary to be fully functional according to Amazon Renewed standards.`
    // add p to div element
    div.appendChild(p);
    document.body.append(div)
}