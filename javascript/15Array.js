// 2/10/22

// INDEXOF

var a = ["a", "b", "c", 1];
var b = [2, 3, "d", "e"];

a + b;
("a,b,c,12,3,d,e");

var a = ["a", "b", "c"];
Array.isArray(a);
true;
var b = "hii"; // here we can use Array.isArray() to check if it is arry or not
Array.isArray(b);
false;

// Nested arrya
var a = [
  "delhi",
  "mumbai",
  ["red", ["audi", "bmw", "merx"], "yellow", "green"],
  "fenoa",
  "boston",
];
a[0];
("delhi");
a[2][("red", Array(3), "yellow", "green")];
a[2][1][("audi", "bmw", "merx")];
a[2][1][0];
("audi");
