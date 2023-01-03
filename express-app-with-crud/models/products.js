const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number
})

const Product = mongoose.model("Products", productSchema)

module.exports = Product;