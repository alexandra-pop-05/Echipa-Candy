const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user-routes");


mongoose
  .connect(
    "mongodb+srv://TD:bombonel123@cluster0.9cnoq.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("connected to database Dashboard (0_0)");
  })
  .catch((err) => {
    console.log("connection failed (dashboard)"), console.log(err);
  });

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyparser.json({ limit: "400mb" }));
app.use(bodyparser.urlencoded({ limit: "400mb", extended: true }));

app.use("/", userRoutes);

app.listen(8080);
