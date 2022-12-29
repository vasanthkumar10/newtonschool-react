const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const urlencodedParser = bodyparser.urlencoded({ extended: false });

app.use(urlencodedParser);

const names = ["vasanth"]; // database

app.get("/", (req, res) => {
  // names.push("new data");
  console.log(names);
  res.send(names);
});

app.post("/", (req, res) => {
  console.log("post request --->", req.body);
  res.send(names);
});

app.listen(5000, () => console.log("server is running on 5000"));
