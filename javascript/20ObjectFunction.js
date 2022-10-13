let calc = {
  sum: function (a, b) {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
};

calc.sum(2, 5);
7;
calc.sub(9, 7);
2;

////////////////////////
function language(name, country) {
  this.name = name;
  this.country = country;
  this.greet = () => {
    return `Say Hi to ${name}`;
  };
}

var Hindi = new language("Hindi", "india");
