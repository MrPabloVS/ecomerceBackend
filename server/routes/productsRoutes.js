import express from "express"
import {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProductById,
    getProductsByCategory
} from "../controllers/productController.js"

export const productRouter = express.Router()

productRouter.post("/product", addProduct)
productRouter.get("/product", getAllProducts)
productRouter.get("/product/:id", getProductById)
productRouter.get("/product/:category", getProductsByCategory)
productRouter.put("/product/:id", updateProduct)
productRouter.delete("/product/:id", deleteProductById)
