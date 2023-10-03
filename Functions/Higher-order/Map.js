/*
Higher Order Function 
---> is a function That Accepts functions As Parameters And/or returns a Functio.
--------------Map-----------
---[1]: methode creates a new array 
---[2]: Populated with the results Of Calling a provided Function on every element
---in the calling array.

----yntax Map(callBackFunction(Element,index,Array){},ThisArg)
----Element------>The Current Element beung Processe in the Array.
----Index------>The Index oF currrent Element Processe in the Array.
----Array---->The Current Array

----Notes 
---Map Return A New Array

*/ 
let Nums=[1,2,3,4,5,6];
let NArr=[];
let result;
for(let i=0 ; i<Nums.length ; i++){
   NArr.push( Nums[i]+Nums[i])

}
console.log(NArr)
// Same Idea With Map 
let teste=Nums.map((ele,i)=>ele+ele );
console.log(teste)
// adveced exemple
function addition(ele){
    return ele + ele 
}
let add =Nums.map(addition)
console.log(add)
/*
Map 
----Swap Cases 
----Inverted numbers
----Ignore Boolean Value
*/ 

// [1]:Swap Cases 
let SwappingCases='MOhammED';
let E1=SwappingCases.split('').map(ele=>ele===ele.toUpperCase()?ele.toLowerCase():ele.toUpperCase()).join('');
console.log(E1)
//[2]:Inverted numbers
let InvertedNumbers=[1,-10,-20,15,100,-30];
let E2=InvertedNumbers.map(ele=>-ele)
console.log(E2)
//[3]:Ignore Numbers 
let IgnoreNumbers='El123aou4r5i';
let E3=IgnoreNumbers.split('').map(ele=>isNaN(ele)?ele:'').join('')
console.log(E3);

