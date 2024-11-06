const express = require("express")
const {
  getAllTasks,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController")
const router = express.Router()

router.get("/", getAllTasks)
router.post("/", setTask)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports = router
