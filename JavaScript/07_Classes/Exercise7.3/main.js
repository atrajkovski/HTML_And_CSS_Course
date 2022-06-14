class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    printAnimal() {
        console.log(this.species, "makes this sound:", this.sound);
    }
}

Animal.prototype.printFlying = function () {
    switch (this.species) {
     case "cow":
       console.log(this.species, "can't fly");
       break;
     case "owl":
           console.log(this.species, "fly") ;
        break;
    }
}

let cow = new Animal("cow", "Muuuu");
let owl = new Animal("owl", "Ou Ou!");

cow.printAnimal();
cow.printFlying();

owl.printAnimal();
owl.printFlying();