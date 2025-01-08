//Challenge 1: User age

/*
1. Our business wants to keep track of what range a user falls into.
2. If they are 12 or younger log 'child'.
3. If not a child but user age is under 20 log 'teenager'.
4. If neither log 'adult'.
*/
/*
  1. Look at the examples below and see if you can guess the correct answer.
*/
console.log(10 === 10 && 5 < 4);
console.log(10 === 10 || 5 < 4);
console.log((5 >= 5 || 4 < 4) && 3 + 2 === 5);
// Challenge 2: Convert if-else to Ternary Operator
let score = 85;
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}
console.log(grade);
/*solution */
grade=score >=90?"A":score>=80?"B":"C";
console.log(grade);
// Challenge 3: Convert Nested if-else to Single Condition
/*Goal: Simplify the nested conditions into a single if statement using logical operators.*/
let age = 20;

if (age >= 18) {
    if (age >= 21) {
        console.log("You are an adult and can drink alcohol.");
    } else {
        console.log("You are an adult but cannot drink alcohol.");
    }
} else {
    console.log("You are a minor.");
}
/*solution */
if (age>=18 && age<21){
    console.log("You are an adult but cannot drink alcohol.");
}else if(age>=21){
    console.log("You are an adult and can drink alcohol.");
}else {
    console.log("You are a minor.");
}
// Challenge 4: Use Short-Circuiting Instead of if
/*Goal: Rewrite the code using short-circuiting (&& and ||).*/
let isLoggedIn = true;
let username = "user_1";
if (isLoggedIn) {
    console.log("Welcome " + username);
} else {
    console.log("Please log in.");
}
/*solution */
isLoggedIn && console.log("Welcome " + username) || console.log("Please log in.");
//Challenge 5: Combine Multiple if Statements
/*Goal: Combine the if statements into a single structure (e.g., if-else or switch).*/
let temperature = 25;
if (temperature < 0) {
    console.log("It's freezing!");
}
if (temperature >= 0 && temperature < 20) {
    console.log("It's cold.");
}
if (temperature >= 20 && temperature <= 30) {
    console.log("It's warm.");
}
if (temperature > 30) {
    console.log("It's hot.");
}
/*solution */
if (temperature<0){
    console.log("It's freezing!");
}else if(temperature>=0 && temperature<20){
    console.log("It's cold.");
}else if(temperature>=20 && temperature<=30) {
    console.log("It's warm.");
}else if (temperature>30){
    console.log("It's hot.");
}else {
    console.log("It's normal.");
}
// Challenge 6: Convert Multiple Conditions to a Single if Statement
/*Goal: Goal: Refactor to reduce redundancy using an array or logical operators.*/
let day = "Monday";
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
} else if (day === "Monday" || day === "Tuesday") {
  console.log("Start of the work week.");
} else {
  console.log("Midweek vibes.");
}
/*solution */
day === "Saturday" || day === "Sunday" && console.log("It's the weekend!") || day === "Monday" || day === "Tuesday" && console.log("Start of the work week.") || console.log("Midweek vibes.");