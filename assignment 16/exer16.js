"use strict";
//Muhammad Ahsaan Abbasi
//22-08-2023
Object.defineProperty(exports, "__esModule", { value: true });
exports.dinnerName2 = void 0;
//Question 16
const exer15_1 = require("../assignment 15/exer15");
// console.log(dinnerName)
exports.dinnerName2 = exer15_1.dinnerName;
console.log("I found a big table so I invite 3 more friends on dinner");
exer15_1.dinnerName.unshift("Mustafa");
exer15_1.dinnerName.splice(2, 0, "Fajar");
exer15_1.dinnerName.push("Hamzah");
for (let i = 0; i < exer15_1.dinnerName.length; i++) {
    console.log(`I invite you ${exer15_1.dinnerName[i]} come on a dinner`);
}
