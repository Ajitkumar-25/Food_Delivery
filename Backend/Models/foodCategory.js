const mongoose = require("mongoose");
const foodCategory = new mongoose.Schema({
    CategoryName:{
        type:String,
        required:true
    }
    })

module.exports = mongoose.model("foodCategory",foodCategory);