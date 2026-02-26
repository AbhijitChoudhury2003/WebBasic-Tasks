//Vehicle Management using Abstract Class
class Vehicle {
    make;
    model;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
class Car extends Vehicle {
    numberOfDoors;
    constructor(make, model, numberOfDoors) {
        super(make, model);
        this.numberOfDoors = numberOfDoors;
    }
    getDetails() {
        return `Car - Make: ${this.make}, Model: ${this.model}, Doors: ${this.numberOfDoors}`;
    }
}
class Motorcycle extends Vehicle {
    hasSidecar;
    constructor(make, model, hasSidecar) {
        super(make, model);
        this.hasSidecar = hasSidecar;
    }
    getDetails() {
        return `Motorcycle - Make: ${this.make}, Model: ${this.model}, Sidecar: ${this.hasSidecar}`;
    }
}
const car1 = new Car('Toyota', 'Camry', 4);
const motorcycle1 = new Motorcycle('Harley-Davidson', 'Street 750', false);
console.log(car1.getDetails());
console.log(motorcycle1.getDetails());
export {};
