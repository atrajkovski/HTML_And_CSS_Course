function logName(params) {
console.log("Sandra");
}

function logNameWithParams(ime) {
    console.log( ime);
}

console.log("Prvo ime");

// 1. variabla sto zacuvuva broj na minuti PR. 360;
// 1. variabla sto zacuvuva broj na minuti PR. 390;
let minutes = 360;
// 2. Ktreirame funkcija koja prima eden parametar.
// PR. function imeNaFunkcija (parametar) {
 // }   
//function minutesToHours(min) {
//}

 // 3. Vo samata funkcija kreirajte variabla sto bi go zacuvala rezultatot
 //Samiot rezultat e parametarot / 60
 

 // 4. Napravite return na samata variabla so rezultatot;
 function minutesToHours(min) {
    let result = min / 60;
    return result;
}

 // 5. Treba da se povika samata funkcija so zacuvanata prva variabla 
 // kako argument
 // PR. imeNaFunkcija(argumentot)
 
// 6. Povikuvanjeto na funkcijata treba da bide vrapnato vo console.log()

// PR. console.log(imeNaFunkcija(argumentot));
console.log( minutesToHours(minutes));
minutes = 390;
console.log(minutesToHours(minutes));

// 25. Write a JavaScript function that accept a list of country 
// names as input and returns the longest country name as output. 
// Go to the editor
// Sample function : 
// Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

let arrOfCountries = ["Australia", "Germany", "United States of America"]

arrOfCountries[4];
console.log(arrOfCountries[4]);
function longestCountryName(arr) {
   let longName = "";
console.log(typeof arr );
   if (typeof arr === "object" && arr.length > 0) {

      for (let i = 0; i < arr.length; i++) {
         const element = arr[i];
         if (longName === "") {
            longName = element;
         } else if (longName.length < element.length) {
            longName = element;
         }
      }

      return longName;
   } else {
      return longName;
   }

}

let longestName = longestCountryName(arrOfCountries);
//console.log(longestName, longestName.length);

// skratena verzija 

function longestCountryName(arr) {
    let longestName = "";
    if (typeof arr === "object" && arr.length > 0) 
       for (let i = 0; i < arr.length; i++) 
          longestName = longestName.length < arr[i].length ? arr[i] : longestName
 
   // console.log(longestName, longestName.length);
 }

// Create a basic calculator

let x = 12;
let y = 10;
let operator = '-';

function basicCalculator(param1,param2,param3) {

    let result;
    let oparation = `${param1} ${param3} ${param2}`;
 
    switch (param3) {
       case '*':
          result = param1 * param2;
          console.log("The operation is multiplication", oparation, "= " + result);
          break;
       case '+':
          result = param1 + param2;
          console.log("The operation is sum", oparation, "= " + result);
          break;
       case '-':
          result = param1 - param2;
          console.log("The operation is subtraction", oparation, "= " + result);
          break;
    }
 }
 
 basicCalculator(x, y, operator);
 basicCalculator(5, 10, '-');

 function getRecursive(num) {
     console.log(num);
     if(num > 0) {
        getRecursive(--num);
     }
     console.log('End of call', num);
 }
 logRecursive(3);

 function logRecursive(nr) {
     console.log("Started function:", nr);
     if (nr > 0) {
        logRecursive(nr -1) ;
     } else {
         console.log("done with recursion");
     }
     console.log("Ended function:", nr);
 }
 logRecursive(3);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  

