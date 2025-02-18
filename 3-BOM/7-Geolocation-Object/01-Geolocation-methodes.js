/*
* Note : Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting
*  browsers. The Geolocation API allows the user to provide their location to web applications if they so desire.
* For privacy
* reasons, the user is asked for permission to report location information.
* WebExtensions that wish to use the Geolocation object must add the "geolocation" permission to their manifest. The
* user's operating system will prompt the user to allow location access the first time it is requested.
* ---geolocation
* ---Geolocation.getCurrentPosition():
* ---Geolocation.watchPosition():
*
*
* */

console.log(navigator.geolocation);
console.log(Geolocation.getCurrentPosition());
let userLocation=new Geolocation();
userLocation.watchPosition((location)=>{
    /*Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.*/
    console.log(`user Location in Here !` )
    return location;
});
