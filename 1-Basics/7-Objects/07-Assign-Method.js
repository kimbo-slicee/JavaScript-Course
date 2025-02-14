/*
* 1. Object.assign()
*   The Object.assign() static method copies all enumerable own properties from one or more source objects to a
* target object. It returns the modified target object.
*/
let obj1={
    prop1:1,
    methode:function (){
        return this.prop1;
    }
}
let obj2={
    prop2:2,
    methode:function (){
        return this.prop2;
    }
}
let targetObject={
    prop1: "One",
    prop2: "Two"
}
console.log(targetObject)//{ prop1: 'One', prop2: 'Two' }
const  finalObject=Object.assign(targetObject,obj1,obj2);
console.log(targetObject)// { prop1: 1, prop2: 2, methode: [Function: methode] }
console.log(finalObject);
// if we don't Have a target Object we create one
const newObject=Object.assign({},finalObject,{prop3:"Three"});
console.log(newObject)