const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const db = require("./db/db");
const person = require("./routes/person");

dotenv.config();

const app = express();

db();

app.listen(process.env.PORT || process.env.SECOND_PORT, function () {
  console.log(
    `connecting on port :  ${process.env.PORT || process.env.SECOND_PORT}`
  );
});

app.get("/", (req, res) => {
  res.send("app is running");
});

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use("/person", person);
