import Employee from './Employee.js';

//uses the new class syntax, using
//a base class, with properties
//and methods  (still uses prototypes in the background)
export default class Manager extends Employee {
  bonus = 5000;

  constructor(name, age, bonus = 5000) {
    super(name, age);
    this.bonus = bonus;
  }

  greet() {
    super.greet();
    console.log(`HELLO from ${this.name} and has a bonus of ${this.bonus}`);
  }
}
