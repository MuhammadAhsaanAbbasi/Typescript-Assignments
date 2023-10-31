//Muhammad Ahsaan Abbasi
//22-08-2023

//Question 15
import { dinnerName1  } from "../assignment 14/exer14";


export let dinnerName=dinnerName1
console.log(`Due to some issue ${dinnerName[2]} is not coming`)
dinnerName.splice(2,1,"Muqqadas")

for(let i=0; i<dinnerName1.length; i++){
    console.log(`I invite you ${dinnerName1[i]} come on a dinner`)
}

