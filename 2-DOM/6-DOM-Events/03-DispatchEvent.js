/*
* The dispatchEvent() method of the EventTarget sends an Event to the object, (synchronously) invoking the affected
* event listeners in the appropriate order. The normal event processing rules (including the capturing and optional
* bubbling phase) also apply to events dispatched manually with dispatchEvent().
* Calling dispatchEvent() is the last step to firing an event. The event should have already been created and
* initialized using an Event() constructor.
* */
const myEvent=new Event("Hello World");
document.addEventListener("Hello World",(e)=>{
    console.log(e)
})
document.dispatchEvent(myEvent);