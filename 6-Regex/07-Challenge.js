/*
* Regular expression challenge
* write a pattern that's allows you to return all the URLs
* */
let urls=[
    "https://developer.mozilla.org/",
    "google.com",
    "http://google.com",
    "https://google.com",
    "https://www.google.com",
    "https://www.google.com:8000/articles.php?id=100&cat=topics"]
const regex=/(htpps:\/\/\d*)?(www.)?\w+.\w+/g;
urls.forEach((e)=>{
    console.log(e.match(regex));
})
