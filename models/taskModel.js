const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, "this field is required"] },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Task", taskSchema)
