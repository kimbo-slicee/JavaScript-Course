/*
* In this File 01-Objects-Intro we Will Talk About
* 1. Intro and what is an Object
* 2. create javaScript Object with {} and Object Constructor
* 3. Testing window Object
* 4. Accessing Object
* */
/**
 *  1. The Object type represents one of JavaScript's data types.
 *  It is used to store various keyed collections and more complex entities.
 *  Objects can be created using the Object() constructor or the object initializer / literal syntax ({}).
 *  Read The Object Readme file for more info
 *  2.let's Create our First Object using literal syntax
 */
// creating phase
let user={
    // properties
    name:"Mr.Krabs",
    companyName:"Krusty Krab restaurant",
    // methodes
    whatTheUserLikeToDo:()=>{
        console.log("Hello, I like money")
    }
}
// Accessing phase properties
console.log(user.name)
console.log(user.companyName);
// accessing methods that's reflect the behavior of that object
user.whatTheUserLikeToDo();
/*
*  ech object hase some properties and the methods
*  the properties it's like the skein color if we take the humane body as an object and tall hear color but the
*  methodes is what tha person do like talking and eating Ex...
* */
// let's create object withe Object Construct
let car = new Object({
    // Properties
    name: "BMW M3 GTR",
    color: "Black",
    engineType: "V8",
    power: "88hp",
    modes: ["normal", "sport", "super sport", "race"],

    // Methods
    start: (keys = false) => {
        console.log(keys ? "Start engine" : "Insert the keys first");
    },

    horn: () => {
        console.log("🚨 Move on my Way")
    }
})
// access properties properties
console.log(`Car Name : ${car.name}`)
console.log(`Car Color : ${car.color}`)
console.log(`Car engine Type : ${car.engineType}`)
console.table(`Car Modes : ${car.modes}`)
// access car methodes
car.start(true);
car.horn();

