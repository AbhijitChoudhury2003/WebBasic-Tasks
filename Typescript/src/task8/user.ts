// User Module: Export a Class and Import into Another File

// File: user.ts
export class User {
  constructor(public name: string, public age: number) { }
  
  getUserInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

