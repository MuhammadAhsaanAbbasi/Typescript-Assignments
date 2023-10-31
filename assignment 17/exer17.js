"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remaininguest = void 0;
//Question 17
const exer16_1 = require("../assignment 16/exer16");
console.log("Sorry I can invite only two people for dinner.");
while (exer16_1.dinnerName2.length > 2) {
    const removedGuest = exer16_1.dinnerName2.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let i = 0; i < exer16_1.dinnerName2.length; i++) {
    console.log(`I invite you ${exer16_1.dinnerName2[i]} come on a dinner`);
}
exports.remaininguest = exer16_1.dinnerName2;
exer16_1.dinnerName2.pop();
exer16_1.dinnerName2.pop();
console.log("Remaining guests: " + exer16_1.dinnerName2);
