/*
* Regular expression challenge
* write a pattern that's allows you to return all the URLs
* */
let urls=[
    "https://developer.mozilla.org/",
    "google.com",
    "http://google.com",
    "https://google.com",
    "https://www.google.com",
    "https://www.google.com:8000/articles.php?id=100&cat=topics"]
const regex=/(htpps:\/\/\d*)?(www.)?\w+.\w+/g;
urls.forEach((e)=>{
    console.log(e.match(regex));
})
// Basic Matching: Match a specific word: Write a regex to match the word "JavaScript" in a given string.
let regexPattern = /_____/
console.log(regex.test("I love JavaScript!")); // true
// Case-insensitive match: Modify the previous regex to match "JavaScript" regardless of letter casing.
regexPattern=/JavaScript/i;
console.log(regex.test("I love JavaScript!"));
// Character Classes
// Match any vowel: Write a regex to match any vowel (a, e, i, o, u).
let vowelRegex = /[aeiou]/g
console.log("announce".match(vowelRegex));//[ 'a', 'o', 'u', 'e' ]
console.log(vowelRegex.test("announce"));
//  Write a regex to find all numbers in the string "Order number: 24587"
console.log("Order number: 24587".match(/\d+/ig));
// Find words of exactly 5 letters: Write a regex to match only words that have exactly 5 letters.
let fiveWords = /_____/
fiveWords=/\w{4,}/g
console.log("I am happy!".match(fiveWords)); // ['happy']
// Anchors
// Match a string that starts with "Hello": Write a regex that checks if a string starts with "Hello".
// Match a string that ends with "!": Write a regex that checks if a string ends with "!".
console.log("Hello world !".match(/^Hello/g));
console.log("Hello world !".match(/!$/g));
//  Extract the domain from an email: Write a regex to extract "gmail.com" from "user@gmail.com".
console.log("user@gmail.com".match(/@\w+.\w+/ig))


