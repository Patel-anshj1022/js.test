let fruits = ["Apple", "Banana", "watermelon", "Mango", "Orange"];
console.log(fruits[1]);

fruits.push("Pineapple");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

console.log(fruits.includes("Mango"));

console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i];
  console.log(fruit.toUpperCase());
}

let fruitString = fruits.join(", ");
console.log(fruitString);

let fruitLengths = fruits.map(fruit => fruit.length);
console.log(fruitLengths);
