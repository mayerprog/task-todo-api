const express = require("express");
const { Task } = require("../schemas/tasks");
const router = express.Router();

module.exports = router;

// CREATE TASK
router.post("/createTask", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newTask = await task.save();

    res.status(201).json(newTask);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET ALL TASKS
router.get("/getAll", async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ONE TASK
router.get("/getOne/:id", (req, res) => {
  const foundTask = req.user.tasks.find((t) => t._id === req.params.id);
  res.status(200).json(foundTask);
});

//UPDATE ELEMENTS IN A TASK
router.put("/updateTask/:id", async (req, res) => {
  try {
    const updatedTask = req.body.updatedTask;
    const taskID = req.params.id;

    const task = await Task.findOneAndUpdate(
      { _id: taskID },
      { $set: updatedTask },
      { new: true }
    );

    if (task) {
      res.json(task);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//DELETE CERTAIN TASK + ITS FILES FROM FOLDER
router.delete("/deleteOne/:id", async (req, res) => {
  try {
    const taskID = req.params.id;

    const result = await Task.findByIdAndDelete(taskID);

    if (result) {
      res.json({ message: "Task successfully deleted." });
    } else {
      res.status(404).send("Task not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.delete("/deleteAll", async (req, res) => {
//   try {
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: req.user._id },
//       { $unset: { tasks: 1 } },
//       { new: true }
//     );

//     res.json({ message: "Tasks deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
