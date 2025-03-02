/*
* Delegate Generator
*
*/
function* genNums(){
    yield 1;
    yield 2;
    yield 3;
}
function* genLetters(){
    yield "A";
    yield "C";
    yield "D";
    yield "E";
}
function* delegateGen(){
    yield* genNums()
    yield genLetters()
    yield [1,2,3,4,5,6,7,8];
}

for (const value of delegateGen()) {
    console.log(value)
}
