/*
* - In programming, inheritance refers to passing down characteristics from a parent to a child
* so that a new piece of code can reuse and build upon
* the features of an existing one.
*
* */
class Parent{
    name;
    age;
    address;
    constructor(name,age,address) {
        this.name=name;
        this.age=age;
        this.address=address;
    }
    // Parent Methode
        sayHello(){
            console.log("hello Kids")
        }
}
class FirstChild extends Parent{
    // super invoke parent constructor
    constructor(name,age,address,school) {
        super(name,age,address);
        this.school=school;
    }
    // change parent inherited methode
    sayHello() {
        console.log("hello Parents")
    }
}
const child=new FirstChild("child",10,"Home","Cartoon Network")
child.sayHello()
// Real word Example
class User{
    fullName;
    email;
    Password;
    constructor(fullName, email, Password) {
        this.fullName = fullName;
        this.email = email;
        this.Password = Password;
    }
    // methode
    login(email,pass){
        if(email!==this.email || pass!==this.Password){
            console.log("user Doesn't exist")
            return;
        } else {
            console.log("login successfully")
        }

    }
}
class Admin extends User{
    authorization;
    constructor(fullName,email,password,authorization) {
        super(fullName,email,password);
        this.authorization=authorization;
    }

}

const admin=new Admin("me","me@gmail.com","1234",true);
console.log(admin)
admin.login("me@gmail.com","123487")