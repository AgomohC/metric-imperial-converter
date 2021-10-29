//  require and initialize dependencies
const express = require("express");
const app = express();
require("dotenv").config;
const helmet = require("helmet");

//middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

// routes
const converterRouter = require("./routes/converterRoutes");
app.use("/api/convert", converterRouter);
app.use((req, res) => {
  res.status(404).send("<h3>route does not exist</h3>");
});

// port
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
