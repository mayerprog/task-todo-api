const mongoose = require("mongoose");

const task = new mongoose.Schema({
  title: String,
  description: String,
  isDone: Boolean,
  isImportant: Boolean,
});

const taskSchema = mongoose.model("task", task);

module.exports = {
  Task: taskSchema,
};
