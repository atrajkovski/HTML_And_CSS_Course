let myDate = new Date();


let monthArray = ["January", "February", "Martch", "April", "may", "June", "July", "August", "September", "Octomber", "November", "December"];
let dayOfWeekArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let date = myDate.getDate();
let year = myDate.getFullYear();
let month = myDate.getMonth();
let monthName = monthArray[month];
let dayOfWeek = myDate.getDay;


console.log(`${date}-${monthName}-${year}`);

