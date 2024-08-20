const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://adityaswarupchoudhary2003:FmplK7RC7Vh0XAl2@cluster0.szwrxy5.mongodb.net/shopsy";

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
