/*
* - Replace
* - ReplaceAll
* */
let text="we Love Programming And @ Because @ Is Amazing";
console.log(text.replace("@","JavaScript"))// the First One
console.log(text.replaceAll("@","JavaScript"))// the First One
let userAdd="123 Elm Street, Apt 4B Los Angeles, CA 90001 USA";
console.log(userAdd.replaceAll(/\s+/ig,"_"));