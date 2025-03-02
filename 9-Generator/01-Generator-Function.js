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