"use strict";
//Muhammad Ahsaan Abbasi
//8-22-2023
// Question No.3
// toUpperCase
let toUpperCase = "Ahsaan";
let toUpperCase1 = toUpperCase.toUpperCase();
console.log(toUpperCase1);
// toLowerCase
let toLowerCase = "Ahsaan";
let tolowercase = toLowerCase.toLowerCase();
console.log(tolowercase);
//titlecase
let Name = "abbasi";
let titlecase = Name.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let fName = `Hello! ${titlecase}`;
console.log(fName);
