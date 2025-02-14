### Folder Structure
```graphQl

```
### Main Topics of DOM Events File
1. [Introduction to events]( #introduction-to-events)
2. [What Are DOM Events](#what-are-dom-events)
3. [Common DOM Events](#common-dom-events)
4. [how-to-listen-for-events](#how-to-listen-for-events)
5.
### Introduction to events
One of the most powerful features of the DOM is its ability to respond to user interactions through events. This
ReadMe file explores DOM events in JavaScript, explaining what they are, how they work, and how to use them effectively.
### What Are DOM Events?
A DOM event is a signal sent to notify the program that something has happened, such as a user clicking a button, typing in a text field, or scrolling through a page. Events provide a way to handle these interactions and build dynamic, interactive web applications.
For example, when a user clicks a button, the browser triggers a click event. JavaScript can listen for this event and execute code in response.
### Common DOM Events
**Here are some commonly used DOM events:**
#### Mouse Events
1. [x] click: Triggered when a user clicks on an element.
2. [x] dblclick: Triggered when a user double-clicks on an element.
3. [x] mousemove: Triggered when the mouse pointer moves over an element.
4. [x] mouseover: Triggered when the mouse pointer enters an element.
5. [x] mouseout: Triggered when the mouse pointer leaves an element.

#### Keyboard Events

1. [x] keydown: Triggered when a key is pressed down.
2. [x] keyup: Triggered when a key is released.
3. [x] keypress: (Deprecated) Triggered when a key is pressed down and is still held.

#### Form Events

1. [x] submit: Triggered when a form is submitted.
2. [x] change: Triggered when the value of a form field changes.
3. [x] input: Triggered when the user provides input to a form element.
4. [x] focus: Triggered when an element gains focus.
5. [x] blur: Triggered when an element loses focus.

#### Document Events

1. [x] DOMContentLoaded: Triggered when the initial HTML document is fully loaded and parsed.
2. [x] scroll: Triggered when the user scrolls the document or an element.
3. [x] resize: Triggered when the browser window is resized.

### How to Listen for Events

**How to Listen for Events**
To respond to an event, you need to use an event listener. JavaScript provides several ways to attach event listeners to DOM elements:
* Using addEventListener()
  The addEventListener method is the most flexible way to listen for events. It allows you to attach multiple listeners to the same event and element.
```javascript
    // Select the button element
    const button = document.querySelector("button");
    
    // Add a click event listener
    button.addEventListener("click", function () {
      alert("Button clicked!");
    });
```
* Inline Event Handlers (Not Recommended)
  You can also define event handlers directly in your HTML using attributes like onclick, but this approach is considered outdated and less maintainable.
```javascript
    <button onclick="alert('Button clicked!')">Click Me</button>
```
* Assigning Event Handlers with JavaScript
  You can assign an event handler directly to an element's property, such as onclick. However, this method overwrites any existing handlers for the same event.
```javascript
    button.onclick = function () {
      alert("Button clicked!");
    };
```
### Conclusion
DOM events are a cornerstone of modern web development, enabling developers to create dynamic and interactive user interfaces. By understanding how events work and how to use them effectively, you can build responsive applications that deliver a seamless user experience. Start experimenting with DOM events in your projects to see their power in action!