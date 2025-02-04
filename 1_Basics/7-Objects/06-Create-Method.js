/*
* Object
* The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
* Syntax
* Object.create(proto)
* Object.create(proto, propertiesObject)
* Parameters
* proto
* The object which should be the prototype of the newly-created object.
*
*
* */
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

const actor={
    name:'',
    age:0,
    profession: "",
    printActor:function (){
        return `Hello I'm ${this.name} I ${this.age} and Ι'm The Best ${this.profession}`
    }
}

const user=Object.create(actor,{movies:["\n" +
    "The Truman Show","Eternal Sunshine of the Spotless Mind","Liar Liar","The Mask"]});
user.name="jim carrey";
user.age=63;
user.profession="Comedian Actor";
console.log(user.printActor());
// Create Object withe Null ProtoType
const car={
    name:'' ,
    model:"",
}
const tesla=Object.create(null)
console.log(car);
console.log(tesla)// [Object: null prototype]
// Note I'll Create Another Section in OOP File just For Object.prototype bcs its Important Concept on Js