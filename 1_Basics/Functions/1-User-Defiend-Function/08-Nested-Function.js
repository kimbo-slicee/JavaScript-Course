/**
 * In JavaScript, Functions within another function are called “Nested function.” These nested functions have access to
 * the variables and parameters of the outer (enclosing) function, creating a scope hierarchy. A function can have one
 * or more inner functions.
 * Syntax:
 * // Outer function
 * function outerFunction() {
 *     // Nested function
 *     function nestedFunction() {
 *         // Function logic here
 *     }
 *     // Call the nested function
 *     nestedFunction();
 *     // Rest of the outer function logic
 * }
 * // Call the outer function
 * outerFunction();
 * */

// Example One
function message (fullName,age){
let message=`hello`;
function createMessage(){
return message+=` ${fullName} ${age}`
}
createMessage();
return message
}

console.log(message("me",100));
// Example Two
