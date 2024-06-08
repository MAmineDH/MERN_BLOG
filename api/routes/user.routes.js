import express from "express";
import {test} from "../controller/user.controller.js"
const routeruser = express.Router()


routeruser.get('/test',test)

export default routeruser