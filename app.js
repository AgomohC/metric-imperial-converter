const express = require("express");
const app = express();
require("dotenv").config;
const cors = require("cors");
const helmet = require("helmet");
app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
const converterRouter = require("./routes/converterRoutes");

app.use("/api/convert", converterRouter);
app.use((req, res) => {
  res.status(404).send("<h3>route does not exist</h3>");
});

const port = process.env.PORT || 8080;
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`app is listening on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
