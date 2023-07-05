const express = require("express");
const router = express.Router();
const foodData = require("../Models/food_items");
// const category=require("../Models/foodCategory")

router.get("/foodData", async (req, resp) => {
  let products = await foodData.find();
    // let foodcategory=await category.find();
  if (products.length > 0) {
    resp.send(products);
    // console.log(products);
  } else resp.send({ result: "nothing found" });
});

module.exports = router;
