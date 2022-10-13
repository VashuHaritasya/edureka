// for
// while
// do while
// for of
// for in  >>>> Object
//////////////////////////////
// For > Iterate over the array as well as print the series

//  for(variable, condition, increment)  syntax

for (let i = 0; i < 5; i++) {
  console.log(i);
}
0;
1;
2;
3;
4;

var a = ["Delhi", "Mumbai", "Nice", "Pisa", "Genoa", "Boston"];
for (let index = 0; index < a.length; index++) {
  console.log(a[index]);
}
Delhi;
Mumbai;
Nice;
Pisa;
Genoa;
Boston;

var a = ["Delhi", "Mumbai", "Nice", "Pisa", "Genoa", "Boston"];
for (i = 0; i < a.length; i++) {
  console.log(`<li>${a[i]}</li>`);
}
{
  /* <li>Delhi</li>
<li>Mumbai</li>
<li>Nice</li>
<li>Pis<li>Genoa</li>
<li>Boston</li>  */
}

var a = [
  "Delhi",
  "Mumbai",
  ["Red", "Purple", "Yellow", "Green"],
  "Genoa",
  "Boston",
];

for (let index = 0; index < a.length; index++) {
  if (Array.isArray(a[index])) {
    for (let j = 0; j < a[index].length; j++) {
      console.log(a[index][j]);
    }
  } else {
    console.log(a[index]);
  }
}

Delhi;
Mumbai;
Red;
Purple;
Yellow;
Green;
Genoa;
Boston;

////while
var i = 10;
while (i < 5) {
  console.log(i);
  i++;
}

////do while
var i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);

//es6 for of

var city = ["Delhi", "Mumbai", "Nice", "Pisa", "Genoa", "Boston"];
for (mycity of city) {
  console.log(mycity);
}

var city = [
  "Delhi",
  "Mumbai",
  ["Red", "Purple", "Yellow", "Green"],
  "Genoa",
  "Boston",
];

for (mycity of city) {
  if (Array.isArray(mycity)) {
    for (mycolor of mycity) {
      console.log(mycolor);
    }
  } else {
    console.log(mycity);
  }
}

Delhi;
Mumbai;
Red;
Purple;
Yellow;
Green;
Genoa;
Boston;
