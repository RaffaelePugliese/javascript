 const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const keys = Object.keys(person);
console.log("Keys:");

keys.forEach(key => {
  console.log(`${key}: ${person[key]}`);
});