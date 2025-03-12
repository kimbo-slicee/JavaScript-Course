/*
* The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in
* the try block is executed first, and if it throws an exception, the code in the catch block will be executed.
* The code in the finally block will always be executed before control flow exits the entire construct.
*/
try {// Try block: The try block contains the code that might throw an error.
    console.log("Before error");
    let result = 10 / 0; // No error here (JavaScript allows division by zero)
    let x = y + 1; // ReferenceError: y is not defined
    console.log("After error"); // This will NOT run
    /*
    * The moment an error occurs (y is not defined), execution stops in the try block.
    * JavaScript looks for a catch block to handle the error.
    * */

}catch (e) {// catch Block : The catch block handles any error that occurs inside the try block.
    console.log("An error occurred:", e.message);
    console.log(e)
    // The error is caught and does not crash the program.
    // catch receives an error object, which has details about what went wrong.
}finally {// finally Block The finally block always executes, whether there is an error or not.
    console.log("This runs no matter what!");
}
// Real world Example
function readFile() {
    try {
        console.log("Opening file...");
        throw new Error("File not found!");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Closing file...");
    }
}

readFile();
// Real word Example with API
async function fetchData() {
    try {
        let response = await fetch("https://wrong-url.com");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Caught error:", error.message);
    }
}

fetchData();



// // Example
let counter = 0;

const interval = setInterval(() => {
    try {
        if (counter < 5) {
            throw new Error(`counter is more than ${counter}`);
        }
        console.log(counter);
        clearInterval(interval); // Stop interval after successful execution
    } catch (e) {
        console.log("Caught error:", e.message);
    } finally {
        console.log(`counter is ${counter}`);
        counter++;
    }
}, 2000);
