const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const todoController = require("./controllers/todoController.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/todoApp")
  .then((result) => {
    console.log("connected to mongodb database");
  })

  .catch((error) => {
    console.log(error);
  });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", todoController.getTodo);
app.post("/add", todoController.addTodo);
app.post("/delete/:id", todoController.deleteTodo);

app.listen(3000, () => {
  console.log("server start listening on port 3000");
});
