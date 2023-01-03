const express = require("express")
const Router = express.Router();
const Product = require("../../models/products")
Router.get("/",async(req,res)=>{
     let product = await Product.find();
     res.send(product)
})


module.exports = Router
