/*
* A return statement ends the execution of a function, and returns control to the calling function.
* Key Word return
* Note we use return if we want to use the value returned by the function in another Place
* */

// in this example we create this function to transform number from odd numbers to pair we can do it also by adding
// +1
function multiply_by_two(num){
    return num * 2;
}
// check if pair or Odd
function pair_Odd(){
    // Here we are not Login the value we are return the value and use it
    if(multiply_by_two(10)%2===0){
        console.log("pair Number")
    }else {
        console.log("Odd Number")
    }
}
pair_Odd();