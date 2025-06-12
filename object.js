const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
car.color = "red"; 

car.year = 2024;

delete car.model;

if ("brand" in car) {
  console.log("Brand property exists.");
} else {
  console.log("Brand property does not exist.");
}

for (let key in car) {
  console.log(key + ": " + car[key]);
}

const students = [
  { name: "Alpha", age: 20 },
  { name: "Bravo", age: 22 },
  { name: "Charlie", age: 19 }
];

let oldest = students[0];
for (let i = 1; i < students.length; i++) {
  if (students[i].age > oldest.age) {
    oldest = students[i];
  }
}
console.log("Oldest student:", oldest);

students.push({ name: "Delta", age: 21 });
console.log("Students after adding new student:", students);

const studentJson = JSON.stringify(students[0]);
console.log("First student as JSON string:", studentJson);