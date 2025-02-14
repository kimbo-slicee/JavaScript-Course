/**
* console Methode
* --log
* --error
* --table
* --web api
* --Styling console
* --Directive %c
* */
console.log("Hello World ! ")// the console one the best tools in JS For debugging
console.error("DON USE ENY TYPE OF SCRIPTS IN THIS CONSOLE ")// show the error and error message
console.info("THIS CONSOLE INFO");
let users=["SpongeBob SquarePants", "Simpsons","Tom ","Jerry"]
console.table(users)
/**
   * The console.time() method is a great tool for measuring the time it takes for a specific block of code to
   * execute. It works by starting a timer with a label and stopping it with the same label using console.timeEnd().
   * label: A string used to identify the timer. It's important that the label matches when using console.timeEnd().
 */
console.time("Loop Timer"); // Start the timer

// Code to measure
for (let i = 0; i < 1000000; i++) {
    // Simulating a time-consuming loop
}

console.timeEnd("Loop Timer"); // End the timer
//Output in Console: Loop Timer=4.043ms
/**
 * 🔥 Tips:
 * Use unique labels for each timer to avoid conflicts.
 * console.time() and console.timeEnd() are excellent for debugging performance issues.
 * */
console.log("DON USE ENY TYPE OF %cSCRIPTS IN THIS CONSOLE","color:red;")//we want styling this word
// that's why we
// need c directive
