//Employee Management using Inheritance
class Employee {
    name;
    position;
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    getDetails() {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, position, department) {
        super(name, position);
        this.department = department;
    }
    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}
const employee1 = new Employee('Alice', 'Developer');
const manager1 = new Manager('Bob', 'Manager', 'IT');
console.log(employee1.getDetails());
console.log(manager1.getDetails());
export {};
