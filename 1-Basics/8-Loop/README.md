<div align="center">
<img src="../../images/javascript-loops.jpg" style="height:500px" alt="loops in js">
</div>

## Loops and iteration
Loops offer a quick and easy way to do something repeatedly. 
This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
## 1. Introduction 
**What is a loop?**
In computer programming, a loop is a sequence of instructions that is continually repeated until a certain condition is reached. Typically, a certain process is done, such as getting an item of data and changing it, and then some condition is checked such as whether a counter has reached a prescribed number. If it hasn't, the next instruction in the sequence is an instruction to return to the first instruction in the sequence and repeat the sequence. If the condition has been reached, the next instruction "falls through" to the next sequential instruction or branches outside the loop. A loop is a fundamental programming idea that is commonly used in writing programs.
>[!IMPORTANT] There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (**Note that it's possible that number could be zero!**)
The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

The statements for loops provided in JavaScript are:
## 2. Types of Loops in JavaScript
### 2.1. For Loop
A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.
>[!TIP]The for loop is used when you know the number of iterations beforehand.

Syntax:
```javascript
for (initialization; condition; increment/decrement) {
  // Code to execute
}
```
Example:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
### 2.2. While Loop
The while loop is used when the number of iterations depends on a condition.
Syntax:
```javascript
while (condition) {
  // Code to execute
}
```
Example:
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
### 2.3. Do...While Loop
The do...while loop ensures the block of code is executed at least once before the condition is checked.
Syntax:
```javascript
do {
  // Code to execute
} while (condition);
```
Example:
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
### 2.4. For...In Loop
The for...in loop is used to iterate over the properties of an object.
Syntax:
```javascript
for (key in object) {
  // Code to execute
}
```
Example:
```javascript
const person = { name: 'John', age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```
### 2.5. For...Of Loop
The for...of loop is used to iterate over iterable objects like arrays, strings, or sets.
Syntax:
```javascript
for (element of iterable) {
  // Code to execute
}
```
Example:
```javascript
const fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit);
}
```
## 3. Loop Control Statements
**3.1.break**
The break statement is used to exit a loop prematurely.
Example:
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```
**3.2.continue**
The continue statement skips the current iteration and moves to the next one.
Example:
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```
## 4. Nested Loops
Loops can be nested to handle more complex iterations, such as processing a two-dimensional array.
Example:
```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let row of matrix) {
  for (let value of row) {
    console.log(value);
  }
}
```
>[! !CAUTION] Nested loops can significantly increase the time complexity of an algorithm. For example, a nested loop iterating over a 2D array has a time complexity of O(n²). Always consider whether you can optimize your code to reduce the number of iterations.
## 5. Special Loop Topics
### 5.1. Infinite Loops
An infinite loop occurs when the loop’s condition is never met, causing it to run forever.
Example:
```javascript
while (true) {
  console.log('This will run forever!');
}
```
>[!NOTE] Avoid these by ensuring your conditions will eventually become false.
### 5.2. Labels in Loops
Labels are used to break or continue a specific loop in nested loops.
Example:
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break outerLoop;
    console.log(`i: ${i}, j: ${j}`);
  }
}
```
### 5.3. Looping with Arrays
You can use various loops to iterate over arrays. For example:
Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
```
### 5.4. Looping with Objects
To iterate over objects, use for...in or methods like Object.keys:
Example:
```javascript
const obj = { a: 1, b: 2, c: 3 };
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```
## 6. Performance Considerations

1. Use appropriate loops for the task at hand.

2. Avoid unnecessary nested loops to reduce time complexity.

3. Prefer modern methods like forEach, map, or filter when working with arrays for cleaner and more readable code.
## 7. Examples and Use Cases

1. Try solving these examples:

2. Print all even numbers from 1 to 20.

3. Create a multiplication table using nested loops.

4. Iterate over an array of objects and print their properties.
## 8. Additional Resources
[! MDN Web Docs: Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

>[!NOTE] Feel free to explore and practice to strengthen your understanding of JavaScript loops!