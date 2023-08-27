"use strict";
//Muhammad Ahsaan Abbasi
//22-08-2023
//Question 16
let dinnerName = ["Zyab", "Hijab", "Alizay"];
let i = dinnerName;
for (let i = 0; i < dinnerName.length; i++) {
    console.log(`I invite you ${dinnerName[i]} come on a dinner`);
}
console.log(`Due to some issue ${dinnerName[2]} is not coming`);
dinnerName.splice(2, 1, "Muqqadas");
for (let i = 0; i < dinnerName.length; i++) {
    console.log(`I invite you ${dinnerName[i]} come on a dinner`);
}
console.log("I found a big table so I invite 3 more friends on dinner");
dinnerName.unshift("Mustafa");
dinnerName.splice(2, 0, "Fajar");
dinnerName.push("Hamzah");
for (let i = 0; i < dinnerName.length; i++) {
    console.log(`I invite you ${dinnerName[i]} come on a dinner`);
}
