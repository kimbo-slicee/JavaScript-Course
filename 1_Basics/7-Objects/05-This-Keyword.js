/*
* Function This KeyWord
* this Introduction
* this Inside Object Methode
* When a function is called as a methode of an object
* its this is set to the object the methode is called on .
* Global Object
* Test Variables with Window And This
* Global Context
* Function Context
* -- For Search 📌
* */
// what is this keyWord The this keyword refers to different objects depending on how it is used:
// console.log(this)//window Object
/*
* Top-level 'this' expression Inspection info: Reports a this expression outside an object literal or a constructor body.
* Such this expressions reference the top-level "global" JavaScript object in node js and window in the browser,
* but are mostly useless.
* */

globalVar="global"
function test(){
    console.log(this===window)//ture;
    console.log(this.globalVar)// this variable is in the global Context so we can access it this key word
    return this ;
}
test();
console.log(test()===window)// true
// user this in the the methodes
const user ={
    name:"me",
    location:"Nowhere",
    age:20.8,
    // methodes
    showUserInfoWitheArrow:()=>{
        // At First we was using the name of the user to acces to the propertie now i'll use this and let's log
        // the result
        return ` Hello my Name is ${this.name} I live in ${this.location} Near Courage the Cowardly dog, my Age Is ${this.age}`
    },
    showInfoWithAnonymousFunc:function (){
        return ` Hello my Name is ${this.name} I live in ${this.location} Near Courage the Cowardly dog, my Age Is ${this.age}`
    }
}
console.log(user.showUserInfoWitheArrow()) // Hello my Name is undefined I live in undefined Near Courage the Cowardly dog, my
// Age Is undefined ?? the Mean question is why it's the proprieties are undefined 📍
console.log(user.showInfoWithAnonymousFunc())//  Hello my Name is me I live in Nowhere Near Courage the Cowardly dog, my Age Is 20.8

