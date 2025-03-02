### What is a Generator in JavaScript?
A generator in JavaScript is a special type of function that can be paused and resumed.
Unlike regular functions that run to completion when called, generators allow you to control execution, 
yielding values one at a time as needed.Generators are defined using the function* syntax and use the yield keyword to pause execution.

---

### Why Use Generators?
Generators are useful when:

1. **Handling large datasets efficiently** – Instead of loading everything into memory, generators can yield data piece by piece.
2. **Managing asynchronous operations** – Before async/await, generators were used for handling asynchronous flows.
3. **Lazy evaluation** – They allow generating values on demand instead of precomputing everything.
4. **Custom iteration logic** – They provide more control over iteration than built-in iterators.

---
### Why Aren't Generators Commonly Used?
Although generators are powerful, they are not commonly used in modern JavaScript because:

1. **async/await is simpler** – async/await replaced many use cases of generators in async programming.
2. **Harder to understand** – Generators have a different execution model than regular functions.
3. **Performance concerns** – For many use cases, iterators or arrays are sufficient.
---

### Final Thoughts
Generators offer fine-grained control over execution and are useful for: ✅ Streaming data efficiently
1. ✅ Creating infinite sequences
2. ✅ Managing async workflows (before async/await)
3. ✅ Implementing custom iterators

>[!NOTE] However, for most modern applications, async/await and built-in iterators provide simpler alternatives.
