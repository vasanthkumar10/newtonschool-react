const express = require("express");
const app = express();

const names = ["vasanth"]; // database

app.get("/", (req, res) => {
  names.push("new data");
  console.log(names);
  res.send(names);
});

app.listen(5000, () => console.log("server is running on 5000"));
