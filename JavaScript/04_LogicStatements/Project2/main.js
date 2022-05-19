let userName = prompt("Enter your name: ");

let message;


switch (userName.toLowerCase()) {
    case "aleksandra":
    case "valentina":
    case "maja":
    case "valmira":
    case "ljupco":
    case "ilija":
    
        message = "Hello friend!"
        break;
     default:
         message = "Idon't know you!"   
         break;

}
 alert(message);