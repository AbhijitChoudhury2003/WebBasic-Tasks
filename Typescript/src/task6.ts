//Vehicle Management using Abstract Class
abstract class Vehicle {
  constructor(public make: string, public model: string) { }
  abstract getDetails(): string;
}

class Car extends Vehicle {
  constructor(make: string, model: string, public numberOfDoors: number) {
    super(make, model);
  }
  getDetails(): string {
    return `Car - Make: ${this.make}, Model: ${this.model}, Doors: ${this.numberOfDoors}`;
  }
}
class Motorcycle extends Vehicle {
  constructor(make: string, model: string, public hasSidecar: boolean) {
    super(make, model);
  }
  getDetails(): string {
    return `Motorcycle - Make: ${this.make}, Model: ${this.model}, Sidecar: ${this.hasSidecar}`;
  }
}
const car1 = new Car('Toyota', 'Camry', 4);
const motorcycle1 = new Motorcycle('Harley-Davidson', 'Street 750', false);
console.log(car1.getDetails());
console.log(motorcycle1.getDetails());





