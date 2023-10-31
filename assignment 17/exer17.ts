//Question 17
import { dinnerName2 } from "../assignment 16/exer16";
console.log("Sorry I can invite only two people for dinner.")
let a=dinnerName2.pop()
console.log(`${a} sorry you can’t invite them to dinner`)
let b=dinnerName2.pop()
console.log(`${b} sorry you can’t invite them to dinner`)
let c=dinnerName2.pop()
console.log(`${c} sorry you can’t invite them to dinner`)
let d=dinnerName2.pop()
console.log(`${d} sorry you can’t invite them to dinner`)
for(let i=0; i<dinnerName2.length; i++){
    console.log(`I invite you ${dinnerName2[i]} come on a dinner`)
}

dinnerName2.pop();
dinnerName2.pop();

console.log("Remaining guests: " + dinnerName2);
