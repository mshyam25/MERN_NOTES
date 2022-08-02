import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import { generateToken } from '../generateToken.js'
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)

    throw new Error('User Already Exists')
  } else {
    const user = await User.create({
      name,
      email,
      password,
      pic,
    })
    if (user) {
      res.status(201)
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Error Occured while Registering User')
    }
  }
})

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (user && (await user.passwordCheck(password))) {
    res.status(200)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid Email or Password')
  }
})

export { registerUser, authUser }
