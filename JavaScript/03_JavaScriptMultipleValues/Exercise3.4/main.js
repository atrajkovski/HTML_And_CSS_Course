console.log("test");

let myCar = {
    make: "Ford",
    model: "Fiesta",
    year: 2020,
    color: "red",
    automatic: false
};

let propertyVariable = "color";
myCar[propertyVariable] = "green";
myCar["color"] = "green";

console.log(myCar[propertyVariable]);

propertyVariable = "forSale";
myCar[propertyVariable] = "false";

console.log(myCar.make + " " + myCar.model);

myCar.kmh = myCar.aclerate(myCar.kmh,10);
console.log(myCar.kmh);

myCar.kmh = myCar.aclerate(myCar.kmh,10);
console.log(myCar.kmh);

myCar.kmh = myCar.aclerate(myCar.kmh,30);
console.log(myCar.kmh);