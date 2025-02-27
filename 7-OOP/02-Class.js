/*
* - Description
* Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in
* JS are built on prototypes but also have some syntax and semantics that are unique to classes.
* --- class Declaration
*
* class MyClass {
* // class body...
* }
*
* ---- class Components
* + Kind: Getter, setter, method, or field
* + Location: Static or instance
* + Visibility: Public or private
* ---- Note:The body of a class is executed in strict mode even without the "use strict" directive.
* */
// Declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; the class is anonymous but assigned to a variable
const RectangleClass = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Expression; the class has its own name
const RectangleCla = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
/*
* Like function expressions, class expressions may be anonymous, or have a name that's different from the
* variable that it's assigned to. However, unlike function declarations, class declarations have the same
* temporal dead zone restrictions as let or const and behave as if they are not hoisted.
*/
const rectangle=new Rectangle(10,10);
console.log(rectangle)