/*
* Function
* Default Function Parameters
* Old Startling [Condition + logical or ]
* */
// The old way
function say_Hello(name){
    // first Way
    if(name===undefined){
        name="unknown";
    }
    // Second Way
    name=name|| "unknown"// truthy falsy pattern
    console.log(`Hello ${name}`)
    return`Hello ${name}`
}
// ES6 Methode
function say_My_Name(name="unknown"){
    return `you are ${name}`
}
// ES6 it's so simple way 
