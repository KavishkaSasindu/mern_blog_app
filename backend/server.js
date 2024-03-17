const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
require("dotenv").config();

const userRouter = require("./routes/UserRoutes");
const postRouter = require("./routes/PostRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.1gilyli.mongodb.net/blog`
  )
  .then(() => {
    console.log("Mongodb is connected");
    app.listen(process.env.PORT, () => {
      console.log("server is running");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

//   routes
app.use(userRouter);
app.use(postRouter);
