import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = await User.create({
      email,
      password: hashedPassword,
      role,
    });
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res
      .cookie("token", token, {
        httpOnlY: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60 * 60 * 100,
      })
      .status(201)
      .json({
        message: "User registered successfully",
        user: newuser.email,
        token,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "user does not exist" });
    }

    const userPassword = existingUser.password;
    const isMatch = await bcrypt.compare(password, userPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res
      .cookie("token", token, {
        httpOnlY: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60 * 60 * 100,
      })
      .status(200)
      .json({
        message: "you are now signed in",
        user: existingUser.email,
        token,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
