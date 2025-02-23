/*
* Map Data Type
*   - The Map object holds key-value pairs and remembers the original insertion order of the keys.
*     Any value (both objects and primitive values) may be used as either a key or a value.
*     Maps were introduced in JavaScript in ES6.
*   - Syntax: New Map(Iterable With Key/Value)
*   Map vs Object
*   ---
*   - Map => Does Not Contain Key By Default
*   - Object => Has Default Keys
*   ---
*   - Map => Key Can Be Anything [Function, Object , Any Primitive Data Types ]
*   - Object => string Or Symbol
*   ---
*   - Map => Ordered By Insertion
*   - Object => Need To Do Manually
*   ---
*   - Map => get Items Ny Size
*   - Object => Need To Do Manually
*   ---
*   - Map => can Ben Directly Iterated
*   - Object => Not Directly And Need To Use Object.Keys() and So On
*   ---
*   - Map => Better Performance when Add Or Remove Data
*   ---
*   Methods
*   - Set
*   - get
*   - delete
*   - clear
*   - has
*   properties
*   -----size
*
* */
console.log("--------------Map-Section----------------")
// Map Sam's like Object.create(null)
const obj=Object.create(null)
console.log(obj);// No properties
const firstMap=new Map();
console.log(`Map ${firstMap}`);
const map =new Map([
    ["first Name","me"],["age",20],["address","Here"]
]);
console.log(map);
// Keys test
const keys={
     10:"number",
    "10":"string",
}
console.log(keys["10"])//string
console.log(keys[10])//string the second key will override the first one
const mapKeysTest=new Map([[10,"number"],["10","string"]])
console.log(mapKeysTest.get(10))// number
console.log(mapKeysTest.get("10"))//string
// add to the map
// let's test the forEach function
map.forEach((e)=>console.log(e));
// Map methodes
const mapMethods=new Map([["name","med"]])
