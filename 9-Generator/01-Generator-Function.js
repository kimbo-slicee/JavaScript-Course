/*
* - Generators
* - Generator Function Run It's Code When Required
* - Generator Function Return Special Object [Generator Object]
* - Generators are Iterable
* */
function* numberGenerator() {
    yield 1
    console.log("First Yield !")
    yield 2;
    console.log("second Yield !")
    yield 3
    console.log("third Yield !")
}
const gen=numberGenerator();
console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);
console.log(gen.next().done);
for (let value of numberGenerator()) {
    console.log(value)
}
/**
 * An infinite iterator
 * With a generator function, values are not evaluated until they are needed. Therefore a generator allows us to define a potentially infinite data
 * structure.
 * */
function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

function* showMore(){
    const user={
        name:"Me",
        age:"22",
        job:"Developer"
    }
    yield user.name;
    yield user.age;
    yield user.job;
}

const me =showMore()
for (const value of showMore()) {
    console.log(value)
}
// Generators are great for generating sequences dynamically.
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];//Destructuring
    }
}

const fib = fibonacci();
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
// Implementing Custom Iterators
const iterableObj = {
    *[Symbol.iterator]() {
        yield "Hello";
        yield "World";
    }
};

for (let word of iterableObj) {
    console.log(word); // "Hello", "World"
}
