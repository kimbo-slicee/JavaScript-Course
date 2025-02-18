/*
*  Array Destructuring
* "is a JavaScript expression that allows us to extract data from arrays  Objects and maps and set them
* into new distinct variables"
* */

 let a=null,b=null,c=null,d=null ,e="me the Goat";
 const fighters=["Islam Makhachev","Jon Jones","Alex Pereira","Ilia Topuria","Merab Dvalishvili","Belal Muhammad"];
 [a="P4P",b,c,d]=fighters;
 console.log(a)
 console.log(b)
 console.log(c)
 console.log(d)
 console.log(e)
 const cars=["Audi","BMV","Renault","Aston Martin"];
 let [nice,good,,veryGood]=cars;
 console.log(nice,good,veryGood);// skip the Renault cars
const skills=[["HTML",["HTML 1.0","HTML 2.0","HTML 3.0","HTML 3.2"]],"CSS","JAVASCRIPT","TYPESCRIPT"];
console.log(skills[0][1][3])//HTML 3.2
// let's get HTML 3.2 using Destructuring
let [[x,[one,two,,four]],z,,w]=skills
console.log(four)
// Example  Swapping Variables
let book ="Video";
let video="Book";
// create variable swap to Save Value In Stash

// let swap;
// swap=book;
// book=video;
// video=swap
// console.log(book,video);
// swapping using Destructuring

[book,video]=[video,book];


