/*
* Set Data Type
* - syntax :new Set(Iterable);
* - Object To Store Unique Value
* - Cannot Access Element By Index
* Properties
* - size
* Methodes:
* - add
* - delete
* - clear
* - has
* */
const nums=[4,4,4,4,1,2,3,4,4,5,3,3,2,4,5,5,21,1,"B"];
const set =new Set(nums);
console.log(set)// { 4, 1, 2, 3, 5, 21 }
console.log(set.size)// 6
// indexing
console.log(nums[0])//4
console.log(set[0])// undefined : you can not access set data by using index
// add methode
set.add(5).add(10);// 7
console.log(set.size)
// delete
console.log(set.delete(4));// true
console.log(set);//{ 1, 2, 3, 5, 21, 10 }
// has
console.log(set.has(100))// false
console.log(set.has("B"))// true
