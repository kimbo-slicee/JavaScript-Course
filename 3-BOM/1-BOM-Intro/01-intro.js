/*
* BOM [Browser Object Model]
* Intro
* --- Window Object Is the Browser Window
* -----Window Contain The Document Object
* -------All Global Variables And Objects And Functions Are Members Of Window Object
* --------Test Document And Console
* -----What can we do withe the Window Object
* -----Open Window
* -----Close Window
* -----Move Window
* -----Resize Window
* -----Print Document
* -----Run Code After Period of Time Once or more
* -----Fully Control The Url
* ----- save Data Inside Browser To user Later or when we load page
* */
// access to the title
window.document.title="Hello world!"
//output message  Alert, Confirm, Prompt
window.alert("Hello World !");
this.alert("This");
alert("Alert");
// confirm
let confirm =window.confirm("Continue...")// Boolean value
let prop=window.prompt("Hello world ","it's me ...")