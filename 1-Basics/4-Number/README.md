<div align="center">
<img src="../../images/JavaScript-Number-Methods.avif">
</div>

### Number Data Type in JS 
In JavaScript, numbers are one of the fundamental data types. They can be integers, floating-point numbers, or 
special numeric values like Infinity and NaN (Not-a-Number). JavaScript numbers are always stored as 64-bit 
floating-point values, following the IEEE 754 standard.[IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)

### JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc. JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

### What is Syntactic Sugar in JavaScript
Syntactic sugar is a term for a more concise syntax that provides the same functionality for something that already exists. It aims to help make code shorter, therefore, easier to write. No new functionality is introduced.
It's called syntactic sugar because the cleaner syntax makes code more sweet and pleasant to work with. Syntactic sugar was introduced with ES6+ features.
> [!NOTE] the Engine of javaScript ignore the underscore symbol _ 
 ```javascript
let x=100_000_000
console.log(x)//1000000000
console.log(1e6)//1_000_000
```
### Number Type in JavaScript
```javascript
let integer = 42; // Integer
let float = 3.14; // Floating-point number
let negative = -7; // Negative number
let largeNumber = 1.23e5; // Scientific notation (123000)
```
### Conclusion
By using these methods and the Math object effectively, you can handle a wide range of numeric computations in JavaScript. 