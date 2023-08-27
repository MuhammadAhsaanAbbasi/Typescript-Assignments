"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`The Great: ${magician}`);
    }
    return great_magicians;
}
let magicians = ["Atif Aslam", "Ali Zafar", "Asim Azhar", "Amna Baig", "Kafi Khalil"];
let modified_magicians = make_great(magicians);
show_magicians(modified_magicians);
console.log("\n");
show_magicians(magicians);
