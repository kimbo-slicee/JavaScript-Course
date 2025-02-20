/*
* Challenge
*
* */

let chosen =1;
let friends=[
    {name:"friend_One",age:30,available:true,skills:["HTML","CSS"]},
    {name:"friend_Two",age:23,available:false,skills:["Python","Django"]},
    {name:"friend_Three",age:34,available:true,skills:["PHP","Laravel"]},
]
function showMyFriends(counter,[a,b,c]){
    switch (counter) {
        case 1:
            let {name:n1,age:a1,available:ava1,skills:[,s1]}=a
            return `Hello I'm ${n1} and I ${a1} Years Old, I'm ${ava1?"available":"not available"}, I can work with ${s1}`
        case 2:
            let {name:n2,age:a2,available:ava2,skills:[,s2]}=b
            return `Hello I'm ${n2} and I ${a2} Years Old, I'm ${ava2?"available":"not available"}, I can work with ${s2}`
        case 3:
            let {name:n3,age:a3,available:ava3,skills:[,s3]}=c
            return `Hello I'm ${n3} and I ${a3} Years Old, I'm ${ava3?"available":"not available"}, I can work with ${s3}`
        default:
            return "I don't this Friends in my friends List"
    }
}

console.log(showMyFriends(chosen,friends));