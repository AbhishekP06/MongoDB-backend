const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://webeyes02:htkhZOJP5eFtimJv@cluster0.su0fq.mongodb.net/Pioneers`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports = connectDB;