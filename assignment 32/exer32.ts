//Muhammad Ahsaan Abbasi
//23-08-2023

let current_user=["ahsaan5","hijabie","alizay9","muqqadas","zyab23","fajarabailkhan","rivkhan"]
let new_user:string[]=["ubaidie","hasnain95","HIJABIE","rivkhan","mazztanoli",]
for(let i=0; i<new_user.length; i++){
    if(current_user.includes(new_user[i])){
        console.log(`${new_user[i]} need to enter a new username`)
    }else{
        console.log(`${new_user[i]} Username is available`)
    }

}