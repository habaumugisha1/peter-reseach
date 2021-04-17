const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// const tractor = require('./controllers/tractor')
const tractorController = require("./controllers/tractor");
// Set up the express app
const app = express();
const port = process.env.PORT || 5500
// Log requests to the console.
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => {
    res.status(200).json({status:200, message:"welcome to the reseachers"})
})
app.post("/create/tractor", tractorController.create);
app.get("/tractor", tractorController.getAll);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Not found",
  })
);
app.listen(port, ()=> console.log(`server is running on port ${port}`))
module.exports = app;
