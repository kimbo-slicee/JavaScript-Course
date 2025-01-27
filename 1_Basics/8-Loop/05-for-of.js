/**
 * The for...of loop iterates over the values of an iterable object, such as arrays, strings, maps, sets, or
 * other iterable objects
 * Syntax:
 * for (value of iterable) {
 *     // Code to execute
 * }
 * */
    const person={
        name:"person",
        age:20,
        number:"+1 322 453 22",
        address:{
            lineOne:'address One ',
            lineTwo:'Address Two'
        },
        skills: ["HTML","CSS","JAVASCRIPT","TYPESCRIPT"]
    }
    for (let person1 of person) {
        console.log(person1)
    }
//
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
    console.log(fruit);
}
// Output:
// apple
// banana
// mango
