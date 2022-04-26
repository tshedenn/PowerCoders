// function Person(name, age, married) {
//   this.Name = name;
//   this.Age = age;
//   this.isMarried = married;
//   this.hello = function() {
//     return "Hello " + this.Name;
//   }
// };  
//  let newPerson = new Person("tshering", 33, "Yes");
//  console.log(newPerson);
//  console.log(newPerson.hello());
// //console.log(Person["Tshering"]);
// //Person.hello();
// console.log(Object.keys(newPerson));
// console.log(Object.values(newPerson));
var t1=["html","js"];
var t2=["css","jquery"];
var topics = t1.concat(t2);
// topics[0] = "HTML";
// topics[1] = "CSS";
// topics[2] = "jQuery"; 
// Possible to overwrite a value in an array
// console.log(topics[4]); will return undefined.
// console.log(topics.toString());
console.log(topics.push("SQL"));
// topics[2] = "Javascript";
// console.log(topics);
console.log(topics);

