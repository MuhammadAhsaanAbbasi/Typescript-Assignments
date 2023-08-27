//Muhammad Ahsaan Abbasi
//22-08-2023

let bcar="bugatti";

console.log("Is bcar =='bugatti' ? I Predict True")
console.log(bcar=='bugatti')

console.log("Is bcar !=='bugatti' ? I Predict False")
console.log(bcar!=='bugatti')

console.log("Is bcar.toLowerCase()== bcar ? I Predict False")
console.log(bcar.toLowerCase()==bcar)

// "using greater and less then, greater then equal to and less then equal to "
let testnum=5;

console.log("Guess the number testnum == 5 ? I Predict True")
console.log(testnum==5);

console.log("Guess the number testnum !== 5 ? I Predict False")
console.log(testnum!==5);

console.log("Guess the number testnum < 9 ? I Predict True")
console.log(testnum<9);

console.log("Guess the number testnum > 9 ? I Predict True")
console.log(testnum>9);

console.log("Guess the number testnum <= 5 ? I Predict True")
console.log(testnum<=5);

console.log("Guess the number testnum <= 5 ? I Predict True")
console.log(testnum>=8);

// Using "and" and "or" operator
let email="mahsaanabbasi@gmail.com"
let password:any="Hijab1"
if("mahsaanabbasi@gmail.com"===email&&"Hijabrk"===password){
        console.log(`\nYou're login`)
}else{
    console.log(`\nInvalid Email or Password`)
}

let Food1="Biryani"
let Food2="Mutton Qourma"
if("Biryani"==Food1&&"Nihari"==Food2){
        console.log(`\nPlease Serve it`)
}else if("Biryani"==Food1|| "Nihari"==Food2){
        console.log(`\nKindly serve it`)
}else{
    console.log(`\nIf any dish is available so serve it`)
}

// Test whether an item is in or not in a array
let inarray=[5,10,15,20,30]
let tofindarray=18;

if(inarray.includes(tofindarray)){
    console.log("Number is in Array")
}else{
    console.log("Invalid Array")
}

