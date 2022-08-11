import chatSchema from "../models/chatSchema.js"

export const addMessage = async (req, res) => { 
    console.log(req.body)
    const mensaje = chatSchema(req.body)
      await mensaje
             .save()
             .then((data) => res.json(data))
             .catch((err) => res.json({msg: err}))
  
  
  }
  
  export const getAllMessages = async (req, res) => {
  
      await chatSchema
              .find()
              .then((data) => res.json(data))
              .catch((err) => res.json({msg: err}))
   }
   
   export const getMessageByUserId = async (req, res) => {
   
     const {id} = req.params
   
     await chatSchema
              .find({userId: id})
              .then((data) => res.json(data))
              .catch((err) => res.json({msg: err}))
   
   
   }
   

   
   export const deleteMessageById = async (req, res) => {
   
     const {id} = req.params
   
     await chatSchema
              .remove({_id: id})
              .then((data) => res.json(data))
              .catch((err) => res.json({msg: err}))
   
   
   }