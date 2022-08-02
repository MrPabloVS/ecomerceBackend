import express from 'express'
import {
  loginUser,
  registerUser,
  getAllUsers,
  getById,
  updateUser,
  deleteById,
  addUser
} from '../controllers/userControllers.js'

export const userRouter = express.Router()

userRouter.get('/user', getAllUsers)
userRouter.get('/user/:id', getById)
userRouter.post('/user/login', loginUser)
userRouter.post('/user', addUser)
userRouter.post('/user/register', registerUser)
userRouter.put('/user/:id', updateUser)
userRouter.delete('/user/id', deleteById)