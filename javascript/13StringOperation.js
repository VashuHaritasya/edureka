var a = "javascript";
a.split("")(10)[("j", "a", "v", "a", "s", "c", "r", "i", "p", "t")];
var b = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];

b.join();
("j,a,v,a,s,c,r,i,p,t");
b.join().replace(/,/g, ""); // /g is global it mean it will remove (,) from everywhere
("javascript");
