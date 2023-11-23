const user = {
  id: 1,
  name: "John",
  age: 25,
};
let obj = JSON.stringify(user);

localStorage.setItem("user",obj);

console.log(obj)

const data = JSON.parse(user)

localStorage.getItem("user",data);

console.log(data)
