//Employee Management using Inheritance

class Employee {
  constructor(public name: string, public position: string) { }
  getDetails(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}
class Manager extends Employee {
  constructor(name: string, position: string, public department: string) {
    super(name, position);
  }
  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}
const employee1 = new Employee('Alice', 'Developer');
const manager1 = new Manager('Bob', 'Manager', 'IT');
console.log(employee1.getDetails());
console.log(manager1.getDetails());



