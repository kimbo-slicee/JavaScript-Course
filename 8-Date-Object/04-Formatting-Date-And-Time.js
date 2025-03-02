/*
* Date And Time
* - New Date(timestamp)
* - New Date(Date String)
* - New Date(Numeric Values)
*  Date Format:
* ----"Oct 10 2000"
* ----"10/10/2000"
* ----"2000-10-10" ISO International Standard
* ----"2000 10"
* ----"2000"
* ----2000,10,10,0,0,0
* ----2000,10,10
* ----"2000-10-25T06:10:00Z"
* Date.parse("String")// Read Date From A String
*/
let now =new Date()
let birthDay=new Date("Oct 10 2000");
console.log(birthDay);// 2000-10-10T00:00:00.000Z
console.log(Date.parse("Oct 10 2000"))//971136000000
console.log(birthDay.getTime())//971136000000
console.log(Date.parse("Oct 10 2000")===birthDay.getTime())//   true
