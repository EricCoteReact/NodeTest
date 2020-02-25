import Employee from './Employee.js';
import Manager from './Manager.js';

function testingClasses() {
  let emp1 = new Employee('Fred', 35);
  let emp2 = new Employee('Fred', 35);

  for (let prop in emp1) {
    console.log(prop + ':   ' + emp1[prop]);
  }

  emp1.greet();
  emp2.greet();
  let greeting = Employee.prototype.greet.bind(emp1);

  greeting();
  greeting();

  let boss = new Manager('papa');
  console.log(boss);
  boss.greet();
}
