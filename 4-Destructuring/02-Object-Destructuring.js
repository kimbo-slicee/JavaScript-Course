/*
* Object Destructuring
* Naming the Variable
* add new Property
* Nested Object
* Destructing The nest Object Only
* */
const car={
    name:"BMW M5",
    color:"darkRed",
    year:2018,
    price: 2e6,
    country:"Germany"
}
// Access Without using Destructuring
console.log(car.name);
// Access Using Destructuring
let {name,color,year,model="Sport"}=car;
console.log(name,color,year);
const book ={
    name:"Art of War",
    Author: "Sun Tzu",
    language:"tClassical Chinese",
    subject:"Military art",
    genre:"Military strategy",
    quotes:["The art of war is of vital importance to the State. It is a matter of life and death, a road either to" +
    " safety or to ruin.","All warfare is based on deception.","It is only one who is thoroughly acquainted with the" +
    " evils of war that can thoroughly understand the profitable way of carrying it on"],
    sources:{
        links:[
            "The Art of War at Standard Ebooks",
            "The Art of War Chinese-English bilingual edition, Chinese Text Project",
            "The Art of War at Project Gutenberg translated by Lionel Giles (1910)",
            "The Art of War at Project Gutenberg translated (with Chinese text) by"
        ]
    }
}
// let's destruct this Object
let {quotes:[a,b ,c],sources:{links:[d,e,,,]}}=book;
console.log(a);
console.log(e)