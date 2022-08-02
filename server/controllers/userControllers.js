import userSchema from "../models/userSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



export const addUser = async (req, res) => { 
  console.log(req.body)
  const user = userSchema(req.body)
   await user
           .save()
           .then((data) => res.json(data))
           .catch((err) => res.json({msg: err}))


}

export const registerUser = async (req, res) => { 
  console.log(req.body)
  const {name, email, password} = req.body
  let existance = false
  let passwordHash = await bcrypt.hash(password, 8)

  await userSchema
           .find({name: name , email: email})
           .then((data) => { 
             console.log(data)
             if (data[0].email === email && data[0].name === name) {
             existance = true
             console.log("existe")
           }})
           .catch((err) => res.json({msg: err}))


  const user = userSchema({name: name, email: email, password: passwordHash})
  if (existance === false) {
    await user
           .save()
           .then((data) => res.json(data))
           .catch((err) => res.json({msg: err}))
  } else {
    res.send("Username or email already at use")
  }
   


}

export const loginUser = async (req, res) => { 
  const { email, password} = req.body
  let user = {}

  await userSchema
           .find({ email: email})
           .then((data) => { 
             if (data !== [] ) {
              user = data
           }else {}
              res.send("Incorrect email")})
           .catch((err) => res.json({msg: err}))
  
  const compare = await bcrypt.compare(password, user.password)

  if (compare) {
     jwt.sign( user, "claveJWT", (err, token) => {
      res.json(token)
    })
    
  } else {
    res.send("Incorrect Password")
  }
}

export const getAllUsers = async (req, res) => {

   await userSchema
           .find()
           .then((data) => res.json(data))
           .catch((err) => res.json({msg: err}))
}

export const getById = async (req, res) => {

  const {id} = req.params

  await userSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((err) => res.json({msg: err}))


}

export const updateUser = async (req, res) => {
  
  const {id} = req.params
  const {name, email, password} = req.body

  await userSchema
           .updateOne({ _id:id }, {$set: {name, email, password}})
           .then((data) => res.json(data))
           .catch((err) => res.json({msg: err}))


}

export const deleteById = async (req, res) => {

  const {id} = req.params

  await userSchema
           .remove({_id: id})
           .then((data) => res.json(data))
           .catch((err) => res.json({msg: err}))


}