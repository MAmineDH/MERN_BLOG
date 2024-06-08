import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    email === "" ||
    username === "" ||
    password === ""
  ) {
    res.status(400).json({
      mesaage: "required to fill the inputs !",
    });
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
  } catch {
    console.log("cant create the user ");
    res.status(400).json("cant create the user !");
  }
};
