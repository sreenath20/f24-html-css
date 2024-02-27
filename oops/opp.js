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
    for (let car of cars) {
        if (car.id = delId) {
            cars.splice(location, 1);
            return car;
        }
        location++;
    }
    return "Could not delete card Id:" + delId;
}
function sortCarsByPrice() {
    return cars.sort((c1, c2) => c1.price - c2.price);
}
function sortCarsById() {
    return cars.sort((c1, c2) => c1.id - c2.id);
}
function sortCarsByName() {
    return cars.sort((c1, c2) => {
        if (c1.name > c2.name) return 1;
        if (c1.name < c2.name) return -1;
        return 0;
    }
    );
}