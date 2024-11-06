const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400).json({
      message: "All Fields Are Required",
    })
  }
  const existUser = await User.findOne({ email })
  if (existUser) {
    throw new Error("This Email Registered Already")
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const user = await User.create({ name, email, password: hashedPassword })
  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400).json({
      message: "Given Data is Invalid",
    })
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new Error("Please Fill All Fields")
  }
  const user = await User.findOne({ email })
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400).json({
      message: "email Or password Is Invalid",
    })
  }
})

const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "This is the current User",
  })
})

module.exports = { registerUser, loginUser, getCurrentUser }
