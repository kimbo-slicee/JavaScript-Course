# What is Variables 
Variables are containers for storing information. Creating a variable in JavaScript is called "declaring" a variable: var carName; After the declaration, the variable is empty (it has no value).
# var,let and const  
 JavaScript variables can be created in three different ways using keywords [var](), [let]() and [const](). 
 Initially, variables were created using only the var keyword. But due to some historic drawbacks of using var, let and const were implemented for creating variables. It is recommended that Developers don’t use the var keyword anymore to declare variables. Irrespective of which keyword you use to get your variable declared, the syntax still remains the same.
 You can declare variables in JavaScript using three keywords: var, let, and const. Each keyword has different 
behaviors and use cases.
### Using var
>[!NOTE]
>The var keyword was the original way to declare variables in JavaScript.

- Variables declared with var are function-scoped.
- They can be redeclared and updated.
- Variables declared with var are hoisted (moved to the top of their scope during execution), but their value is not 
  initialized until the code is executed.
**EXAMPLE**
```javascript
var name = "Alice"; // Declares a variable and assigns a value
name = "Bob";       // Updates the value of the variable
var name = "Charlie"; // Redeclares the variable
```
### Using let
- Introduced in ES6 (https://ecma-international.org/)[ECMAScript 2015], let is now the preferred way to declare 
  variables.
- Variables declared with let are block-scoped (accessible only within the block where they are defined).
- They can be updated but cannot be redeclared in the same scope.
**EXAMPLE**
```javascript
let age = 30; // Declares a variable and assigns a value
age = 35;     // Updates the value of the variable
// let age = 40; // ❌ Error: Cannot redeclare a variable using `let` in the same scope

```
### Using const
- const is used to declare variables whose values are constant and cannot be changed after initialization.
- Like let, const is block-scoped.
- Variables declared with const must be initialized during declaration.
**Example**
```javascript
const PI = 3.14; // Declares a constant and assigns a value
// PI = 3.1415; // ❌ Error: Cannot reassign a constant
```
>[!IMPORTANT]
> **Declaring Variables Without Initialization**
> If you do not assign a value during declaration, the variable will have the value undefined by default.
```javascript
let score; // Declares a variable without assigning a value
console.log(score); // Output: undefined

score = 100; // Assigns a value to the variable
console.log(score); // Output: 100

```
### When to Use var, let, or const
| Keyword   | 	Scope	                  |Can Be Updated?|Can Be Redeclared?|Hoisted?|
|-----------|--------------------------|---------------|------------------|--------|
| var	      | Function-scoped    	     |Yes| 	 Yes	           | Yes (undefined)|
| let	      | Block-scoped	            |Yes	| No           |	Yes (not initialized)|
| const	  | Block-scoped	            |No	| No               |	Yes (not initialized)|


# JavaScript Variable Naming Convention
JavaScript variables are powerful programming constructs. However, there is a convention that should be followed by creating a variable in JavaScript.
Following are the rules that a Developer should follow to properly get variables declared:
- Variable name should only contain alphabets, numbers, $ and _
- Variable name should not start with a number
- Variable names are case-sensitive i.e. result and Result are two different variables
- Variables can’t be named as one of the reserved keywords like let, return, const, etc.
- Variable should use camelCase i.e. numOne is preferred over NumOne or numone
- Variable can’t have hyphen - in its name
- Use easy-to-understand names that symbolize the value stored in variables. For e.g. instead of calling a variable 
phNum, a Developer can call it phoneNumber.
- Don’t use single-letter variable names like x, a, z, etc.
# Reserved Words
Reserved words (also called keywords) are words that have specific meanings in JavaScript and are part of the language syntax. They cannot be used as identifiers because they are reserved for their intended purposes.
**Common Reserved Words in JavaScript:**
- Control Statements: if, else, switch, case, default
- Loops: for, while, do, break, continue
- Data Types: var, let, const, function, class
- Boolean Values: true, false
- Special: null, undefined, this, super
- Others: return, import, export, try, catch, throw, new
```javascript
let if = 10;  // ❌ Error: 'if' is a reserved word
let count = 10;  // ✅ Valid identifier

```
# Summary Table

| Concept	       | Definition 	                                                                  |Example|
|----------------|-------------------------------------------------------------------------------|---------|
| Variable	      | Named container for storing data.	                                            |let age = 30;|
| Identifier	    | The name of a variable, function, or any user-defined element.	               |let score = 10;|
| Reserved Word	 | Keywords with special meanings in JavaScript. Cannot be used as identifiers.	 |let return = 5; // Error|

