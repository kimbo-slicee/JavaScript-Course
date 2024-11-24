/**
 1. Create a variable called carName and assign the value Volvo to it.
 2. create 3 variables Title Description Date
  - all in one statement
  - variables name must be Two words
  - Title Content userName
  - Description content is "javaScript quotes"
  - Date content is your local Date search for Date object in javascript and use it
 3. Create Variable Contents Div and this Div Contains H3 for Title
  - p for paragraph
  - span for time
  - add this Card To Page 4 times
 */

var MainTitle='UserName',
    MainDesc='javaScript full stack Web developer',
    MainDate=new Date.now();
    var div=`<div class="Card">
            <H3> hello ${MainTitle}</H3>
            <p>${MainDesc} </p>
            <span>${MainDate}</span>
            </div> `
document.write(div.repeat(3));  
