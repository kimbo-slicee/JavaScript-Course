/*
* 1. Dot Notation vs Bracket Notation
* 2. when we use Dot Notation or Bracket Notation
* 3. Dynamic properties
* */

// Dot Notation
const user={
    name:"me",
    country:"Pennsylvania",
    skills: ["eat","sleep","Go Gym","Video Games"],
    introduceUser:function(){
        return `Hello I'm ${user.name} From ${user.country} I Love To ${user.skills.join(" ")}`
        // In this Example I used Dot Notation
    }
}
console.log(user.introduceUser())
//Bracket Notation
const cat={
    name:"Meow",
    class:"Mammal",
    order:"Carnivora",
    family:"feline",
    "cat color":"orange Cat",
    meow:()=>{
        console.log("Meow! Meow! 😹")
    }
}
console.log(cat["name"])//Meow
console.log(cat["class"])//Mammal
console.log(cat["order"])//Carnivora
// console.log(cat.cat color)//undefined
console.log(cat["cat color"])// range Cat
/*Access Dynamic Value Of An Object*/
let catName="name";
console.log(cat.catName)//in case of dynamic proprieties dot notation is the worst choice to access an object so
// let's try bracket-notation
console.log(cat[catName])//Meow it's work wow!







