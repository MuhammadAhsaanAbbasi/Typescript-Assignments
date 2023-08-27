"use strict";
function make_album(Artist, title, track) {
    let album = { Artist, title };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
let Album1 = make_album("Asim Azhar", "Ghalat Fehmi");
let Album2 = make_album("Atif Aslam", "Dooriyan", 5);
let Album3 = make_album("Kafi Khalil", "Khani Suno", 2);
console.log(Album1);
console.log(Album2);
console.log(Album3);
