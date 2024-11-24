let x=10;
console.log(x++);// post increment after printing  10
console.log(++x);// pre increment before printing 12
// in the loop section we will use increment and
let likes =100;
// Real Example: in instagram if i like a post i click Like and post likes number increment by one  and if i remove
// my like the post likes decrement by one so let's create a function that's do that;
const incrementLikes=_=>likes++;
const decrementLikes=_=>likes--;
// the million dollar Question why I used post increment 👀
document.addEventListener('click',()=>{
    if("I like Post ") incrementLikes();
    else if ("i don't like Post")decrementLikes();
})