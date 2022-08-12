import orderSchema from "../models/orderSchema.js"

export const addOrder = async (req, res) => { 
    console.log(req.body)
    const orden = orderSchema(req.body)
      await orden
             .save()
             .then((data) => res.json(data))
             .catch((err) => res.json({msg: err}))
 }



export const getAllOrders = async (req, res) => {

    await orderSchema
            .find()
            .then((data) => res.json(data))
            .catch((err) => res.json({msg: err}))
 }
 
 export const getOrderById = async (req, res) => {
 
   const {id} = req.params
 
   await orderSchema
            .findById(id)
            .then((data) => res.json(data))
            .catch((err) => res.json({msg: err}))
 
 
 }