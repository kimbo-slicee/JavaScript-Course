/**
 * Array is a collection of elements.
 * Create an array using square brackets [].
 * Or using Array constructor. new Array() [not recommended]
 * Access elements using index. Index starts from 0.
 * Nested arrays are Elements.
 * Change an element using index.
 * Check if an object is an array using Array.isArray(obj).
 */
// Array Literal
let numbers = [1, 2, 3, 4, 5];
let NewArray=new Array(1,2,3,4,5) || new Array(5); // [undefined, undefined, undefined, undefined, undefined]
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(NewArray); // [1, 2, 3, 4, 5]
// Access Elements
console.log(numbers[0]); // 1
let userList =['user_1', 'user_2','user_3','user_4'];
// print the First Element using index
console.log(`Hello ${userList[0]}`); // Hello user_1. Remember index starts from
// Access userList Characters using index
console.log(userList[0][5]); // 1
console.log(userList[1][5]); // 2
// Nested Arrays
let frontEnd = ['HTML', 'CSS', 'JavaScript', ['React', 'Vue', 'Angular']];
console.log(frontEnd[3])//['React', 'Vue', 'Angular']
console.log(frontEnd[3][2])//Angular
// Change Element
frontEnd[0] = 'HTML5';
frontEnd[3]='TypeScript';
console.log(frontEnd);//['HTML5', 'CSS', 'JavaScript', 'TypeScript']
// Check if Array
console.log(Array.isArray(frontEnd));//true
console.log(typeof frontEnd);//object

