const fs = require('fs')
const os = require('os')
const http = require('http')
// sum = ( a, b)=>{
//     console.log(a+b)
// }

// fs.readFile("./sample.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }

// })

// const a = "Hello my name is Murtaza. And I learn Node js"

// fs.writeFile("./sample.txt", a, ()=>{
//     console.log("Written");
// })
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.userInfo())
// console.log(os.hostname())
console.log("Hello")

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        return res.end("<h1>Home Page</h1>")
    }
    else if(req.url === "/about"){
       return res.end("<h1>About Page</h1>")
    }
    else if(req.url === "/contactus"){
        return res.end("<h1>Contac Us Page</h1>")
    }
    else{
       return res.end("<h1>404 No page Found</h1>")
    }
})

server.listen(process.env.PORT, ()=>{
    console.log("SErver is starting")
})
// module.exports = sum;

