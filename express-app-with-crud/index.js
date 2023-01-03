const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
// app.use(expressLayouts);
const port = 3000;
const productapiRouter = require ("./routes/api/product")
app.use("/api/products", productapiRouter)
mongoose.connect("mongodb://localhost/murtazastore").then(()=>{
    console.log("Successfully connected to mongodb")
}).catch(()=>{
    console.log("Unable to connect with mongodb")
})
app.get("/",(req,res)=>{
   res.send("<h1>Hello</h1>")
})

app.listen(port, ()=>{
    console.log(`Your serer is started successfully on port ${port}`)
})
