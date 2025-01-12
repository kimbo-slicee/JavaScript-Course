/*
* Functions
* What is Function
* User Defined vs Build In
* Example From Real Life
* Parameters and arguments
* practical Example
* Syntax
* function nameOfTheFunction(paramOne,paramTwo){
*       // Code Block
*  }
* */
// basic Example
function hello (){
    console.log("Hello World!")
}
// hello()// invoke the function
// Example Function withe params
function sayHelloBasedOnTime(time, name) {
    // Extract the hour from the time string
    let hour = parseInt(time.split(':')[0]);

    // Check if it's AM or PM
    if (time.toLowerCase().includes("pm") && hour < 12) {
        hour += 12; // Convert PM to 24-hour format
    } else if (time.toLowerCase().includes("am") && hour === 12) {
        hour = 0; // Handle 12:00am as midnight (0 hours)
    }

    // Determine the greeting based on the hour
    if (hour >= 5 && hour < 12) {
        console.log(`Hello ${name}, Good Morning 🕐`);
    } else if (hour >= 12 && hour < 17) {
        console.log(`Hello ${name}, Good Afternoon 🕟`);
    } else if (hour >= 17 && hour < 21) {
        console.log(`Hello ${name}, Good Evening 🕠`);
    } else {
        console.log(`Hello ${name}, Good Night 🕤`);
    }
}

// Example usage
sayHelloBasedOnTime("05:00am", "X-MAN");


