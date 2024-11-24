<div align="center">
<img src="../../images/javaScript_Strings.png" alt="javaScript String Section"/>
</div>

### String In javaScript 
In JavaScript, a string is a data type used to represent and manipulate text. Strings are sequences of characters enclosed in quotes.
###  String Syntax 
In JavaScript, a string is a sequence of characters enclosed within quotes. You can use different types of quotes, depending on your needs. Here's a breakdown of the syntax options:
```javascript
// Single quotes
let single = 'This is a string';
// Double quotes
let double = "This is another string";
// Template literal
let template = `This is a string with interpolation: ${single.length}`;
```
### Single ' vs Double Quotes " - Backticks `
Both single (' ') and double (" ") quotes are used to represent a string in Javascript. Choosing a quoting style is up to you and there is no special semantics for one style over the other. Nevertheless,
1. Single Quotes (')
Use single quotes for strings. This is often preferred for strings that do not contain apostrophes (').
2. Double Quotes (")
Double quotes work the same way as single quotes. They are useful when the string contains apostrophes ('), to avoid escaping.
3. Template Literals (Backticks,`);
Template literals are enclosed in backticks and provide additional features like:
- **String interpolation:** Insert variables or expressions using ${}.
- **Multi-line strings:** Span strings over multiple lines without special characters.
>[!NOTE]
> it is important to note that there is no type for a single character in javascript, everything is always a string!
## Escape Characters
When your string contains quotes of the same type used to delimit it, you need to escape them with a backslash (\)
Example: Escaping single and double quotes
```javascript
let singleQuoteString = 'It\'s a sunny day.';
let doubleQuoteString = "She said, \"JavaScript is fun!\"";

```
**Common escape sequences:**    

|Sequence |Description|Example| 
|---------|-----------|-----|
|\'	      |Single quote	   |'It\'s great!'|
|\"	      |Double quote	   |"She said, \"Hi!\""|
|\\	      |Backslash	   |"This is a backslash: \\ "|
|\n	      |New line	       |"Line one\nLine two"|
|\t	      |Tab	           |"Column1\tColumn2"|
|\uXXXX	  |Unicode character	|"\u2764" (❤️)|


###  Strings Are Immutable
In JavaScript, strings are **immutable**, meaning their values cannot be changed after creation. Operations like 
toUpperCase() or replace() return a new string rather than modifying the original.
### Creating strings
In JavaScript, strings can exist as primitives or objects, but they share similar functionality thanks to JavaScript's ability to wrap primitives with objects when needed. Let’s break down the difference:
> [!IMPORTANT]
> String primitives and string objects share many behaviors, but have other important differences and caveats.
```javascript
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");//string objects
```
1. **String Primitives**
A string primitive is the most common form of a string in JavaScript. It’s a lightweight, immutable value that represents text
- **Characteristics:**
- Immutable: You cannot change a string's value once created. Operations like toUpperCase() return a new string 
  rather than modifying the original.
- Lightweight: Primitives are optimized for memory and performance.
- Type: The typeof operator returns "string" for string primitives
```javascript
console.log(typeof str); // Output: string
```
2. String Objects
A string object is created explicitly using the String constructor.
- Type: The typeof operator returns "object" for string objects.
```javascript
console.log(typeof objStr); // Output: object
```    
- **More memory:** String objects are heavier and consume more resources than string primitives.
- **Use case:** Generally discouraged unless you specifically need an object (e.g., to attach custom properties)
###  Conversion Between Primitives and Objects
JavaScript automatically wraps string primitives with their object counterparts when you call methods or access properties. For example:
```javascript
let str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"
```
>[!IMPORTANT]
>Behind the scenes: The primitive "hello" is temporarily converted to a String object to access the toUpperCase() 
> method, then reverted to a primitive.
### Key Takeaways
1. Use string primitives for most cases; they’re simpler and more efficient.
2. Avoid using string objects unless there's a compelling reason.
3. JavaScript's automatic wrapping ensures primitives behave like objects when needed, so most developers rarely need 
  to worry about the distinction.
### String Methodes 
JavaScript provides a wide range of string methods to manipulate and inspect strings. Here’s a comprehensive list of the most commonly used string methods with examples
1. Accessing and Information
**length**
Returns the number of characters in a string.
```javascript
let str = "Hello, World!";
console.log(str.length); // Output: 13
```
2. Modifying Strings
**toUpperCase()**
Converts all characters in a string to uppercase.
```javascript
let str = "hello";
console.log(str.toUpperCase()); // Output: HELLO
```
**toLowerCase()**
Converts all characters in a string to lowercase.
```javascript
let str = "HELLO";
console.log(str.toLowerCase()); // Output: hello
```
**trim()**
Removes whitespace from both ends of a string.
```javascript
let str = "  Hello, World!  ";
console.log(str.trim()); // Output: "Hello, World!"
```
**trimStart() / trimEnd()**
Removes whitespace from the start or end of a string.
Removes whitespace from the start or end of a string.
```javascript
let str = "  Hello, World!  ";
console.log(str.trimStart()); // Output: "Hello, World!  "
console.log(str.trimEnd());   // Output: "  Hello, World!"
```
**replace(searchValue, newValue)**
Replaces the first occurrence of a substring with another value.
```javascript
let str = "Hello, user!";
console.log(str.replace("user", "World")); // Output: Hello, World!
```
3. Extracting and Splitting Strings
   **slice(start, end)**
   Extracts a section of a string and returns it as a new string.
```javascript
let str = "Hello, World!";
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.slice(-6));   // Output: World!
```
**substring(start, end)**
Similar to slice, but does not accept negative indices.
```javascript
let str = "Hello, World!";
console.log(str.substring(0, 5)); // Output: Hello
```
**split(delimiter)**
Splits a string into an array of substrings based on a delimiter.
```javascript
let str = "apple,banana,cherry";
console.log(str.split(",")); // Output: ["apple", "banana", "cherry"]

```
4. Searching and Matching
**indexOf(substring)**
   Returns the index of the first occurrence of a substring, or -1 if not found.
```javascript
let str = "Hello, World!";
console.log(str.indexOf("World")); // Output: 7
```
**lastIndexOf(substring)**
Returns the index of the last occurrence of a substring, or -1 if not found.
```javascript
let str = "Hello, World! Hello!";
console.log(str.lastIndexOf("Hello")); // Output: 14
```
**match(regex)**
Matches a string against a regular expression.
```javascript
let str = "cat, bat, rat";
console.log(str.match(/at/g)); // Output: ["at", "at", "at"]
```
**search(regex)**
5. Combining Strings
6. Advanced Methods
**padStart(targetLength, padString)**
Pads the start of a string with another string until it reaches the specified length.
```javascript
let str = "5";
console.log(str.padStart(3, "0")); // Output: 005
```
**padEnd(targetLength, padString)**
Pads the end of a string with another string until it reaches the specified length.
```javascript
let str = "5";
console.log(str.padEnd(3, "0")); // Output: 500
```
### Example Summary
```javascript
let str = "  Hello, JavaScript!  ";

console.log(str.trim());                // Removes whitespace
console.log(str.toUpperCase());         // Converts to uppercase
console.log(str.slice(0, 7));           // Extracts "  Hello"
console.log(str.includes("Java"));      // Checks if "Java" is present
console.log(str.replace("JavaScript", "World")); // Replace "JavaScript" with "World"
console.log(str.split(" "));            // Splits into words

```


