const express = require("express")
const { errorHandler } = require("./middleware/errorHandling")
const connectDB = require("./database/database")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/tasks", require("./routes/tasksRoutes"))
app.use("/users", require("./routes/userRoutes"))

app.use(errorHandler)
app.listen(port, () => console.log(`Backend server is listening on ${port}`))
