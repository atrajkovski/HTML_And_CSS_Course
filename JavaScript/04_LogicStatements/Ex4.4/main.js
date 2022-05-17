console.log("test");

// random number between 0 and 1
let randomNumber = Math.random();

//multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber + 10;
  
//removes digits past decimal place to provide a whole number
randomNumber =  Math.floor(randomNumber);

let responseArray = ["eating", "sitting", "drinking", "running", "sleeping", "riding a bicycle", "climbing", "chilling"];

prompt("Enter a question.");
let message = "Iam ";

switch(randomNumber) {
    case 1:
        message =message + responseArray[0]
    break;
    case 2:
        message =message + responseArray[1]
    break;
    case 3:
        message =message + responseArray[2]
    break;
    case 4:
        message =message + responseArray[3]
    break;
    case 5:
        message =message + responseArray[4]
    break;
    case 6:
        message =message + responseArray[5]
    break;

    case 7:
        message =message + responseArray[6]
    break;
    case 8:
        message =message + responseArray[7]
    break;
    
    default:
        break;
}
 
console.log(message);

