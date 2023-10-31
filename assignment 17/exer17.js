"use strict";
//Question 17
// let dinnerName=["Zyab","Hijab","Alizay"]
// let i=dinnerName;
// for(let i=0; i<dinnerName.length; i++){
//     console.log(`I invite you ${dinnerName[i]} come on a dinner`)
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(`Due to some issue ${dinnerName[2]} is not coming`)
// dinnerName.splice(2,1,"Muqqadas")
// for(let i=0; i<dinnerName.length; i++){
//     console.log(`I invite you ${dinnerName[i]} come on a dinner`)
// }
// console.log("I found a big table so I invite 3 more friends on dinner")
// dinnerName.unshift("Mustafa")
// dinnerName.splice(2,0,"Fajar")
// dinnerName.push("Hamzah")
// for(let i=0; i<dinnerName.length; i++){
//     console.log(`I invite you ${dinnerName[i]} come on a dinner`)
// }
const exer16_1 = require("../assignment 16/exer16");
console.log("Sorry I can invite only two people for dinner.");
let a = exer16_1.dinnerName2.pop();
console.log(`${a} sorry you can’t invite them to dinner`);
let b = exer16_1.dinnerName2.pop();
console.log(`${b} sorry you can’t invite them to dinner`);
let c = exer16_1.dinnerName2.pop();
console.log(`${c} sorry you can’t invite them to dinner`);
let d = exer16_1.dinnerName2.pop();
console.log(`${d} sorry you can’t invite them to dinner`);
for (let i = 0; i < exer16_1.dinnerName2.length; i++) {
    console.log(`I invite you ${exer16_1.dinnerName2[i]} come on a dinner`);
}
exer16_1.dinnerName2.pop();
// dinnerName2.pop();
console.log("Remaining guests: " + exer16_1.dinnerName2);
