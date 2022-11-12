let express = require("express");
let app = express();
let dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 7800;
let mongo = require("mongodb");
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MongoURL;

app.get("/", (req, res) => {
  res.send("hi from express");
});

app.get("/location", (req, res) => {
  db.collection("location")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.get("/menu", (req, res) => {
  db.collection("menu")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});
app.get("/mealType", (req, res) => {
  db.collection("mealType")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// conection with db
MongoClient.connect(mongoUrl, (err, client) => {
  if (err) console.log("error while connecting");
  db = client.db("");
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
});
