# What Are Arrays?
In computer science, an array is a data structure that stores a collection of elements, typically of the same data type, in a contiguous block of memory. Each element in an array can be accessed by its index, starting from 0 in most programming languages. Arrays are widely used because they allow efficient storage and retrieval of data.

In JavaScript, arrays are a special type of object that can store multiple values in a single variable. They are used to store lists of items, such as numbers or strings. JavaScript arrays are zero-indexed, meaning that the first element is at index 0, the second element is at index 1, and so on.

## Creating Arrays
There are several ways to create arrays in JavaScript. The most common way is to use an array literal, which is a list of values enclosed in square brackets `[]`. For example:
```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'cherry'];
let mixed = [1, 'apple', true];
```
Another way to create an array is to use the `Array` constructor with the `new` keyword. For example:
```javascript
let numbers = new Array(1, 2, 3, 4, 5);
let fruits = new Array('apple', 'banana', 'cherry');
let mixed = new Array(1, 'apple', true);
```
It is recommended to use array literals over the `Array` constructor, as it is more concise and easier to read.
