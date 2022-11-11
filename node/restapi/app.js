let express = require("express");
let app = express();
let port = 7800;

app.get("/", (req, res) => {
  res.send("hi from express");
});

app.get("/location", (req, res) => {
  res.send("hi from location");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
