/*
* 1. Nested Object
* 2. Complex interactive
* */
// Nested object means object in side object let's discover it
let employee={
   fullName:"Elon Reeve Musk",
   dateOfBirth:"June 28, 1971",
   company:["Tesla"," SpaceX"," X Corp"," Neuralink"," OpenAI","SolarCity"],
   netWorth:"$ 427 billion",
    //Nested Object
   address:{
       lineOne:"Pretoria (administrative capital) South Africa ",
       lineTwo:"Kingston, Ontario, Canada",
   },
   Children:["Vivian Jenna Wilson","Kai Musk","Damian Musk","Saxon Musk","Nevada Alexander Musk"],
    // methode
    calcAge:()=>{
       /*In this function want to calc Elon Age,
        so the common way to calculate age it's by subtracting
        the day of birth by the current Date so let's implement this algorithm
       */
       let currentDay=new Date();
       let dayOfBirthe= new Date(employee.dateOfBirth);
       let ageInMs = currentDay-dayOfBirthe// Age in milliseconds
       const age = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365.25)); // Include leap year adjustment
        console.log(age);
        return age; // Return the age
    }
}

employee.calcAge()
// Complex example
let product={
 name:"iPhone 12 Pro Max",
 brand:"Apple",
 category:"Phones",
 price:"500 USD",
 color:["Blue","Silver","Graphite","Gold","Pacific Blue"],
 capacity:["128GB","256GB","512GB"],
 operatingSystem:"iOS 16",
 BatteryInfo:{
     removableBattery: "No",
     wirelessCharging: "Yes"
 },
    // nested Object
 size:{
     Width: "3.07 inches (78.1 mm)",
     Height: "6.33 inches (160.8 mm)",
     Depth: "0.29 inch (7.4 mm)",
     Weight: "8.03 ounces (228 grams)",
 },
 CameraInfo:{
     FrontFacingCamera: '12MP',
     RearFacingCamera: "12MP Ultra Wide, Wide, and Telephoto lenses",
     VideoRecorder: "4K video recording at up to 60 fps"
 },
    faceID:"Enabled by TrueDepth camera for facial recognition",
 // Phone properties
 phone:()=>{
        return `
        <h1>product name ${product.name}</h1> 
        <h3>Brind ${product.brand} </h3>
        <p>price ${product.price}</p> 
        <p>colors ${product.color.join(" | ")}</p>
`
 }
// assignment : Create Html card index html and Add some Css styling then Complete showing product Info
}
