// Write a function that takes one parameter
// and write it to the console.

//Call the function three times with three diferent data values
//Example: "String", 32, true

function logParametar(para) {
    console.log(para);
}

logParametar("Nekoj tekst");
logParametar(32);
logParametar(false);


/* 2. Write a function that takes two number parametars.
We should check if the paramaters are numbers
If the parametars are numbers multiply them and cosnole log the result.
Else console log that the parametars are invalid
Call the function with these parametars (3, 5) .... ("Tekst", 56).... (4, true) */
function multiplyTwoNumbers(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        console.log(num1 * num2);
    } else {
        console.log(num1, "or", num2, "is not a number!");
    }
}

multiplyTwoNumbers(3,5);
multiplyTwoNumbers("Tekst", 56);
multiplyTwoNumbers(4, true);


function oddOrEven(myNumber) {
    if (myNumber % 2 === 0) {
        console.log(myNumber, "is even!");
    } else {
        console.log(myNumber, "is odd!");
    }
}

oddOrEven(5);
oddOrEven(10);
oddOrEven(17);

/* Write a JavaScript function that checks whether a passed string is palindrome or not? */
function chekIfPalindrome(word) {
    let myWordReversed = word.split("").reverse().join("");
    if (myWordReversed.toLowerCase() === word.toLowerCase() ) {
        console.log(word, "is a palindrome");
    } else {
        console.log(word, "is not a palindrome");
    }
}

chekIfPalindrome("Madam");
chekIfPalindrome("Vododov")


