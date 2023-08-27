"use strict";
//Muhammad Ahsaan Abbasi
//22-08-2023
let placetoVisit = [
    "Makkah",
    "Madina",
    "Jersulum",
    "Istanbul"
];
//Print your array in oringinal order
console.log(placetoVisit);
//Print your array in alphabetical order
console.log("Alphabetical order:", [...placetoVisit].sort());
//Print array show in original order
console.log("Original Order", placetoVisit);
//print your array in reverse order without changing order list
console.log("Sort-Reverse Order:", [...placetoVisit].sort().reverse());
//Print your array show in original order
console.log("Original Order", placetoVisit);
//Print your array in reverse order
placetoVisit.reverse;
console.log("Reverse Order", placetoVisit);
//Print your array again in reverse order 
placetoVisit.reverse;
console.log("Reverse Order", placetoVisit);
//Print your array in sort 
placetoVisit.sort();
console.log("Sort Order", placetoVisit);
//print array in sort reverse order
placetoVisit.sort((a, b) => b.localeCompare(a));
console.log("Sort reverse order", placetoVisit);
