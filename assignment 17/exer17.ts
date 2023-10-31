//Question 17
import { dinnerName2 } from "../assignment 16/exer16";
console.log("Sorry I can invite only two people for dinner.")
while (dinnerName2.length > 2) {
    const removedGuest = dinnerName2.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }
for(let i=0; i<dinnerName2.length; i++){
    console.log(`I invite you ${dinnerName2[i]} come on a dinner`)
}
export let remaininguest=dinnerName2
dinnerName2.pop();
dinnerName2.pop();

console.log("Remaining guests: " + dinnerName2);


