import express from "express"

import dotenv from "dotenv"
// since it was named export we have to use {} while importing
import {connectDb} from "./config/db.js"
dotenv.config();

import router from "./routes/auth.routes.js"
  
await connectDb();

const port =process.env.PORT || 8000

const app=express();
app.use(express.json());
app.use("/",router);
app.get("/",(req,res)=> {
  res.json({"message":"welcome to the auth"})
})




app.listen(port,()=> {
  console.log("server started");
})