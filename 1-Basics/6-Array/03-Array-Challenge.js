// 1. Reverse an Array
/*
* Write a function that takes an array and returns a new array with the elements reversed without using the built-in reverse() method.
* */
const reverseArray=(arr)=>{
    let newArr=[];
    for (let i=arr.length-1,j=0;i>=0; j++,i--){
        newArr[j]=arr[i]
    }
    return newArr
}
console.log(reverseArray([1, 2, 3, 4]));// Output: [4, 3, 2, 1]
// 2. Find the Maximum Difference
/*
* Write a function that finds the largest difference between any two elements in an array (arr[biggest] - arr[smallest]).
* */
// Output: 8 (9 - 1)
const maxDifference=(arr)=>{
    let max=Math.max(...arr);
    let min=Math.min(...arr)
    let result=max-min
    console.log(result)
}
maxDifference([2, 9, 3, 5, 1]);
// 3. Flatten a Nested Array
/*
* Write a function that flattens a multi-dimensional array (an array that contains other arrays) into a single array.
* */
// 4 Sort Array by String Length
/*Write a function that sorts an array of strings based on the length of each string.*/
const sortByLength=(arr)=>arr.sort((a,b)=>a.length-b.length)
console.log(sortByLength(["apple", "pie", "banana", "grape"]));
// Output: ["pie", "apple", "grape", "banana"]





