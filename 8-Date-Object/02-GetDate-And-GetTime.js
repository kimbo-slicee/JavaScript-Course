/*
* Date and Time
* - getTime()=> Number Of Milliseconds
* - getData()=> Day Of The Month
* - getFullYear()
* - getMonth() => Zero Based
* - getDay() => Day of the week
* - getHours()
* - getMinutes()
* - getSeconds()
* */
let date=new Date();
let birthDaya=new Date("10-10-2001");
// the current Date
console.log(date)
// age
let age =parseInt((date-birthDaya)/1000/60/60/24/365)
console.log(age);//23
// getTime
console.log(birthDaya.getTime());// return time in Mill second
// getData
console.log(birthDaya.getDate());// 10 in the month
// getFullYear
console.log(birthDaya.getFullYear())//2001
// getMonth
console.log(date.getMonth())//0 based index
// getDay
console.log(date.getDay())// day if the week start from sunday withe index 0
// getHours
console.log(date.getHours())//return hours
// get seconds
console.log(date.getSeconds())

