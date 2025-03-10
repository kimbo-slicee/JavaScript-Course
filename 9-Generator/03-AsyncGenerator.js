/*
* AsyncGenerator
* The AsyncGenerator object is returned by an async generator function and it conforms to both the async iterable protocol and the async iterator protocol.
* Async generator methods always yield 14-Promise objects.
* AsyncGenerator is a subclass of the hidden AsyncIterator class.
* syntax
* async function * nameOfTheGenerator(){
* yield await streams()
* }
*/

// An async task. Pretend it's doing something more useful
// in practice.
/*
* Async generator iteration
* The following example iterates over an async generator, logging values 1–6 to the console at decreasing time intervals.
* Notice how each time a 14-Promise is yielded, but it's automatically resolved within the for await...of loop.
*/
function delayedValue(time, value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), time);
    });
}

async function* generate() {
    yield await delayedValue(2000, 1);
    yield delayedValue(1000, 2);
    yield delayedValue(800, 3);
    yield delayedValue(500, 4);
    yield delayedValue(250, 5);
    yield delayedValue(200, 6);
    console.log("All done!");
}

async function main() {
    for await (const value of generate()) {
        console.log("value", value);
    }
}

main().catch((e) => console.error(e));
async function* fetchLargeDataset() {
    let page = 1;
    while (true) {
        const data = await fetch(`https://api.example.com/data?page=${page}`)
            .then(res => res.json());

        if (data.length === 0) break; // Stop when no more data

        yield data;
        page++;
    }
}

const gen = fetchLargeDataset();
gen.next().then(console.log); // Fetches first batch