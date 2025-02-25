/*
* - Regular Expression
* - Character Classes
* . => matches any characters, Expect new line terminators
* - \w => matches word characters. [a-z,A-z,0-9,And Underscore]
* - \W => matches Non Word character
* - \d => matches digits character from 0 to 9.
* - \D => matches non-digit character .
* - \s => matches whitespace character
* - \S => matches non whitespace character
* - \b => matches at the beginning or end of word
* - \B => matches NOT at the beginning or end of word
*/
// Example
const email="O@@@@g...com ODg.com O@g.net A@Y.com O-g.com M@s.org 1@1.com";
const userEmail="userEamil@gmail.com"
let dot =/./g
console.log(email.match(dot));
let word=/\w/g;
console.log(email.match(word));
// note words
let notWords=/\W/g;
console.log(email.match(notWords));
// valid email email@gmail.com|org
let valid =/\w@gmail.(com|org)/g
if(!userEmail.match(valid)){
    console.log("inValid Mail");
}else{
    console.log("valid Email")
}
let nams="hello word Spam 35pam in Spam4 spam5 javaScript Course";
