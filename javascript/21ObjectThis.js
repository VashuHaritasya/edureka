// let firstName = "Michal";
// let lastName = "Peter";

// let sayHi = {
//   firstName: "zoe",
//   lastName: "lisa",
//   greet: function () {
//     return `say hi to ${firstName} ${lastName}`;
//   },
// };

// console.log(sayHi.greet());

// say hi to Michal Peter

let firstName = "Michal";
let lastName = "Peter";

let sayHi = {
  firstName: "zoe",
  lastName: "lisa",
  greet: function () {
    return `say hi to ${this.firstName} ${this.lastName}`;
  },
};

console.log(sayHi.greet());

// say hi to zoe lisa
