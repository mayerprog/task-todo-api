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

// // GET ONE TASK
// router.get("/getOne/:id", (req, res) => {
//   const foundTask = req.user.tasks.find((t) => t._id === req.params.id);
//   res.status(200).json(foundTask);
// });

// //UPDATE ELEMENTS IN A TASK
// router.put("/updateTask/:id", async (req, res) => {
//   try {
//     const updateTask = req.body.updatedTask;
//     const imagesName = req.body.imagesName;
//     const taskID = req.params.id;

//     console.log("imagesId", imagesName);
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: req.user._id, "tasks._id": taskID }, //finds user and task
//       { $set: { "tasks.$": updateTask } }, // put updated task
//       { new: true }
//     );
//     imagesName.forEach((imageName) => {
//       fs.unlink(`uploads/${imageName}`, (err) => {
//         if (err) {
//           console.error("Error deleting file:", err);
//           return;
//         }
//       });
//     });

//     res.json(updatedUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// //DELETE CERTAIN TASK + ITS FILES FROM FOLDER
// router.delete("/deleteOne/:id", async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.user._id });
//     const taskID = req.params.id;
//     // console.log("deletTaskId", taskID);
//     user.tasks.forEach((task) => {
//       if (task._id == taskID) {
//         task.images.forEach((image) => {
//           imageName = image.name;
//           fs.unlink(`uploads/${imageName}`, (err) => {
//             if (err) {
//               console.error("Error deleting file:", err);
//               return;
//             }
//           });
//         });
//       }
//       return;
//     });

//     const updatedUser = await User.findOneAndUpdate(
//       { _id: req.user._id }, //finds user and task
//       { $pull: { tasks: { _id: taskID } } } // deletes certain task
//     );

//     const job = await taskQueue.getJob(taskID);
//     await job?.remove();

//     res.json({ message: "Task deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

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
