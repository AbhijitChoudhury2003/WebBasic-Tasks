//Student Class Creation and Object Property/Method Access

class Student {
  name: string;
  age: number;
  grade: string;
  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student1 = new Student('Alice', 20, 'A');
const student2 = new Student('Bob', 22, 'B');
console.log(student1.getDetails());
console.log(student2.getDetails());

