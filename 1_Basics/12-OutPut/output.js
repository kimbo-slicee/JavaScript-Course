/**
 Output To Screen
- window.alert()
- document.writ()
- console.log()
 */
window.alert("Hello World !");
window.confirm("are you sure u want learn javaScript");
window.document.writeln("<h1>Hello Js Community</h1>")
window.document.write("<h3>Happy halloween 🎃 </h3>")
console.log(window);// The Window interface represents a window containing a DOM document; the document property
// points to the DOM document loaded in that window.for more Info about Window check BOM file
window.prompt("Enter your name:")
window.prompt("Enter your Email :")
const userInput = prompt("Enter your name:");//
console.log(userInput);
const name = prompt("What is your name? 🤔");
if (name) {
    console.log(`Hello, ${name}! 👋`);
} else {
    console.log("You didn't enter anything. 😅");
}
/**
 * 📝 Notes:
 * These methods are blocking, meaning they pause the script execution until the user interacts with the dialog box.
 * Avoid overusing these methods in modern web applications, as they interrupt the user experience. For better user
 * input handling, consider using HTML forms or custom modals.
 * With these tools, you can gather user input and create simple interactive features! 🌟
 *
 *
 * */
// Example: Combining Output Methods

// Console output
console.log("Logging to the console");

// Window output
alert("Alert example");
const name = prompt("What is your name?");
console.log("Your name is: " + name);

// Document output
document.write("<h1>Hello, " + name + "!</h1>");
document.getElementById("output").innerText = "Welcome, " + name;

// DOM Manipulation
const para = document.createElement("p");
para.textContent = "This is dynamically added!";
document.body.appendChild(para);
