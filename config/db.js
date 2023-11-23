const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(`mongodb+srv://dhachamaotari:qwerty123@cluster0.bkjqljz.mongodb.net/?retryWrites=true&w=majority`);
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`mongo DB connection Failed : ${error}`);
    process.exit(1);
  }
};
module.exports = connectDB;
