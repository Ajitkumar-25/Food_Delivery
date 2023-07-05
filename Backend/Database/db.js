const mongoose = require("mongoose");
const dbURI = "mongodb://0.0.0.0:27017/Food-Delivery";
mongoose.connect(dbURI).then(() => {
  console.log("Connected!");
  }).catch((err) => {
  console.log("Error connecting to db", err);
});

