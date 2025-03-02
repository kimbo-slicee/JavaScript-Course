/*
* - Date and Time
* - setTime(Millisecond)
* - setDate()=>Day of the Month [Negative and Positive value ]
* - setFullYear(year,month[optional=>(0,11)],day[optional=>(1,31)])
* - setMonth()
* - setHours()
* - setMinutes()
* - setSeconds()
* */
const now =new Date();
console.log(now);
console.log("###".repeat(10))
// setTime
now.setTime(0);
console.log(now)
console.log("###".repeat(10))
// setDate
now.setDate(10)
console.log(now)
console.log("###".repeat(10))
now.setDate(0) // if the argument is 0 return the last day in the last month
console.log(now)
//setFullYear
const date=new Date("Sept 01,2000");
date.setFullYear(2024,15,-30);// 2025-03-01T00:00:00.000Z
console.log(date)