/*
* The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
* Notes: Only One Allowed and it must be the Last param
* */
function calc(...nums){
    let res=0;
    for(let i=0;i<nums.length;i++){// type of nums is an Array
        res+=nums[i]
    }
    return res;
}
console.log(calc(39,55,66,77,85,2,21));
function createNewUser(name,age,email,...skills){
   console.log( `Hello I'm ${name} and I'm ${age}
    Contact me For Collaborations ${email} 
     my skills are ${skills.join(" ")}
    `)
}
createNewUser("Jon",18,"no-Reaplay@gmail.com",["HTML,CSS,JAVASCRIPT,TYPESCRIPT"])