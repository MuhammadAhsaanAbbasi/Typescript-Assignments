"use strict";
//Muhammad Ahsaan Abbasi
//22-08-2023
Object.defineProperty(exports, "__esModule", { value: true });
exports.dinnerName = void 0;
//Question 15
const exer14_1 = require("../assignment 14/exer14");
exports.dinnerName = exer14_1.dinnerName1;
console.log(`Due to some issue ${exports.dinnerName[2]} is not coming`);
exports.dinnerName.splice(2, 1, "Muqqadas");
for (let i = 0; i < exer14_1.dinnerName1.length; i++) {
    console.log(`I invite you ${exer14_1.dinnerName1[i]} come on a dinner`);
}
