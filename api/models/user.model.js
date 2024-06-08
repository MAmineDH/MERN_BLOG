import mongoose from "mongoose";
import { type } from "os";
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique:true,
    },
    pasword:{
        type:String,
        require :true,

    }
},{timestamps :true})

const User = mongoose.model('User',userSchema)
export default  User ;