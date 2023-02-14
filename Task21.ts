//TypeScript Object

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("Zaid", 21);
console.log(person1);
