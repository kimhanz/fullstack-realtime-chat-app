import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../lib/utils.js"
import cloudinary from "../lib/cloudinary.js"

export const signup = async (req, res) => {
  const { fullName, password, email } = req.body // 1
  try {
    // 2
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All field are required" })
    }

    if (password.length < 6) {
      //3
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters" })
    }

    const user = await User.findOne({ email }) //4

    if (user) return res.status(400).json({ message: "Email already exists" }) //5

    const salt = await bcrypt.genSalt(10) // 6
    const hashedPassword = await bcrypt.hash(password, salt) // 7

    const newUser = new User({
      // 8 -> go to lib/utils.js // 9
      fullName,
      email,
      password: hashedPassword,
    })

    if (newUser) {
      // 10
      // generate jwt token here
      generateToken(newUser._id, res)
      await newUser.save()

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      })
    } else {
      res.status(400).json({ message: "Invalid user data" })
    }
  } catch (error) {
    console.log("Error in signip controller", error.message)
    res.status(500).json({ message: "Internal Server Error" })
  }

  res.send("Signup route")
}

export const login = async (req, res) => {
  const { email, password } = req.body // 1
  try {
    const user = await User.findOne({ email }) //2

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" }) //3
    }

    const isPasswrodCorrect = await bcrypt.compare(password, user.password) // 4
    if (!isPasswrodCorrect) {
      // 5
      return res.status(400).json({ message: "Invalid credentials" }) //5
    }

    generateToken(user._id, res) // 6 create token

    res.status(200).json({
      // 7 show json data
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    })
  } catch (error) {
    console.log("Error in login controller".error.message)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const logout = (req, res) => {
  try {
    //1
    res.cookie("jwt", "", { maxAge: 0 })
    res.status(200).json({ message: "Logged out successfully " })
  } catch (error) {
    console.log("Error in login controller".error.message)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body
    const userId = req.user._id

    if (!profilePic) {
      return res.status(400).json({ message: "Profile pic is required" })
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic)
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    )

    res.status(200).json(updatedUser)
  } catch (error) {
    console.log("Error in update profile controller:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user)
  } catch (error) {
    console.log("Error in chcekAuth controller:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
