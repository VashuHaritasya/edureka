let fs = require("fs");

// fs.writeFile("myfile.txt", "this is fs package", () => {
//   console.log("file created");
// });

// fs.appendFile("myCode.txt", "this is fs package \n heyeeee", () => {
//   console.log("file created");
// });

// fs.readFile("myCode.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.rename("myCode.txt", "myfirst.txt", (err, data) => {
//   if (err) throw err;
//   console.log("file Rename");
// });

fs.unlink("myCode.txt", (err, data) => {
  if (err) throw err;
  console.log("file deleted");
});
