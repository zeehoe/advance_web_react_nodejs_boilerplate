 const express = require("express") //back end web application framework for Node.js, de facto standard server framework for Node.js
 const cors = require("cors") // a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin request
 const mongoose = require("mongoose") // a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework
 const userRoute = require("./Routes/UserRoute")

 const app = express() 
 require("dotenv").config()

 app.use(cors())
 app.use(express.json())
 
 app.use("/api/auth",userRoute)

 mongoose.connect(process.env.MONGO_URL,{
   useNewUrlParser: true,
   useUnifiedTopology: true
 }).then(()=>{
   console.log("DB Connection Successful")
 }).catch((err)=>{
   console.log(err.message)
 })

 const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`)
 })
 
 // after starting mongodb services, run npm start at this directory