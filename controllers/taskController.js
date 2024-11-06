const asyncHandler = require("express-async-handler")
const Task = require("../models/taskModel")

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find()
  res.status(200).json(tasks)
})

const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please Fill the task field this is required")
  }
  const task = await Task.create(req.body)
  res.status(200).json(task)
})

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)
  if (!task) {
    res.status(400).json({
      message: "Task Not found",
    })
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedTask)
})

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)
  if (!task) {
    res.status(400).json({
      message: "Task Not found",
    })
  }
  await Task.findByIdAndDelete(req.params.id)
  res.status(200).json({
    message: `You are deleting an task number ${req.params.id}`,
  })
})

module.exports = { getAllTasks, setTask, updateTask, deleteTask }
