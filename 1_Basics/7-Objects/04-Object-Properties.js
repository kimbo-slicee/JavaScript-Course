/*
* 1.Add new proprieties
* 2.update Object proprieties
* 3.Adding or changing an object property
* Object.defineProperty(object, property, descriptor)
* 4.Adding or changing object properties
* Object.defineProperties(object, descriptors)
* 5.Accessing a Property
* Object.getOwnPropertyDescriptor(object, property)
* 6.Accessing Properties
* Object.getOwnPropertyDescriptors(object)
* 7.Returns all properties as an array
* Object.getOwnPropertyNames(object)
* 8.Accessing the prototype
* Object.getPrototypeOf(object)
* */
let user={}
// add Properties directly
user.name="Me";
user.hobbies=["watching All One piece","Collect naruto manga cards"];
console.log(user) //{name:"Me", hobbies: [ 'watching All One piece', 'Collect naruto manga cards' ]}
// Add methodes
user.bestAnime=()=>{
    return " In my opinion attack on titan is the peak of anime"
}
// upaDate proprieties
user.hobbies.push("Watch All death Note episodes in One Day 😎")
console.log(user);
// Add methodes to User Object
user.sayHello=()=>{
    console.log(`hello I'm ${user.name} I have some fantastic Hobbies such as ${user.hobbies[Math.ceil(Math.random()*3)]}`)
}
user.sayHello();

