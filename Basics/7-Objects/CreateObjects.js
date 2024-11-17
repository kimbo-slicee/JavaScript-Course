/*
---object---
---Create Withe New KeyWord new Object();
*/ 
let user ={};
console.log(user);
user.userAge=38;
user['userName']='user';
user.userM=function(){
    return `hello ${this.userName}`
}
console.log(user.userM());
let newObj=new Object({userName:'userName'});
/*--------Create Object With Create Method---------*/ 
let user01={
    userName:'user',
    userAge:1,
    //methods 
    F1:function(){
        return this.userAge + 2;
    }
}
let user001=Object.create(user01);
console.log(user001) 
console.log(user001.userName)  
user001['userAge']=3
console.log(user001.userAge)
console.log(user001.F1())  
/*--------------Create Object With Assign Method---------------*/
let O1={
    Name:'O1',
    Age :1,
    M1:function(){
        return this.Name;
    },
}
let O2={
    Name:'O2',
    Age :2,
    M2:function(){
        return this.Name;
    },
}
// Target Object 
let TO3={
    Name:'O3',
    Age :3,
    M3:function(){
        return this.Name;
    },
}
/*
=============================================================
Copy the values of all of the enumerable own properties from= one or more source objects to a target object. Returns the===
target object.===============================================
=============================================================
*/ 
// FinalObject
let FO=Object.assign(TO3,O2);
console.log(FO)
let FO1=Object.assign(TO3,O1);
console.log(FO1);








