import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    
})

export default mongoose.model("Chat", chatSchema)