//This is using old ways, with function constuctors
export default function Employee(name, age) {
  this.name = name;
  this.age = age;
}

//Use the prototype so all instances use the same
//method for everything
Employee.prototype.greet = function() {
  console.log(`hello from ${this.name}`);
};
