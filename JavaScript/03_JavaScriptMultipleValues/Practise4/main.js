console.log("test");


let dog = {
    name: "Kuce",
    weight: 3.4,
    color: "brown",
    breed: "terrier",
    biting: true
};

let arrDog = [1, 2];

console.log(typeof dog);
console.log(dog);
console.log(typeof arrDog);
console.log(arrDog);

console.log(`My dog name is  ${dog.name}.. He weights ${dog.weight}` );


let company = {companyName: "Healthy Candy",
                activity: ["food manufacturing", "improving kid's health", "manufacturing toys"],
                address: {
                    street: "2nd street",
                    number: "123",
                    zipcode: "33116",
                    city: "Miamy",
                    state: "Florida",
                },
                yearOfEstablishment: 2021
            };
        
       company.address.zipcode = "33116";    
       console.log(company.address.zipcode);

       company["address"]["number"] = "100";

       let activity = company.activity[1];
       console.log(company.activity[1]);
       

       
        