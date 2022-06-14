class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }

    dogDescription() {
        console.log("Name:", this.dogName, "Weight:", this.weight, "Breed:", this.breed);
    }
}

let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
let dog2 = new Dog("C#", 4.4, "greej", "bulldog");

dog.dogDescription();
dog2.dogDescription();

class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
       this.#firstName = firstName;
       this.#lastName = lastName;
    }

    get firstNameGet() {
       return this.#firstName;
    }

     set firstNameSet(fname) {
         this.#firstName = fname;
     }
    fullName() {
       return this.#firstName + " " + this.#lastName;
    } 
}
 
 let person1 = new Person("Sandra", "Trajkovski");
 let person2 = new Person("Ljupco", "Trajanovski");
 console.log("Hello,", person1.fullNameGet);
 console.log("Hello,", person2.fullName());

 class Vehicle {
     constructor(color, currentSpeed,maxSpeed) {
         this.color = color;
         this.currentSpeed = currentSpeed;
         this.maxSpeed = maxSpeed;
     }
    

 move() {
      console.log("Moving at", this.currentSpeed);
 }
      
 accelerate(ammont) {
    this.currentSpeed += ammont;
 }
}

 
class Motorcycle extends Vehicle  {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color,currentSpeed, maxSpeed);
        this.fuel = fuel;
    }

    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

Motorcycle.prototype.stop = function () {
    this.currentSpeed = 0;
}
Motorcycle.prototype.brand = "Honda";

let motor = new Motorcycle("Black", 0, 250, "gasoline");

motor.accelerate(100);
console.log(motor.move());
motor.stop();
console.log(motor.move());

 
 
 
 class Vehicle {
    constructor(color) {
        this.color = color;
    }
 }

 class Car extends Vehicle {
    constructor(color, wheels) {
        super(color);;
    }
 }

 let myCar = new Car("Green", 4);
 myCar.wheels