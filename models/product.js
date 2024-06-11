const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "pdtCode": String,
        "pdtName": String,
        "title": String,
        "img": String,
        "category": String,
        "price": String
    }
)

let productmodel=mongoose.model("products",schema);
module.exports={productmodel}