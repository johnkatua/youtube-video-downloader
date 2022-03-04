const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const routes = require("./routes/Video");

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// router
app.use("/api", routes);

const mongoDB = process.env.MONGO_URI;

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
