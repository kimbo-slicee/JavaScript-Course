// /*
// for loop syntax
// [1]:the index or the start
// [2]:the condition
// [3]:the iteration
// NOTE: At first, these concepts may seem confusing, but I assure you that with practice, they will become easy to understand.
// for([1];[2];[3]){
// // Block Of Code
// }
// */
// Example
let users=["user_1","user_2","user_3","user_4","user_5"]
/**
 To print each element of the array, we use indices, such as users[0] = "user_1". By incrementing the index, we can access the next element, like users[1] = "user_2". However, manually indexing hundreds of elements is impractical, so we employ loops."""One common way to loop through an array
  is by using a for loop. For instance, we can set up a loop that iterates from 0 to the length of the array. Each
  iteration allows us to access each element sequentially,
 **/
// i<users.length if this condition is ture loop will execute intel this condition=false
for(let i=0;i<users.length; i++){
    console.log(users[i]);
}

// Real Example
let productsList=["keyBoard","Mouse","Pen","Pad","Monitor"];
let colors =[ "Red ", "Pink " ,"Orange" , "Yellow" ,"Purple" , "Green" , "Blue ", "Brown" ,"White","Gray, "]
for(let i=0;i<productsList.length;i++){
    document.write(`<h4>${productsList[i]}</h4>`)
    // Nested Loop To show Products Colors
    document.write(`<h6>Available Colors</h6>`)
    for(let i=0;i<colors.length ; i++){
        document.write(`<p>${colors[i]}</p>`)
    }
}
// Select Years 1990-2025 (advanced Example)
// Create a div element and append it to the body
// Create a div element and append it to the body
const div = document.createElement("div");
document.body.append(div);

// Create a select element
const select = document.createElement("select");

// Add some styles to the select element
select.style.width = "200px";
select.style.padding = "10px";
select.style.border = "2px solid #007BFF";
select.style.borderRadius = "5px";
select.style.backgroundColor = "#F0F8FF";
select.style.color = "#333";
select.style.fontSize = "16px";
select.style.cursor = "pointer";

// Create options for years from 1990 to 2025
for (let i = 1990; i <= 2025; i++) {
    const option = document.createElement("option"); // Create a new option element
    option.setAttribute("value", String(i)); // Set the value attribute
    option.innerText = String(i); // Set the display text
    select.appendChild(option); // Append the option to the select element
}

// Append the select element to the div
div.appendChild(select);




