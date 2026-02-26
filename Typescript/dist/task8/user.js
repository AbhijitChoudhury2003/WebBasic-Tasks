// User Module: Export a Class and Import into Another File
// File: user.ts
export class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getUserInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
