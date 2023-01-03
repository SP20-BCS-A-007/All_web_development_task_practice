// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/test").then(()=>{
//     console.log("Server is connected with mongodb successfully")
// }).catch((err)=>{
//     console.log(err);
// })

// const student = mongoose.Schema({
//     name: String,
//     workout: Boolean,
//     height: Number,
// });

// const Student = mongoose.model("Students", student)

// const adder = async ()=>{
//     const s1 = new Student({
//         name: "Murtaza",
//         workout: false,
//         height: 5
    
//     })
//     const s2 = new Student({
//         name: "Ghulam Murtaza",
//         workout: false,
//         height: 5.5
    
//     })
    
//     await s1.save();
//     await s2.save();
// }

// adder().then(()=>{
//     console.log("Hello from then of adder")
// }).catch((err)=>{
//     console.log("hello from error")
// });

// const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017/test").then(()=>{
//     console.log("Welcome your mongo connection is successfully done")
// }).catch((err)=>{
//     console.log(err)
// })

// const student = mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     age: Number
// })

// const Student = mongoose.model("Students", student)

// const addStudent = async ()=>{
//     await Student.create({
//         name: "Ghulam Murtaza",
//         email: "buttmurtaza01@gmail.com",
//         password: "Password@123",
//         age: 22
//     })
   
// }

// addStudent().then(()=>{
//     console.log("Successfully created the table")
// }).catch((err)=>{
//     console.log(err)
// })

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/test").then(()=>{
    console.log("Database Connected Successfully")
}).catch((err)=>{
    console.log(err)
})

const studentSchema =  mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
})

const student =  mongoose.model("Students", studentSchema)

const s1 = new student({
    name: "Ghulam Murtaza",
    email: "buttmurtaza01@gmail.com",
    password: "Password@123",
    age: 22
})

// s1.save();

// student.create({
//     name: "Ghulam Murtaza2",
//     email: "buttmurtaza01@gmail.com",
//     password: "Password@123",
//     age: 22
// })

const s2 = new student({
    name: "Hassan",
    email: "hassan01@gmail.com",
    password: "Password@123",
    age: 24
})

const s3 = new student({
    name: "Hadeeq",
    email: "hadeeq01@gmail.com",
    password: "Password@123",
    age: 21
})

const s4 = new student({
    name: "Ali",
    email: "ali01@gmail.com",
    password: "Password@123",
    age: 18
})

// student.insertMany([s1,s2,s3,s4]).then(()=>{
//     console.log("All Value are store successfully")
// }).catch((err)=>{
//     console.log(err)
// })

student.find().then((data)=>{
    console.log(data)
    // data.forEach(element=>{
    // console.log(element.name)
    // });
}).catch((err)=>{
  console.log(err)
})


