//Muhammad Ahsaan Abbasi
//22-08-2023

//Question 19
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

console.log("Sorry I can invite only two people for dinner.");
let a = dinnerName.pop();
console.log(`${a} sorry you can’t invite them to dinner`);
let b = dinnerName.pop();
console.log(`${b} sorry you can’t invite them to dinner`);
let c = dinnerName.pop();
console.log(`${c} sorry you can’t invite them to dinner`);
let d = dinnerName.pop();
console.log(`${d} sorry you can’t invite them to dinner`);
for (let i = 0; i < dinnerName.length; i++) {
    console.log(`I invite you ${dinnerName[i]} come on a dinner`);
}

let x = dinnerName.length;
console.log(`I invite ${x} number of people in dinner`);