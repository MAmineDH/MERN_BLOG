import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/user.routes.js';
import authrouter from './routes/auth.route.js';
dotenv.config()
const app = express()
app.use(express.json())
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
app.use('/api/auth',authrouter)
//midelware 
app.use((err,req,res,next)=>{
    const StatusCode = err.StatusCode || 500 ;
    const message = err.message || 'internal server err'
    res.status(StatusCode).json({
        success : false,
        StatusCode,
        message 
    })
});