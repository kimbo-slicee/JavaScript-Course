/*
* Note : Try to practice Functions withe all the last sections
* Function
* Parameters
* params Default value
* Loop
* Rest
* condition
* */
/*
* Let's try show an product (T-shirt, for Example) Information in our web Site
* we Have the name of product color price category sizes discount delivery
* */
function showInfo(name,colors,price,discount=0,category,delivery,...sizes){

    let calcDiscout=price*(discount/100)
    document.write("<div>")
    document.write(`
    <section>
    <h1>Product Details</h1>
    <p>
    product name :${name} </br>
    product price :${price}$ </br>
    discount amount :${discount}% </br>
    product Category :${category} </br>
    ${delivery?"Free Delivery Available 🚚":"No Delivery Available for the moment 🚫"}</br>
    T-shirt Sizes Avilbale : ${sizes.join(" ")}</br>
    </p>
    </section>
    `)
    document.write("</div>")
}
showInfo("classic T-Shirt","White",20,0,"men's wear",true,["XS","S","M","L","XL","XXL"]);
