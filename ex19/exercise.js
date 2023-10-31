class Person {
  firstName = '';
  lastName = '';
  _age = 0;
  constructor(firstName, lastName, _age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this._age = _age
  };

  set firstName(firstName) {
    if (typeof(firstName) !== "String") {
      this.firstName = String(newName)
    }else{
      this.firstName=firstName;
    }
  };
  get firstName() {
    return this.firstName;
  };

  set lastName(lastName) {
    if (typeof(lastName) !== "String") {
      this.lastName = String(this.lastName)
    }else{
      this.lastName= lastName;
    }
  };
  get lastName() {
    return this.lastName
  };
  set _age(_age) {
    if (_age < 1) {
      this._age = 1
    }
    else if (_age > 110) {
      this._age = 110
    };
  };
  get _age(){
    return this._age
  };
  get fullName() {
    return this.firstName + ' ' + this.lastName
  };



};

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);