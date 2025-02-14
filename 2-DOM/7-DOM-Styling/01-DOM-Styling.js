/*
* - style
* - cssText
* - removeProperty(propertyName) [Inline , stylesheet]
* - setProperty(propertyName, Value, property)
* */
const container=document.querySelector(".container");
const card=document.querySelector(".card");
const heading =document.querySelector("h1");
const img=document.images[0];
const spans=document.querySelectorAll("span");
const header=document.querySelectorAll(".header");
header.forEach((ele)=>{
        console.log(ele.classList)
})
// add inline style using style object;
heading.style.fontFamily="cursive";
heading.style.fontSize="1.4rem";
spans.forEach((ele)=>{ele.style.cssText=``});


// let's write some logic to make our card dynamic
// for me I want to change the card image every 2s;
// Set an initial counter
const images = [
    "01.png",
    "02.png",
    "03.png",
    // "04.png",
    // "05.png",
    // "06.png",
];

// let counter = 0;
//
// // Function to change the image
// function updateImage() {
//     const basePath = img.src.substring(0, img.src.lastIndexOf("/") + 1); // Extract the base path
//     img.src = basePath + images[counter]; // Update the src with the new image
//     counter = (counter + 1) % images.length; // Increment and reset counter cyclically
// }
//
// // Call updateImage every 5 seconds
// setInterval(updateImage, 5000);
//
// // Optionally, update the image immediately on load
// updateImage();
//
//
//
//
