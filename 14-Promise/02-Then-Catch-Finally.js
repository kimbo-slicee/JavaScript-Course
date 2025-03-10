/*
* - Then => 14-Promise Is successful Use The Resolve Data
* - Catch => 14-Promise Is Failed,Catch The Error
* - Finally => 14-Promise Successfully Or Failed Finally Do Something
* */
const promise=new Promise((resolve, reject)=>{
    let users=["user_1","user_2","user_3","user_4"];
    if(users.length>2){
        resolve(users)
    }else {
        reject(Error("There is no User In DB"))
    }
});

promise.then((data)=>{
     data.length-=1;
     return data;
}).catch(err=>console.log(err)).then((data)=>{
    data.length-=2;
    return data;
}).catch(err=>console.log(err)).then((data)=>{
    data.length-=1
    return data
}).catch((err)=>console.log(err)).finally((data)=>{
    console.log("data")
});
