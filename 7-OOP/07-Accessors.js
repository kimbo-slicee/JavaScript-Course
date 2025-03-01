/*
* In JavaScript, getters and setters are special methods that allow you to control access to an object's properties.
* They are defined using the get and set keywords inside a class or an object.
* ECMAScript 5 (ES5 2009) introduced Getter and Setters.
* Getters and setters allow you to define Object Accessors (Computed Properties).
* */
// Create an object:
class Person {
    #address
    constructor(name,address) {
        this._name = name; // ❌ This will cause an issue
        this.#address=address;
    }

    get name() {
        return this._name; // ❌ Infinite recursion! 💥
    }

    set name(newName) {
        this._name = newName; // ❌ Infinite recursion! 💥
    }
    get address(){
        return this.#address;
    }
    // set Address change the value of Address
    set address(address){
        if(address.length<0){
            console.log("Invalid Address");
            return;
        }
        this.#address=address
    }

}

const p = new Person("Alice","Here"); // ❌ Maximum call stack size exceeded!
console.log(p)
//Getter and setter use specially for privet and protege filed
// p.address="there"; // Property personAddress is not defined in type Person
console.log(p.address)
//
p.address="New York City"
console.log(p.address)