class Person {
  firstName = '';
  lastName = '';
  _age = 0;
  constructor(_firstName, _lastName, _age) {

    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age
  };

  set firstName(_firstName) {
    if (typeof(_firstName) !== "String") {
      this._firstName = String(newName)
    }else{
      this._firstName=firstName;
    }
  };
  get firstName() {
    return this.firstName;
  };

  set lastName(_lastName) {
    if (typeof(_lastName) !== "String") {
      this._lastName = String(this.lastName)
    }else{
      this._lastName= lastName;
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
    return this.age
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
