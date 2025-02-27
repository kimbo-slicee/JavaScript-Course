/*
* - The constructor method is a special method of a class for creating and initializing an object instance of
*   that class.
* - syntax constructor(){}
* - above would roughly translate to the following with function constructors:
* - Built In Constructors
*
* */
// Example One
console.log("Hello".constructor); // String
console.log((42).constructor); // Number
console.log(true.constructor); // Boolean
console.log([].constructor); // Array
console.log({}.constructor); // Object

// - If you came from a pre-ES6 world, you may be more familiar with using functions as constructors. The pattern
function Car(name,color,price){
    this.name=name;
    this.color=color;
    this.price=price;
}
const bmw=new Car("BMW","Black",2000);
const mercedesBenz=new Car("Mercedes-Benz","white",10000);
const porsche=new Car("porsche 911 gt3 ","red",20000);
console.log(bmw.price)
console.log(mercedesBenz.price)
console.log(porsche.price)
const pricelessCar=(...cars)=>{
   let price=cars[0].price;
    cars.forEach((car)=>{
        if (car.price>price){
             price=car.price;
        }
    })
    return cars.find((car) => car.price === price)
}
console.log(pricelessCar(bmw,mercedesBenz,porsche))

// Constructor Example After ES6 syntax
class Person {
    constructor(name,age) {
        this.name = name;
        this.age=age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name},and I ${this.age} Years Old`);
    }
}

const me = new Person("me",2e1);

me.introduce();
// check if me is instance of class Person
console.log(me instanceof Person)// true
console.log(me.constructor===Person)// true
// Built in Object
const str="String";
const string=new String("String");
console.log(typeof str);// string
console.log(typeof string);// object
console.log(str instanceof String)// false;
console.log(string instanceof String)// true;

console.log(str.constructor===String);
console.log(string.constructor===String)