/*
* Track Operations Time
* performance.now();
* performance.mark();
*/
const start = Date.now();
const startPer=performance.now();
console.time("loop")
let counter=0
for (let i = 0; i <1000000000 ; i++) {
    counter++
}
const endPer=performance.now();
console.timeEnd("loop")// Execution Time
const end = Date.now();// Execution time: 1341 ms
console.log(`performance ${endPer-startPer}`);//performance 1116.009700000286
console.log(`Execution time: ${end - start} ms`);


