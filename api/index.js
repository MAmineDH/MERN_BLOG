import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/user.routes.js';
dotenv.config()
const app = express()
mongoose.connect(process.env.MONGO)
.then(

   ()=>{
    console.log("mdb is connected !")
   }
)
.catch((err)=>{
    console.log('an error is database connect ! ') 
})
app.listen(3000,()=>{
    console.log("server is runing on port 3000")
});

app.use('/user', userrouter)