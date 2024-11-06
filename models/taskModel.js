const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, "this field is required"] },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Task", taskSchema)
