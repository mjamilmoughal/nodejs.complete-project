const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
const app = express();

app.use(express.json());

const connectDB = require("./db");

//middleware
app.use(logger);

//routers
const bootcamps = require("./routes/bootcamps");

//loading environment variables
dotenv.config({ path: "./config.env" });

//connecting database
connectDB();

app.use("/api/v1/bootcamps", bootcamps);

//error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

//handling unhandled errors
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
