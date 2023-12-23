const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const task = new mongoose.Schema({
  title: String,
  description: String,
  isDone: Boolean,
});

const taskSchema = mongoose.model("task", task);

module.exports = {
  Task: taskSchema,
};
