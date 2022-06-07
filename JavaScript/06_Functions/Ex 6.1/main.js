console.log("Test");

function addTwoNumbers(a, b) {
    let varA = a;
    let varB = b;
    let result = varA + varB;
    return result;
}

function logInConsole(parametar, vtorParametar) {
    console.log(parametar + ":", vtorParametar);
}

logInConsole("Sandra", "Test 1");
logInConsole("Sanja",  "Test 2");
logInConsole("Vesna",  "Test 3");
logInConsole("Anita",  "Test 4");

console.log(addTwoNumbers(5, 6));
console.log(addTwoNumbers(12, 3));
console.log(addTwoNumbers(12, 6));