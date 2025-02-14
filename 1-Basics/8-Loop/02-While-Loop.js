/*
* loops through a block of code while a specified condition is true
* syntax
* while (condition) {
    // Code to be executed
}
*
*/
// Example
let count = 0;
while (count < 5) {
    console.log(`Count is ${count}`);
    count++;
}
// Example 2
let number = 0;
while (number < 1 || number > 5) {
    number = parseInt(prompt("Enter a number between 1 and 5:"));
}
console.log(`You entered: ${number}`);


