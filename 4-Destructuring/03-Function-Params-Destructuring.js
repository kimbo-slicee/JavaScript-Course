/*
* Function Params Destructuring
*
* */
const user={
    name:"me",
    phone:"+1 23 433 677",
    job:"Software Engineer",
    address:"Here",
    skills:{
        HTML:"100%",
        CSS:"80%",
        JAVASCRIPT:"70%",
        TYPESCRIPT:"50%"
    }
}
// Simple Params
function showDetails(user){
    return `hello i'm ${user.name} I'm ${user.job} and I leave in ${user.address} my progress in Html is ${user.skills["HTML"]}`
}
console.log(showDetails(user));
// let's use Destructuring
function showDetailsDestructuring({name:n,phone:p,skills:{HTML:h,CSS:c}}){
    console.log(n)
    console.log(p)
    console.log(h)
    console.log(c)
}
showDetailsDestructuring(user);
const employ ={
    theName:"John Doe",
    theAge:22,
    skills: ["HTML","CSS","JAVASCRIPT","TYPESCRIPT"],
    address: {
    address_one:"John Doe, 456 Elm Street, Suite 3",
    address_Two:"Los Angeles, CA 90001, USA."
    }
}
function distractEmploy({theName:name,theAge:age,skills:[a,b,c,d],address:{address_one:addOne,address_Two:addTwo}}) {
    return `Hello I'm ${name} I ${age} Years Old.I'm The new Employ I live in ${addOne} ${addTwo} , I'm  passion about Coding my Skills are ${a}-${b}-${c}-${d}`
}

console.log(distractEmploy(employ))