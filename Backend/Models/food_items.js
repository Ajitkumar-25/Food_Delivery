const mongoose=require('mongoose');
const Food_items_schema=new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userid:String,
    company:String
});
module.exports=mongoose.model("Prods",Food_items_schema);