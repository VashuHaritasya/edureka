function human(name, city) {
  this.name = name;
  this.city = city;
}

function robot(name) {
  this.name = name;
  this.age = 10;
  this.hands = 2;
}

var Anand = new human("Anand", "mumbai");
// Anand
// human {name: 'Anand', city: 'mumbai'}

human.prototype = new robot()

robot {name: undefined, age: 10, hands: 2}
var Nikita = new human('Nikita','Pune')
undefined
Nikita
human {name: 'Nikita', city: 'Pune'}
Nikita.age
10
Anand.age
undefined
Nikita.hands
2
// in here we can inheritae the age and also hands 