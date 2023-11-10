const person = {
  id: 1,
  name: 'Mario',
  surname: 'Rossi',
  old: 25
};

const { id, firstName:name, lastName:surname,age:old } = person
console.log(id, name, surname, old);
