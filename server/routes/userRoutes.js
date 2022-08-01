import express from 'express'
import {
  loginUser,
  registerUser
} from '../controllers/userControllers.js'

export const userRouter = express.Router()

userRouter.get('/user/login', loginUser)
userRouter.post('/user/register', registerUser)