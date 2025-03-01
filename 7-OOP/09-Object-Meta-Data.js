/*
* Object Meta Data And Descriptor
* - Writable
* - enumerable
* - Configuration [Cannot Delete Or Configure]
* */
const object={
    a:1,
    b:2
}
const card={
    height:"200px",
    width:"200px"
}
// defineProperty
Object.defineProperty(object,"c",{
    writable:true,
    enumerable:true,
    configurable:true,
    value:3
})
// change value of c
object.c="New Value";
console.log(object)// { a: 1, b: 2, c: 'New Value' } the value of c bcs writable:true,
// enumerable true
for (const key in object) {
    console.log(object[key]);
}
// change writable to false
Object.defineProperty(card,"background-color",{
    writable:false,
    enumerable:false,// I can't loop over this property
    configurable:false,// I can't  delete and redefine this property
    value:"black"
});
console.log(delete card["background-color"])
card["background-color"]="white"
console.log(card)//{ height: '200px', width: '200px', 'background-color': 'black' } doesn't change
// check Looping
for (const key in card) {
    console.log(card[key])
}
/*
* Define Multiple Property's
* - Descriptor
* */
Object.defineProperties(object,{
    d:{
        writable:false,
        enumerable:true,
        configurable:false,
        value:"d"
    },
    e:{
        writable:false,
        enumerable:true,
        configurable:false,
        value:"e"
    }
})
console.log(object)
console.log(Object.getOwnPropertyDescriptor(object,"d"))
console.log(Object.getOwnPropertyDescriptors(object))
