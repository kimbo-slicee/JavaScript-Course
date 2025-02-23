/*
* - Set vs WeakSet
* - The WeakSet  is weak,
* - meaning reference to object in a WeakSet are held weakly
* - if on other references to an object stored in the waeSet exist
* - those object can be garbage collected
* ----
* - set     => Can Store Any Data Values
* - WeakSet => Collection of Object Only
* ----
* - Set      =>  Have Size Property
* - WeakSet  =>  Does Not Have Size Property
* ----
* - Set      =>  Have Keys ,Value ,Entries
* - WeakSet  =>  Does Not Have Clear, Keys, Values and Entries
* ----
* - set      => Can use ForEach
* - WeakSet  => Cannot Use ForEach
* */
// Type of data
const set =new Set([0,1,2,4,1,"B","Q","A","D",2,1,3,4,"B",5,2,1,"A"]);
console.log(set)// { 0, 1, 2, 4, 'B', 'Q', 'A', 'D', 3, 5 }
// const weakSet =new WeakSet([0,1,2,4,1,2,1,3,4,5,2,1])//Invalid value used in weak set
const weakSet=new WeakSet([{0:1, 1:2, 2:3, 3:"4", 4:5, 5:6, 6:"B", 7:7}]);
console.log(weakSet)
// size
console.log(set.size)// 10
console.log(weakSet.size)//undefined
// Keys Values
console.log(set.values());//{ 0, 1, 2, 4, 'B', 'Q', 'A', 'D', 3, 5 }
console.log(set.keys());//{ 0, 1, 2, 4, 'B', 'Q', 'A', 'D', 3, 5 }
// next
console.log(set.keys().next())//{ value: 0, done: false }
console.log(set.values().next())//{ value: 0, done: false }
console.log(set.values().next().value)//0
console.log(set.values().next().done)//false




