import express from "express"
import {
    addMessage,
    getAllMessages,
    getMessageByUserId,
    deleteMessageById
} from "../controllers/chatController.js"

export const chatRouter = express.Router()

chatRouter.post("/chat", addMessage)
chatRouter.get("/chat", getAllMessages)
chatRouter.get("/chat/:id", getMessageByUserId)
chatRouter.delete("/chat/:id", deleteMessageById)