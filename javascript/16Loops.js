// for
// while
// do while
// for Of
// for in >>> in Object

for (i = 0; i < 5; i++) {
  console.log(i);
}
0;
1;
2;
3;
4;
var a = ["delhi", "mumbai", "fenoa", "boston"];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
delhi;
mumbai;
fenoa;
boston;

var a = [
  "delhi",
  "mumbai",
  ["red", ["audi", "bmw", "merx"], "yellow", "green"],
  "fenoa",
  "boston",
];
for (let i = 0; i < a.length; i++) {
  if (Arrya.isArray(a[i])) {
    for (j = 0; j < a[i].length; j++) console.log(a[i][j]);
  } else {
    console.log(a[i]);
  }
}

///  while

var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

/// do while

var i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);

/// for of  ES6
var city = ["delhi", "mumbai", "fenoa", "boston"];
for (mycity of city) {
  console.log(mycity);
}

var city = [
  "delhi",
  "mumbai",
  ["red", ["audi", "bmw", "merx"], "yellow", "green"],
  "fenoa",
  "boston",
];

for (mycity of city) {
  if (Array.isArray(mycity)) {
    for (mycolor of city) {
      console.log(mycolor);
    }
  } else console.log(mycity);
}
