let uname = "avnegrs";
let type = "actions";
let ind = "hollywood";
let rating = 9.5;

// es5
let out = `an ${uname} is an ${type} movie with rating ${rating} and from ind ${ind}.`;

function add(a, b) {
  return a + b;
}
add(1, 2);

function isEven(userInput) {
  let output; // output is variable
  if (userInput % 2 == 0) {
    output = `number ${userInput} is even`;
  } else {
    output = `number ${userInput} is odd `;
  }
  return output;
}
isEven(20);

///////////////////// es5

function add(a, b) {
  return a + b;
}

//////////////////////// es6
let add = (a, b) => {
  return a + b;
};

//////////////////////
function add(a, b) {
  return a, b;
}

add(1, 2);

// always return second value it will be written there so here it will be 2
