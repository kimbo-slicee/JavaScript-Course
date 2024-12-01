/**
--String Methods
--Access With Index 
--Access With CharAt()
--Length
--Trim()
--toUpperCase()
--ToLowercase()
--Chain Methods
*/

let TheName='User_1';
//access withe Index 
console.log(TheName[1])// s
//end we can use 
console.log(TheName.charAt(1))
// length
console.log(TheName.length)//  
let T='  user_2 ';
//length before Trim method
console.log(T.length)
//Trime
 let T_trime=T.trim().length// end chen methode
// After trime
console.log(T_trime)
let user_3='user_3';
/**
-----String Methods Part_2----
[Mad]==[mandatory] | [Opt]==[optional]
----indexOf(Value[Mand],Start[Opt])
----LastIndexOf(Value[Mand],Start[Opt]Lenght)
----slice(Start[Mand],End[opt] Not Include End);
----repeat(Times)[Es6]-----------------
----Split(separator[opt],Limit[opt] retune array  )
*/ 
let Str='hello world!';
//indexOf
console.log(Str.indexOf('o'));//4
console.log(Str.indexOf('f'));//undifinde return -1 
//LastIndexOf
console.log(Str.lastIndexOf('o'))//7
//Slice
str_2='Lorem ipsum is a placeholder text';
console.log(str_2.slice(0,5))
// Start form the end 
console.log(str_2.slice(-5,-2))
// repeat
console.log('Lorem'.repeat(10));
// split
console.log(str_2.split("",5))
/**
-----String Methods Part_3----
---substring(Start[Mand],End[OPt]Not Including End)---
--- if Start position > End Then Will Swap numbers <> Slice
---Start < 0 It Start From 0
---Use Length To Get Last Character
--substr(start[Mand],Characters To Extract)
--Start >= Length = ""
--Negative Start From End 
--includes(Value[Mand] , Start[Opt] Default 0)[Es6]
--startWith(Value[Mand],Start[OPt] Default 0)[Es6]
--endsWith(value[Mand],end[Opt] Default Full Length)
*/
//substr

// substring Examples
let Str_3='userName@gmail.com';
let str="Learn JavaScript";
console.log(Str_3.substring(0,8))
console.log(Str_3.substring(8,0))//if the start bigger then the end substring will reverse the inputs so in
// this Example SubString Will start from index 0 to index 7 bcs the function not including the end
console.log(Str_3.substring(-8,8))//if the start is negative input that's tell the function to start from index zero
console.log(Str_3.substring(Str_3.length-10));
console.log(str.substring(0,10));//Learn Java:but now we Learn JS haha
console.log(str.substring(0,str.length));
let newStr=str.substring(-10,str.length);// in subString we start withe negative value that's will start form index 0
console.log(newStr)
//Important Note:
// The slice function can start counting even if the input is a negative value, whereas the substring function accepts only positive values.
// substr Example
console.log(Str_3.substr(0,2));// the second value is number of characters to extract
let substrVariable="Extra Perfect Numbers";
console.log(substrVariable.substr())// important note guys: that's the Substr function it's now Deprecated
//that's mean  This feature is no longer recommended. Though some browsers might still support it.
const aString = "Mozilla";
console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
// includes
let Str_4 ='userName';
console.log(Str_4.includes('Name'));
//endswith
console.log(Str_3.endsWith('.',15));

















