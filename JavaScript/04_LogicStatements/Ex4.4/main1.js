let userInput = prompt("Ask a question");

let message;
switch (userInput) {
    case "What are you doing":
        message = "I am eating";
        break;
        case "Where are you going":
        message = "I am going far";
        break;
        case "Are we there yet":
                message = "No";
                break;
             case "Do you know coding":
                  message = "Yes i know";
        break; 
    default:
            message = "I dont understand the question.";
}

console.log(userInput);
console.log(message);

