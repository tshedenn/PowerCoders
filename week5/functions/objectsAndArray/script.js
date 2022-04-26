const person = {
  name: "John",
  age: 38,
  isMarried: false,
  hello: function() {
    return "Hello " + this.name;
  }
};  

// console.log(person.hello());
// console.log(person.age);
// document.write(person["hello"]());