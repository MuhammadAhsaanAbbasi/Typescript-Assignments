interface Album{
    Artist:string;
    title:string,
    track?:number;
}

function make_album(Artist:string,title:string,track?:number): Album {
    let album:Album={Artist,title}
    if(track!==undefined){
        album.track=track
    }
    return album
}

let Album1=make_album("Asim Azhar","Ghalat Fehmi")
let Album2=make_album("Atif Aslam","Dooriyan",5)
let Album3=make_album("Kafi Khalil","Khani Suno",2)

console.log(Album1)
console.log(Album2)
console.log(Album3)