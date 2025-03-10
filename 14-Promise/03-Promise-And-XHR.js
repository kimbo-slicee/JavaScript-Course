/*
*  use Promises to handel XHR requests
* */
function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === XMLHttpRequest.DONE) { // Ensure the request is complete
                if (xhr.status >= 200 && xhr.status < 300) { // Ensure the request was successful
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(new Error(`Request failed with status: ${xhr.status}`));
                }
            }
        });

        // Handle network errors
        xhr.onerror = function () {
            reject(new Error('Network error occurred'));
        };

        // Send the request
        xhr.send();
    });
}

// Correct function call
fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
