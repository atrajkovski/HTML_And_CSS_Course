function sayHallo() {
    let you = prompt("What's your name? ");
    console.log("Hallo", you + "!");
 }
 
 // sayHallo();
 
 function addTwoNumber(num1, num2) 
    console.log(num1 + num2);
    
 
// addTwoNumber(10, 20);
// addTwoNumber(30, 20);
 
 
 let varFunctionAddTwoNumbers = function(x,y) {
    console.log(x + y);
 }
 
 varFunctionAddTwoNumbers(10, 10);
 varFunctionAddTwoNumbers(20, 20);
 
 let arrowFunctionAddTwoNumbers = (param1, param2) =>  console.log(param1 + param2);
 let arrowFunctionSayHallo = x => console.log("Hello", x + "!");
 let arrowFunctionSayHalloArr = (... myArray) => myArray.forEach(x => console.log(x));
 
 
 //arrowFunctionAddTwoNumbers(5, 1);
 //arrowFunctionAddTwoNumbers(1, 3);
 
 //arrowFunctionSayHallo("Sandra");

 let myArray = [5, 9, 10];
 addTwoNumber(...myArray);

 let nameArray = ["Sandra", "ljupco", "Elena"];

 arrowFunctionSayHalloArr(...nameArray);
 arrowFunctionSayHalloArr("Sandra", "ljupco", "Elena");

 let arrResults = [];
 for (let i = 0; i < 10; i++) {
     let result = addTwoNumber(i, 2 * i)
     arrResults.push(result);
 }

 console.log(arrResults);


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 