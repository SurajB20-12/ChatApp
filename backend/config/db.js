const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `DB connected successfully:${mongoose.connection.host}`.cyan.underline
    );
  } catch (err) {
    console.log(`Error:${err.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
