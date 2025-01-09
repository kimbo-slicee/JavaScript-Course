 /*
 * Purpose: Similar to the while loop, but it guarantees that the code block executes at least once, regardless of the condition.Structure: The condition is checked after the code block is executed.
 * Syntax
 * do {
    // Code to be executed
} while (condition);
 * */
 let name='';
 let age;
 do{
     name=prompt("Please Enter your name");
     age=parseInt(prompt("Please Enter Your Age"));
 }while (!name && !age)
 alert(`Hello M.r ${name} your Age is ${age}`)
 // Real Example
 let userInput;
 do {
     userInput = prompt("Enter a number greater than 10:");
 } while (userInput <= 10);

 console.log(`You entered: ${userInput}`);