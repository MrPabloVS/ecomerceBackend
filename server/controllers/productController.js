import productSchema from "../models/productSchema.js"


export const addProduct = async (req, res) => { 
  console.log(req.body)
  const product = productSchema(req.body)
    await product
           .save()
           .then((data) => res.json(data))
           .catch((err) => res.json({msg: err}))


}

export const getAllProducts = async (req, res) => {

    await productSchema
            .find()
            .then((data) => res.json(data))
            .catch((err) => res.json({msg: err}))
 }
 
 export const getProductById = async (req, res) => {
 
   const {id} = req.params
 
   await productSchema
            .findById(id)
            .then((data) => res.json(data))
            .catch((err) => res.json({msg: err}))
 
 
 }

 export const getProductsByCategory = async (req, res) => {

  const {category} = req.params 

  await productSchema
          .find({category: category})
          .then((data) => res.json(data))
          .catch((err) => res.json({msg: err}))
}
 
 export const updateProduct = async (req, res) => {
   
   const {id} = req.params
   const {title, category, img, price, stock} = req.body
 
   await productSchema
            .updateOne({ _id:id }, {$set: {title, category, img, price, stock}})
            .then((data) => res.json(data))
            .catch((err) => res.json({msg: err}))
 
 
 }
 
 export const deleteProductById = async (req, res) => {
 
   const {id} = req.params
 
   await productSchema
            .remove({_id: id})
            .then((data) => res.json(data))
            .catch((err) => res.json({msg: err}))
 
 
 }