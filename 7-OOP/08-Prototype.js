 /*
* - Introduction
*   Prototypes are The Mechanism By which JavaScript Objects
*   Inheritance Feature From One another
*/
 class User {
    name;
    age;
    constructor(name,age) {
     this.name=name;
     this.age=age;
    }
    hello(){
     console.log("hello world!")
    }
 }
 //
const user =new User("me",20);
console.log(user);
// user
 User.prototype.address="Here"
 User.prototype.love="JavaScript";
 console.log(User.prototype);
 console.log(Object.prototype.love);//undefined
// calcAge func
Object.prototype.calcAge=(age)=>{
    return age*24;
}
// invoke calc Age using user object
 console.log(user.calcAge(20));
// ProtoType Chain