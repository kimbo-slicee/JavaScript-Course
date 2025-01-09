/*
The for...in loop iterates over the enumerable properties (keys) of an object or array.
Syntax:
for (key in object) {
    // Code to execute
}
*/
// Use Case: Iterating Over Object Properties
const user = {
    name: "john smith",
    profession: "Actor"
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
// Output:
// name: john smith
// profession: Actor
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (const fruitsKey in fruits) {
    console.log(`Key:${fruitsKey} value: ${fruits[fruitsKey]}`);
}
// OutPut
// Key:0 value: Apple
// Key:1 value: Banana
// Key:2 value: Mango
// Key:3 value: Orange

/*
* Important Notes:
* The for...in loop iterates over keys (property names), not values.
* For arrays, it iterates over the indices (not the elements).
* Avoid using for...in for arrays unless you specifically need indices, as it can include unwanted inherited properties.
* */

