interface Car{
    manufacturor:string;
    model:string;
    [key:string]:any;
}

function car_Data(manufacturor:string,model:string,...option:[string,any][]): Car {
    let car:Car={
        manufacturor,
        model
    }
    for(let [key,value] of option){
        car[key]=value
    }
    return car
}

let car1=car_Data("Toyota","Yaris",["Color","Silver"],["Year",2023])
let car2=car_Data("Hundayi","Civic",["Color","Black"],["Trim","fr"],["Year",2023])
let car3=car_Data("Tesla","Model3",["Color","Red"],["Automatic",true])

console.log(car1)
console.log(car2)
console.log(car3)