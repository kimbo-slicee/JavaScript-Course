/*
* Regular Expression
* Ranges
* - (X|Y) => X or Y
* - [0-9] => 0 To 9
* - [^0-9] => Any Character Not 0 to 9
* - [a-z]
* - [^a-z]
* - [A-Z]
* - [^A-Z]
* - [abc]
* - [^abc]
* */
const topLevelDemain ="Com Net Org Info Code Io";
const regex=/(com|info|net)/igm;
const webSite="https://google.com";
console.log(webSite.match(regex));
// check phone number
let phoneNumber= "+1223443292";
const re=/[0-9]/g; //not numbers
console.log(phoneNumber.match(re))
const userPhone="+1234@55#563@78";
console.log(userPhone.match(/[^0-9]/g));
// Practice
const emailProviders="gmail Outlook Yahoo"
const email="userName.UserLastName@gmail.com";
const pattern=/[a-z]@(gmail|outlook|yahoo).(com|info|net)/igm
console.log(email.match(pattern));
//
let str="AaBbcefG123!234%^&*";
let lowercaseStr=str.match(/[a-z]/g)
console.log(lowercaseStr)// [ 'a', 'b', 'c', 'e', 'f' ];
let notLowercaseStr=str.match(/[^a-z]/g);
console.log(notLowercaseStr);
let uperCaseStr=str.match(/[A-Z]/g);
console.log(uperCaseStr)// [ 'A', 'B', 'G' ]
console.log(str.match(/[a-zA-Z]/g))
console.log(str.match(/[^a-z]/ig));
console.log(str.match(/[^a-z0-9]/ig));
console.log(str.match(/[^a-z^0-9]/ig));

