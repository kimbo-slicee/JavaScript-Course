let firstName="userName";
let lastName="family Name";
let fullName=firstName+ " " + lastName// concat first name and space and last name
console.log(fullName);
console.log(fullName,lastName)
//
let a='I \'Love';
let b='programming ';
let c='And';
let d='Machine learning ';
console.log(a +' ' + b + ' ' + "\n" + c + "\n" + d);
/**
 # Template Literals ES6
 ### Template Literals Syntax
 `${a} + ${b} +${c}`
*/
let TemplateLiterals=`hello ${a} ${b}`;
console.log(TemplateLiterals);
// Template Literals vs String concatenation

const markUp=`
<div class="card">
<div class="child">
<h2>Title</h2>
<p>Paragraph</p>
</div>
</div>
`
document.write(markUp);
// legacy code
var markUp = "\n<div class=\"card\">\n<div class=\"child\">\n<h2>Title</h2>\n<p>Paragraph</p>\n</div>\n</div>\n";
document.write(markUp);