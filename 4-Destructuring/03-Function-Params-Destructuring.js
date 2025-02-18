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
function showDetailsDestructring({}){

}