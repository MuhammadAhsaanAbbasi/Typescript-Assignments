//Muhammad Ahsaan Abbasi
//22-08-2023

//Question 16

import { dinnerName } from "../assignment 15/exer15";
// console.log(dinnerName)
export let dinnerName2=dinnerName
console.log("I found a big table so I invite 3 more friends on dinner")
dinnerName.unshift("Mustafa")
dinnerName.splice(2,0,"Fajar")
dinnerName.push("Hamzah")
for(let i=0; i<dinnerName.length; i++){
    console.log(`I invite you ${dinnerName[i]} come on a dinner`)
}
