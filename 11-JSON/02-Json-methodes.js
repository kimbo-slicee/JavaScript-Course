/*
* - Converting between objects and text using JSON.parse() and JSON.stringify().
* */
const jsonFileFromServer=`{
"book": {
      "category": "web",
      "cover": "paperback",
      "title": {
        "lang": "en",
        "text": "Learning XML"
      },
      "author": "Erik T. Ray",
      "year": "2003",
      "price": "39.95"
    }
  }`
console.log(JSON.parse(jsonFileFromServer))// return JS Object
const userObject ={
    userName:"me",
    userAge:"age",
    useradd:"No where!"
}
console.log(JSON.stringify(userObject));// return JSON Object