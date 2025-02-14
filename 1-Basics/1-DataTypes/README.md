<div align="center">
<img src="../../images/DataType.gif" alt="Data Type For Beginners">
<br>
<p align="left">
Today, we are going to expand the comparison of data structures and data types and try to better understand what data types exactly are. If you have not already, make sure to read about the difference between data types and data structures for a basic understanding.
</p>
</div> 

## 📜 Table of Contents
- [🤔 What is a Data Type](#what-is-a-data-type)
- [🛠️ characteristics-of-data-types](#characteristics-of-data-types)
- [💡 types-of-data-types](#types-of-data-types)
- [📋 data-types-in-javascript](#data-types-in-javascript)
- [🚦 strongly-vs-weakly-typed-languages](#strongly-vs-weakly-typed-languages)
- [📊 static-vs-dynamic-typing](#static-vs-dynamic-typing)
- [ how-data-types-affect-programming ](#how-data-types-affect-programming)
- [📍 conclusion](#conclusion)
- [🔗 Resources](#Resources)

# What is a Data Type?
In computer science 👨‍💻, a data type is a classification that specifies the type of data a variable can hold. It 
defines:
1. **Value Domain:** The kind of values that are allowed (e.g., numbers, text, etc.).
2. **Operations:** The set of operations that can be performed on those values (e.g., arithmetic for numbers, 
concatenation for strings).
3. **Storage:** How the data is stored in memory.
>In simpler terms, a data type tells the computer two main things:
>> 1. What kind of data you're dealing with.
>> 2. What operations can be performed on it.
# Characteristics of Data Types
1. **Size:** The amount of memory required to store the data (e.g., a number might take 8 bytes, a boolean might take 1 
   bit).
2. **Range:** The range of values a data type can represent (e.g., integers might range from -2³¹ to 2³¹-1).
3. **Operations:** What you can do with the data (e.g., mathematical, logical, or string operations).
4. **Behavior:** How the data behaves when manipulated (e.g., immutable vs. mutable).
# Types of Data Types
1. **Primitive (Basic) Data Types**
**Definition:** Fundamental building blocks provided by a programming language.
Examples:
- **Numeric Types:** int, float, double (or number in JavaScript).
- **Text Types:** char, string.
- **Logical Types:** boolean (true/false).
- **Special Types:** null, undefined
2. **Composite Data Types**
**Definition:** Combinations of primitive types.
   - **Array:** Collection of items of the same type.
   - **Object/Struct**: Collection of key-value pairs.
   - **Tuple:** Fixed-size collection of elements of different types.
3. **Abstract Data Types (ADT)**
   **Definition:** Custom types created by developers.
   Examples:
- **enum (enumeration)**.
- **Classes in object-oriented programming.**
---
# Data Types in JavaScript
Fun fact: JavaScript is a dynamic language with dynamic data types because variable types are not defined in 
advance but defined the moment they are assigned the value, variables can also dynamically change the data type depending on which value it is assigned and also, it’s so-called weakly typed language because it can implicitly change type when we do math operation with mismatched types, e.g. string plus number.
1. Primitive Types:
We have 8 main JavaScript data types most of which you might have heard already if you have just started learning JavaScript:
- **String:** Represents text.
- **Number:** Represents integers and floating-point numbers.
- **BigInt:** Represents very large integers.
- **Boolean:** Logical values (true or false).
- **Undefined:** A variable that has been declared but not assigned a value.
- **Null:** Represents an intentional absence of any value.
- **Symbol:** Unique and immutable value, often used as object keys.
2. Non-Primitive Types:
- **Object:** Key-value pairs.
- **Array:** Ordered collection of values.
- **Function:** Executable block of code.
# Strongly vs. Weakly Typed Languages
1. Strongly Typed: A variable’s data type is fixed, and type mismatches result in errors (e.g., Python, Java).
2. Weakly Typed: Variables can change their type dynamically (e.g., JavaScript).
Example in JavaScript (Weak Typing):
# Static vs. Dynamic Typing
1. Static Typing: Data types are checked at compile time. Errors are caught early (e.g., Java, C++).
2. Dynamic Typing: Data types are checked at runtime. Errors might only appear during execution (e.g., JavaScript, 
   Python).
# How Data Types Affect Programming
- **Memory Usage:** Knowing the data type helps the system allocate the right amount of memory.
- **Performance:** Static typing often leads to faster execution since type checks are done at compile time.
- **Error Prevention:** Understanding and using the correct data type reduces runtime errors.
- **Readability and Maintenance:** Proper data types make code easier to understand and maintain.
# Conclusion
A data type is much more than just a label—it’s a cornerstone of programming. It defines how data is stored, interpreted, and manipulated. By mastering data types, you gain control over both memory management and program logic, making your code efficient, reliable, and robust. 🎯
# Resources





