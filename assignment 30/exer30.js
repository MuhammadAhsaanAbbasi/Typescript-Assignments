"use strict";
//Muhammad Ahsaan Abbasi
//22-08-2023
let userName = ["Ahsaan", "Zyab", "Admin", "Hijab", "Muqqadas", "Alizay"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i].includes("Admin")) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`);
    }
}
