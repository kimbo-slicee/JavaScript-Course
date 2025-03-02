/*
* Date And Time
* - Date Constructor
* - static Methodes
* - To Track Time You Need Starting Point
* - Epoch Time Or Unix Time IN Computer Science Is The Number Of Seconds since January 1 , 1970
* - Coordinated Universal Time (UTC)
* - search For
* - Year 2038 problem in Computer Science
*/
// create Date Object
const date =new Date();
console.log(date)// 2025-03-01T17:58:06.498Z
// Unix time
console.log(Date.now())// 1740851940362 mill second
// second
const seconds =Date.now()/1000;
console.log(seconds)//1740852055.797
// minutes
const minutes=seconds/60;
console.log(minutes)// 29014202.172783334
// hours
const hours=minutes/60;
console.log(hours)//483570.05008388887
// Days
const days=hours/24
console.log(days)// 20148.752600671298
// years
const years=days/365
console.log(parseInt(years))//55 from 1970 to now 55 years old 


