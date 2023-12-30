import mongoose from "mongoose";
const cart_schema=new mongoose.Schema({
    cust_id:{type:String},
    productname:{type:String},
    category_name:{type:String},
    Description:{type:String},
    price:{type:String},
    banner:{type:String}
})

export default mongoose.model.cart||mongoose.model("cart",cart_schema)