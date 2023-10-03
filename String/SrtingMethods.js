/*
--String Methods Part_1
--Access With Index 
--Access With CharAt()
--Lenght 
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
// lenght 
console.log(TheName.length)//  
let T='  user_2 ';
//lenght before Trim method
console.log(T.length)
//Trime 
 let T_trime=T.trim().length// end chen methode
// After trime 
console.log(T_trime)
let user_3='user_3';
/*
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
/*
-----String Methods Part_3----
---substring(Start[Mand],End[OPt]Not Including End)---
--- if Start position > End Then Will Swap numbers <> Slice
---Start < 0 It Start From 0
---Use Lenght To Get Last Character
--substr(start[Mand],Characters To Extract)
--Satrt >= Lenght = ""
--Negative Start From End 
--includes(Value[Mand] , Start[Opt] Default 0)[Es6]
--startwith(Value[Mand],Start[OPt] Default 0)[Es6]
--endswith(value[Mand],lenght[Opt] Default Full Lenght) 
*/ 
var Str_3='userName@gmail.com';
console.log(Str_3.substring(0,8))
console.log(Str_3.substring(8,0))//start>End
console.log(Str_3.substring(-8,8))//start>End
console.log(Str_3.substring(Str_3.length-10));
//substr
console.log(Str_3.substr(0,2));// the secend value is number of characters to extract 
// includes
let Str_4 ='userName';
console.log(Str_4.includes('Name'));
//endswith
console.log(Str_3.endsWith('.',15));


















