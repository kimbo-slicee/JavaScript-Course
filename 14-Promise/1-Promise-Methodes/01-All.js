/*
* Promise.all() Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
* */
// Example
let user=[

    {
        name:"userName",
        age:1,
        add:{
        lineno:"Add Example",
        lineTwo:"add Example"
    }}
    ,{
            name:"userTwo",
            age:2,
            add:{
                lineno:"Add Example",
                lineTwo:"add Example"
            }
        }
    ,{
        name:"userThree",
        age:3,
        add:{
            lineno:"Add Example",
            lineTwo:"add Example"
        }}
]
function firstTask(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data.length<0){
                reject(Error("There is no User"))
            }
            resolve(data)
        },1000)
    })
}
function secondTask(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let youths=data.filter(user=>user.age>=20)
            if(youths.length){
                resolve(youths)
            }else {
                reject(youths)
            }
        })
        },3000)
}
function taskmaster(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let youths=data.filter(user=>user.age>=20)
            if(youths.length){
                resolve(youths)
            }else {
                reject(youths)
            }
        })
    },3000)
}
Promise.all([firstTask(users), secondTask(users), taskmaster(users)]).then((data)=>{
    console.log(data);
})
