# 🧵 JavaScript Regular Expressions (Regex)

Regular Expressions (Regex) are powerful tools for pattern matching and text manipulation in JavaScript. They allow you to search, replace, and validate strings efficiently.

## 📜 Table of Contents
- [🔤 Syntax](#-syntax)
- [🛠️ Common Methods](#️-common-methods)
- [💡 Examples](#-examples)
- [📋 Cheat Sheet](#-cheat-sheet)
- [🔗 Resources](#-resources)

---

## 🔤 Syntax
Regex patterns in JavaScript are written between slashes `/.../` or using the `RegExp` constructor.

### Example:
```javascript
const pattern1 = /abc/; // Literal syntax
const pattern2 = new RegExp("abc"); // Constructor syntax
```

## 🏴 Flags: 
Flags modify the behavior of the pattern:
- g 🌐: Global search
- i 🔡: Case-insensitive search
- m 📝: Multi-line search
- u 🌍: Unicode support
- y 🧲: Sticky search

# 🛠️ Common Methods

>[!IMPORTANT]
> Regex can be used with various string and RegExp object methods:

## String Methods:
1. **match() 🔍** 
  Finds matches in a string.
```javascript
"hello".match(/e/); // ["e"]

```
2. **replace() 🔄**
   Replaces matched text.
```javascript
"hello".replace(/l/g, "x"); // "hexxo"
```
3. **search() 🔎**
   Finds the position of the first match.
```javascript
"hello".search(/o/); // 4
```
3. **split() ✂️**
   Splits a string based on a pattern.
```javascript
"1,2,3".split(/,/); // ["1", "2", "3"]

```
# RegExp Methods:
1. **test() ✅**
   Tests if a pattern matches.
```javascript
/hello/.test("hello world"); // true

```
2. **exec() 📋**
   Returns detailed match information.
```javascript
   /l/.exec("hello"); // ["l"]

```
# 💡 Examples
1. Match Digits:
```javascript
const digits = /\d+/g;
const result = "Price: 123".match(digits);
console.log(result); // ["123"]

```
2. Validate Email:
```javascript
 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("test@example.com")); // true

```
3. Replace Words:
```javascript
const text = "I love cats";
const newText = text.replace(/cats/, "dogs");
console.log(newText); // "I love dogs"

```
# 📋 Cheat Sheet
| Pattern	                                | Description                    |
|-----------------------------------------|--------------------------------|
| .	                                      | Matches any character          |
| \d	                                     | Matches a digit (0-9)          |
| \w	                                     | Matches a word character       |
| \s	                                     | Matches a whitespace character |
| ^	Matches the start of a string         |
| $	Matches the end of a string           |
| [abc]	Matches any character in set      |
| [^abc]	Matches any character not in set |
| `(a	                                    | b)`                            |
| *	                                      | Matches 0 or more occurrences  |
| +	                                      | Matches 1 or more occurrences  |
| ?	                                      | Matches 0 or 1 occurrence      |
| {n}	                                    | Matches exactly n occurrences  |
| {n,}	                                   | Matches n or more occurrences  |
| {n,m}	                                  | Matches n to m occurrences     |  


# 🔗 Resources
- 📖 MDN Web Docs on Regex
- 🎯 Regex101 (Interactive Tool)
- 📘 JavaScript Info Regex Guide

Happy coding with Regex! 🎉✨






