let currentDateTime = new Date();
console.log(currentDateTime);

let now2 = Date.now();
console.log(now2);

let milliDate = new Date(1000);
console.log(milliDate);

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);

let now = new Date();
console.log("Day of the week:", now.getDay());
console.log("Day of the month:", now.getDate());
console.log("Month:", now.getMonth() + 1);
console.log("Year:", now.getFullYear());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Time:", now.getTime());


let myDate = Date.parse("3/16/21");

console.log((new Date(myDate)));
console.log(new Date(myDate).toString());