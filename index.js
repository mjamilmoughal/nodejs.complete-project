const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const app = express();

//middleware
app.use(logger);

//routers
const bootcamps = require("./routes/bootcamps");

//loading environment variables
dotenv.config({ path: "./config.env" });

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
