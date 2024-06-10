import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import { errorhandler } from "../util/error.js";

export const signup = async (req, res ,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    email === "" ||
    username === "" ||
    password === ""
  ) {
    next(errorhandler(400,'All fildes are required !'))
  }
  const hashedpassword = bcrypt.hashSync(password,10)
  const newuser = new User({
    username,
    email,
    password :hashedpassword,
  });
  try {
    await newuser.save();
    res.status(200).json({
      message: "user are succsfully created ! ",
    });
  } catch (err){
    next(err);
  }
};
