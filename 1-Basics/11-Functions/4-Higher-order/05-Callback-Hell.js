/*
* Pyramid of Doom, also known as Callback Hell!
* This happens in JavaScript when multiple nested callbacks are used, making the code difficult to read and maintain. It
* often looks like a pyramid due to excessive indentation. Here's an example:
*/
// Example of Call Back Hell
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3");
        callback();
    }, 1000);
}

// Pyramid of Doom
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed!");
        });
    });
});
// Example Two :Handling Multiple Dependent API Calls
function getUser(userId, callback) {
    setTimeout(() => {
        console.log(`Fetched user ${userId}`);
        callback({ id: userId, name: "me" });
    }, 1000);
}

function getUserPosts(user, callback) {
    setTimeout(() => {
        console.log(`Fetched posts for ${user.name}`);
        callback(["Post 1", "Post 2"]);
    }, 1000);
}

getUser(1, (user) => {
    getUserPosts(user, (posts) => {
        console.log("User Posts:", posts);
    });
});
// Animating elements one after another using callbacks.
function animateElement(id, callback) {
    const element = document.getElementById(id);
    element.style.transform = "translateX(100px)";
    setTimeout(() => {
        element.style.transform = "translateX(0px)";
        if (callback) callback();
    }, 1000);
}

animateElement("box1", () => {
    animateElement("box2", () => {
        animateElement("box3");
    });
});

