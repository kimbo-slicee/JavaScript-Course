/*
* Call Stack || Stack Trace
* - JavaScript Engine Uses A Call Stack To Manage Execution Context
* - Mechanism To Make The Interpreter track Your Calls
* - When Function Called It Added To The Stack
* - When Function Executed it Removed From the Stack
* - After Function Is Finished Executing the Interpreter Continue From the last point
* - Work Using LIFO Principles Last In First OUt
* - Code Execution IS Synchronous.
* - Call Stack Detect Web API Methods and Leave It To The Browser To Handel IT
* - Web API
* --- Methode Available From the Environment => (Browser or Nodejs)
* */

console.log("Start")
setTimeout(()=>console.log("pending"),0);
console.log("End");
// Start
// End
// pending
// the main question why ?? pending is last even timeout is 0 search about event loop and call stack and wep API to
// understand how Js Work's
// Example
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();

// call stack Example
/*
Call Stack (Top to Bottom)
LIFO : Last In First Out
---------------------
| third()         |
| second()        |
| first()         |
---------------------
*/

