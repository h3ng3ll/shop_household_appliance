require("dotenv").config();

const sequelize = require("./db.js");
const express = require("express");
const fileUpload = require("express-fileupload")
const cors = require("cors");const router = require("./routes/routes.js");
const errorHandler = require("./middleware/errorHandlingMidleware.js");
const path = require("path");




const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
// use to process post requests .
app.use(express.json());
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, "static")));

app.unsubscribe(express.json());


app.use("/api", router);

app.use(errorHandler);


const start = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync(); /// compare date
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {}
};

start();
