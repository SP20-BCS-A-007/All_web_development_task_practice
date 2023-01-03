// const express = require('express')
// const path =  require('path')
// const bodyParser = require('body-parser')

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({extended: false}))

// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname + "/index.html"))
// })
// app.post("/login", (req, res)=>{
//     res.send("<h1>Login Successfull</h1>")
//     console.log(req.body)
    
// })

// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`)
// })


const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})
app.get("/api/recipies", (req, res)=>{
    res.json([
        {
            user: "Murtaza",
            email: "buttmurtaza01@gmail.com",
            password: "password"
        },
        {
            user: "Ali",
            email: "buttali01@gmail.com",
            password: "password12"
        }

    ])
})

app.post("/api/recipies/add", (req, res)=>{
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
 console.log(userName)
    res.json({
        success: "true",
        name: userName,
        email: userEmail,
        password: userPassword,
    })
    })

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})