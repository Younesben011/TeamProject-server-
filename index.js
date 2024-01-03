import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import path from "path"
import { fileURLToPath } from "url"
import authRouter from "./routes/auth.js"
dotenv.config()

// define constant
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const Port = process.env.PORT||6001
const Host = process.env.HOST


// setup dependencies
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use("/assets",express.static(path.join(__dirname,"/public/assets")))



// routes
app.get("/",(req,res)=>{res.send({message:"hi wellcom"})})
app.use("/auth",authRouter)




// mongodb connection
mongoose.connect(process.env.MONGO_URL)
 .then(()=>{
    app.listen(Port,Host,err=>{
        if(err){
            console.log(`connection error`);
            return
        }
        console.log(`connected at ${Host}:${Port} \n db connection -> connected`);
    })
 })
.catch(err=>{
    console.log(`database connection error ${err}`);
})
    
