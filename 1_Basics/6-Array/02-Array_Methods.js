/**
 * Array Methods [Length,Search,Add,Remove,Sort]
 * Length----> returns the length of the array
 * Push------> adds an element to the end of the array
 * Unshift---> adds an element to the beginning of the array
 * Pop-------> removes the last element from the array
 * Shift-----> removes the first element from the array
 * IndexOf---> returns the first index of an element in the array
 * LastIndexOf-> returns the last index of an element in the array
 * Includes--> checks if an element is present in the array
 * Sort--------> sorts the array
 * Reverse-----> reverses the array
 * Slice-------> returns a portion of the array // Shallow Copy
 * Splice------> adds or removes elements from the array // Deep Copy
 * Concat----> merges two or more arrays
 * join-------> joins all the elements of an array into a string
 */
// Length
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.length); // 4
fruits[5] = "Pineapple";
console.log(fruits.length); // 6
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", empty, "Pineapple"]
fruits[10] = "Grapes";
console.log(fruits.length); // 11
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", empty, "Pineapple", empty, empty, empty, empty, "Grapes"]
// Push
let cars = ["BMW", "Audi", "Mercedes"];
cars.push("Toyota");// adds "Toyota" to the end of the array
console.log(cars); // ["BMW", "Audi", "Mercedes", "Toyota"]
console.log(cars.length); // 4
// Unshift
cars.unshift("Ford");// adds "Ford" to the beginning of the array
console.log(cars); // ["Ford", "BMW", "Audi", "Mercedes", "Toyota"]
console.log(cars.length); // 5
// Pop
cars.pop();// removes the last element from the array.if the array is empty, it returns undefined
console.log(cars); // ["BMW", "Audi", "Mercedes"]
const lastCar= cars.pop(); // Mercedes
console.log(lastCar); // Mercedes
// Shift
cars.shift();// removes the first element from the array, if the array is empty, it returns undefined
console.log(cars); // ["Audi", "Mercedes"]
const firstCar = cars.shift(); // Audi
console.log(firstCar); // Audi
// IndexOf [searches the array for an element and returns its first index]
let animals = ["Lion", "Tiger", "Elephant", "Deer", "Lion"];
console.log(animals.indexOf("Lion")); // 0
console.log(animals.indexOf("Tiger")); // 1
console.log(animals.indexOf("Horse")); // -1
// LastIndexOf [searches the array for an element and returns its last index]
console.log(animals.lastIndexOf("Lion")); // 4
console.log(animals.lastIndexOf("Lion",-2)); // 0
console.log(animals.findLastIndex((animal)=>animal!=="Deer")); // 4
// Includes [checks if an element is present in the array]
console.log(animals.includes("Lion")); // true
console.log(animals.includes("Horse")); // false
// Sort [sorts the array] sort()
let sortArray = [4, 2, 5, 1, 3,"a","b","c","d","100","10","",true,false,-5,0];
sortArray.sort();
console.log(sortArray); // [-5, 0, 1, "10", "100", 2, 3, 4, 5, "", "a", "b", "c", "d", false, true]
// Sort with compare function
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]
numbers.sort((a, b) => a > b);
console.log(numbers); // [5, 4, 3, 2, 1]
// Reverse [reverses the array] reverse()
let reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log(reverseArray); // [5, 4, 3, 2, 1]
console.log(reverseArray.sort((a, b) => a - b).reverse()); // [5, 4, 3, 2, 1]
// Slice [returns a portion of the array] slice(start, end)
let colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
let slicedColors = colors.slice();
console.log(slicedColors); // ["Red", "Green", "Blue", "Yellow", "Orange"]
let slicedColors1 = colors.slice(1);// returns the elements from index 1 to the end
console.log(slicedColors1); // ["Green", "Blue", "Yellow", "Orange"]
let slicedColors2 = colors.slice(1, 3);// returns the elements from index 1 to 3
console.log(slicedColors2); // ["Green", "Blue"] not including the end index element [3]
console.log(colors)// ["Red", "Green", "Blue", "Yellow", "Orange"] [original array is not modified]
// Splice [adds or removes elements from the original array] splice(start, deleteCount, item1, item2, ...)
let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");// adds "February" at index 1
console.log(months); // ["January", "February", "March", "April", "June"]
months.splice(3, 1);// removes the element at index 3
console.log(months); // ["January", "February", "March", "June"]
months.splice(2, 1, "May");// replaces the element at index 2 with "May"
console.log(months); // ["January", "February", "May", "June"]
// Concat [merges two or more arrays]

