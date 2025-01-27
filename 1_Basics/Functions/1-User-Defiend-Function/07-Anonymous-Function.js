/**
  * What are Anonymous Functions?
 * An anonymous function is simply a function that does not have a name. Unlike named functions, which are declared
 * with a name for easy reference, anonymous functions are usually created for specific tasks and are often assigned
 * to variables or used as arguments for other functions.
 * function() {
 *     // Function Body
 *  }
 */
// Example
const calc=function (num_1,num_2) {
    return num_1 + num_2;
}
calc(10,20);
// events
document.getElementById("show").onclick=function () {
    console.log("Hello World !")
}
// async
setTimeout(function (){
console.log("hello World !")
},2000)
