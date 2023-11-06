function show_magicians(magicians:string[]){
    for(let magician of magicians){
        console.log(magician)
    }
}
function make_great(magicians:string[]){
    let great_magicians:string[]=[]
    for(let magician of magicians){
        great_magicians.push(`The Great: ${magician}`)
    }
    return great_magicians
}

let magicians=["Atif Aslam","Ali Zafar","Asim Azhar","Amna Baig","Kafi Khalil"]
let great_magicians=make_great(magicians)
show_magicians(great_magicians)