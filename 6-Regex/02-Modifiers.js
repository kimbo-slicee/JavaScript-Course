/*
* Regular Expression
* - Syntax
* - /pattern/modifier(s);
* - new RegExp ("pattern","modifier(s)")
* - modifier Flags
* - i => case insensitive
* - g => global
* - m => Multilines
* - Search methode Match
* - match(Pattern)
* -- Match
* - Match A String Against a Regular Expression
* - Return an Array with The Matches
* - Returns null if No Match Is Found .
* */
const text="Hello World, this The best JavaScript Course in the world without Narcissism 😎 ";
const text_2="let's discover the what is Regular Expression in javascript"
const regex=/World/igm;
console.log(text.match(regex))// [ 'World', 'world']
console.log(text_2.match(regex))// null
// also we can invoke the regex contracture to create pattern instance
const re=new RegExp("javaScript",'i');
console.log(text_2.match(re));//['javascript',index: 49]
