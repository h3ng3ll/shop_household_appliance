require("dotenv").config();

const sequelize = require("./db.js");
const express = require("express");
const models = require("./models/models.js");
const router = require("./routes/routes.js");
const errorHandler = require("./middleware/errorHandlingMidleware.js");
const path = require("path");

// const { json } = require("sequelize");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

// use to process post requests .
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "static")));
app.unsubscribe(express.json());
app.use("/api", router);

app.use(errorHandler);

// app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync(); /// compare date
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {}
};

start();
