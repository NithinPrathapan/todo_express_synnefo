const Todo = require("../models/todoModel.js");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log(todos);
    res.render("index", { todos });
  } catch (error) {
    console.log(error);
    res.status(500).send("error fetching todos");
  }
};

exports.addTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      task: req.body.task,
    });
    await newTodo.save();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding todo.");
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting todo.");
  }
};
