const mongoose = require("mongoose");
const MongoURI = "mongodb://localhost:27017";
const connectDB = async () => {
  const cnn = await mongoose.connect(MongoURI, {
    useNewUrlParser: true,
  });

  console.log(`MongoDB is connected: ${cnn.connection.host}`);
};

module.exports = connectDB;
