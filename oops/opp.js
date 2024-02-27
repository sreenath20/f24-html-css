class Car {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
const car = new Car(1, "Maruthi", 55000.0);

const product = { id: 1, name: "Laptop", price: 45000.0 };
const cars = [];

function addCar(newCar) {

    cars.push(newCar);
    console.log(cars);
}
function updateCarById(updateCar) {

    for (let car of cars) {
        if (updateCar.id == car.id) {
            car.name = updateCar.name;
            car.price = updateCar.price;
            return car;            
        }
    }
    return "Coud not update, car not found";
}
function deleteCarById(delId) {
    let location = 0;
    for(let car of cars){
        if(car.id = delId){
            cars.splice(location,1);
            return car;            
        }        
        location++;
    }
    return "Could not delete card Id:"+delId;
}
