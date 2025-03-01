/*
* - classes Fields Are public By Default
* - Guards The Data Against Illegal Access
* - Helps To Achieve The Target Without Revealing Its Complex Details
* - Will Reduce Human Errors
* - Make The App More Flexible And Manageable
* - Simplifies The App
* - In JavaScript, the private keyword does not exist for defining private class fields. Instead, JavaScript uses the #
*   symbol to create private fields.
*/
class FileHandler {
    #fileName; // Private field

    constructor(name) {
        this.#fileName = name;
    }

    getFileName() {
        return this.#fileName;
    }
}

const file = new FileHandler("data.txt");
console.log(file.getFileName()); // ✅ Works: "data.txt"
// console.log(file.#fileName); // ❌ SyntaxError: Private field '#fileName' must be declared in an enclosing class

class User{
    // Private Property
    #e;
    #password
    constructor(id,username,eSalary,password) {
        this.id=id;
        this.username=username;
        this.#e=eSalary;
        this.#password=password
    }
    getSalary(){
         return parseInt(this.#e);
    }
    // privet methode in the parent Class
    #checkPass(){
        const regex=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
        if(regex.test(this.#password)) return "valid Password !"
        else return "Password note Valid "
    }

}
const user= new User(1,"me",5000)
console.log(user)// { id: 1, username: 'me' } there is no eSalary bcs it's private property
console.log(user.getSalary()*0.3);
// How Private Field behave withe inheritance


/*
* Important Note
* - Private properties are not part of the prototypical inheritance model
* - since they can only be accessed within the current class's body and aren't inherited by subclasses.
*/

class Parent {
    private processData() { // ❌ Private: Cannot override
        console.log("Processing data in Parent...");
    }

    public execute() { // ✅ Public method calls private method
        this.processData();
    }
}

class Child extends Parent {
    private processData() { // ❌ This does NOT override the parent's method!
        console.log("Processing data in Child...");
    }

    public execute() { // ✅ Override the wrapper method instead
        console.log("Child modifying behavior...");
        super.execute(); // Calls Parent's `execute`, which calls the private method
    }
}

const obj = new Child();
obj.execute();
// Output:
// Child modifying behavior...
// Processing data in Parent...

