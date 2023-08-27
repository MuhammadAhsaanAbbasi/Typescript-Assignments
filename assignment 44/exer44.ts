function orderSandwich(...item:string[]){
    console.log("Summary")
    if(item.length===0){
        console.log("You have ordered 0 item, Are you Sure!")
    }else{
        console.log("Bread with:")
        for(let items of item){
            console.log(items)
        }
    }
    console.log("------------------")
}
orderSandwich("Turkey","Tomato","Mayo","Lapnese")
orderSandwich("Italian","Flappino","cheese")
orderSandwich("Peanut Butter","Barbq",)