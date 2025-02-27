/*
* -The static keyword defines a static method or field for a class. Static properties (fields and methods) are
*  defined on the class itself instead of each instance. Static methods are often used to create utility
*  functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other
*  data that doesn't need to be replicated across instances.
*
* */
class Employ{
   static counter=0
    id;
    constructor(name,salary=0,department="unknown") {
        Employ.counter++;
        this.id=Employ.counter || "undefined";
        this.name=name;
        this.salary=salary;
        this.department=department;
    }
    static sayHello(){
        console.log( `Hello Employs`)}
}
const developer=new Employ("me",8000,"IT");
const manager=new Employ("you",8000,"Business");
const cyber=new Employ("others",10000,"IT")
console.log(developer)
console.log(manager);
console.log(cyber);
Employ.sayHello();