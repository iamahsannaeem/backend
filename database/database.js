const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL)
    console.log(
      `The Data Has been Connnected Successfully ${connect.connection.host}`
    )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
