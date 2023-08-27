"use strict";
//Muhammad Ahsaan Abbasi
//23-08-2023
let petAnimal = ["Cat", "Dog", "Rabbit"];
// Print the names of the animals using a for loop
for (let animal of petAnimal) {
    console.log(animal);
}
// Print statements about each animal
console.log("\nStatements about each animal");
for (let i = 0; i < petAnimal.length; i++) {
    if (petAnimal[i] == "Dog") {
        console.log(`A ${petAnimal[i]} would make a great pet`);
    }
    else if (petAnimal[i] == "Cat") {
        console.log(`A ${petAnimal[i]} would make a wonderful family`);
    }
    else if (petAnimal[i] == "Rabbit") {
        console.log(`A ${petAnimal[i]} would make a cute pet`);
    }
}
// Print a statement about what these animals have in common
console.log("\nwhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
