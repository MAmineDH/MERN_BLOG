import express from "express";
import { signup } from "../controller/auth.controller.js";
const authrouter = express.Router()

authrouter.post('/signup', signup);

export default authrouter;