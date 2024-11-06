const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Field Is Required"],
    },
    email: {
      type: String,
      required: [true, "Name Field Is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Name Field Is Required"],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
