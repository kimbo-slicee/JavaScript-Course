/*
* Array.from(Iterable,MapFunction,this)
* ---- Variable
* ---- String Numbers
* ---- Set
* ---- Using The Map Function
* ---- Arrow Function
* ---- Shorten the Methode + use argument
*/
console.log(Array.from("1234567",(e)=>e*2));
let arr=Array.from("hello world !");
console.log(arr);
/*
* Array Methode
* - Array.copyWithin(Target,Start => Optional , End =>Optional)
* - "Copy Part Of An Array To Another Location in The Same Array"
* --- Any Negative Value Will Count Form The End
* --- Target
* -Index To Copy Part To
* -if At Greater than Array Length Nothing Will Be Copied
* --- start
* - Index To Start Copying Form
* - If Ommited = Start Form Index
* --- End
* - Index To End Copying Form
* - If Ommited = Reach The End
* */
let array=[10,20,30,40,50,"A","B","C"];
array.copyWithin(4,0,5)//10,20,30,40,10,20,30,40
console.log(`Copy Within Array ${array}`)
let newArr=[10,20,30,40,50,"A","B"];
newArr.copyWithin(4,-1);// [10, 20, 30, 40, 'B', 'A', 'B']
console.log(newArr);
newArr.copyWithin(-6,-2)//[10,"A","B",40,50,"A","B"]
console.log(newArr)
newArr.copyWithin(1,-2,6)//[10,"A",30,40,50,"A","B"];
console.log(newArr)

/*
* Array Methods
* ---> Array.some(CallbackFunc(Element,Index,Array),this Argument)
* ----> CallbackFunc => Function To Run On Every Element On the Given Array
* -------> Element => The Current Element To Process
* ----------> Index => Index of the Current Element
* -------------> Array => The Current Array Working with
* ---------------> this Argument => value To Use When Executing CallbackFunc
* - Using
* -- Check if Element Existing In Array
* -- Check If Number In Range
* */
let someArr=[1,2,3,4,5,6,7,8,9,10];
console.log(someArr.some((e)=>e>4));
let counter=5;
let check =someArr.some(function (e){
    return e===Number(this);
},counter)
console.log(check)
// Example 2
let nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
function checkNums(arr,value){
   return  arr.some((e)=>e===value);
}

console.log(checkNums(nums,8));
// check Range
let range={
    min:10,
    max:20
};
const inRange=(arr,range)=>{
    // we want to check if the number in the nums array is in the range of Object Value
   return arr.some((e)=>{
        return e>=this.min && e<=this.max
    },range)
}
console.log("In range" + inRange(nums,range))
/*
* - Array.every Method
* - Array.every(CallBackFunc(Element,index ,Array),this Argument)
* ----> CallbackFunc => Function To Run On Every Element On the Given Array
* -------> Element => The Current Element To Process
* ----------> Index => Index of the Current Element
* -------------> Array => The Current Array Working with
* ---------------> this Argument => value To Use When Executing CallbackFunc
*/
const location={
    20:"Place 1",
    30:"Place 2",
    40:"Place 3",
    50:"Place 5",
    10:"Place 6"
}
const set =new Set([location]);
const locations=Object.keys(location);
console.log(locations);
const inLocation=locations.every((e)=>e>10);
console.log(inLocation);// false





