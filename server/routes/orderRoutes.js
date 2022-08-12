import express from "express"
import {
    addOrder,
    getAllOrders,
    getOrderById,
    
} from "../controllers/orderController.js"

export const orderRouter = express.Router()

orderRouter.post("/order", addOrder)
orderRouter.get("/order", getAllOrders)
orderRouter.get("/order/:id", getOrderById)
