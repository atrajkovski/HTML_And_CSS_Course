/*
multiline
*/

 // console.log("Aleksandra");

//Global variable
let lname = "Trajkovski";

 function  Firstname(firstname) { // start of block scope
    // Local Variable
    let fname = firstname;
    /*This function is concatinating two
    strings with empty space between.
    */
    console.log(fname + " " +lname);
 } // end of blog scope

 function LastName() {
 /*
    This function is showing
    only the last name into 
    the console.
    */
    console.log(lname);

 }

 function bio() {
     // Local Variable
     let fname = "Aleksandra";

     age++;

     height++;

     console.log(fname + " " + lname + " ")
     
     
 }
// This line of code is calling the first function.
  Firstname("Aleksandra");   
  // This line of code is calling the second function.
   LastName();

   bio();
   bio(); 
   