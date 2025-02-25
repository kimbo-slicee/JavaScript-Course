/*
* - n+   => One Or More
* - n*   => zero or more
* - n?   => zero or one
* - n{x} => Number of
* - n{x,y} => Range
* - n{x,}  => At Least x
* - $  => End With SomeThing
* - ^  => Start With Something
* - ?= => Followed By Something
* - ?! => Not Followed By Something
* */
const emails=["o@nn.sa","me@gmail.com","javascript@course.info","hel#l3oworld@gmail.com","blablahahah@gmail.com"];
const nums=["+10101010150","+2022930303030","0982749#020","+21290223450"];
const urls=["https://google.com","https://www.javaScript.com","web.com"];

emails.forEach((e)=>{
// let check the valid email using regex pattern
    const re=/\w+\D*[^#$%^&*)(_+]@\w+\.\w+/g
    console.log(e.match(re))
})
//check Phone Validation
nums.forEach((e)=>{
    const regex=/\+\d*[^@#$%^&*(_]/g
    console.log(e.match(regex));
})
// check url Validation
urls.forEach((e)=>{
    const regex=/(https:?\/\/)?(www.)?\w+\.\w+/igm;
    console.log(e.match(regex))
})
// Serials
let serials="S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/ig))// S [Three Numbers]S
console.log(serials.match(/s\d{1,5}s/ig))// S [four or five Number]S
console.log(serials.match(/s\d{4,}s/ig))// S [At Least Four]S
//
let str="We Love Programming";
let nams=["user_One","10user_twoZ","4Us10er_three20","userName"];
//
console.log(/ing$/ig.test(str))
console.log(/^we/ig.test(str))
// check the name validation

