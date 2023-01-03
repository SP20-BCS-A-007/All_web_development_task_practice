// const express = require("express");
// const ejs = require("ejs");
// const mongoose = require('mongoose');
// const port = 3000;

// const app = express();

// app.set('view engine', 'ejs');
// app.use(express.static("public"));
// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

// mongoose.connect("mongodb://localhost/restfulapi").then(()=>{
//     console.log("Mogodb is successfully connected")
// }).catch((error)=>{
//      console.log(error);
// })

// const articleSchema = mongoose.Schema ({
//     title: String,
//     content: String,
// })

// const article = mongoose.model("Articles", articleSchema)

// const a1 = new article({
//     title: "Article no 1",
//     content: "This is my first arcticle that has nothing in it"
// })

// app.get("/articles", (req, res)=>{
//     article.find((err, findarticles)=>{
//         res.send(findarticles)
//     })
// })

// app.post("/articles", (req, res)=>{

//     const a2 = new article({
//         title: req.body.title,
//         content: req.body.content
//     })
     
//     a2.save()
// res.send("successfully posted")
// })

// app.delete("/articles",(req, res)=>{
//     article.deleteMany((err)=>{
//         if(!err){
//             res.send("successfully delete all item")
//         }
//         else{
//             res.send(err)
//         }
//     })
// })

// app.get("/articles/:id",(req, res)=>{
//     console.log(req.params.id)
//     article.findById({_id: req.params.id}, (err, foundarticle)=>{
//         if(foundarticle){
//             res.send(foundarticle)
//         }
//         else{
//             res.send(err)
//         }
//     })
   
// })

// app.patch("/articles/:id",(req, res)=>{
//     console.log(req.params.id)
//     article.updateOne(
//         {title: req.params.title}, 
//         {$set: {content: "", title: ""}}, 
//         (err)=>{
//             if(!err){
//                 res.send("successfully chaging")
//             }else{
//                 res.send(err)
//             }
//         }
//         )
   
// })


// app.listen(port, function() {
//   console.log(`Server started on port ${port} and your link is http://localhost:${port}`);
// });


const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const urCheck = (req, res, next)=>{
    
    next();
}

app.get("/", (req, res)=>{
  res.send("Hello")
})

app.get("/about", (req,res)=>{
   res.send("about page")
})

app.listen(port, function() {
  console.log(`Server started on port ${port} and your link is http://localhost:${port}`);
});