import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: Array,
        required: true
    },
    cart: {
        type: Array,
        required: true
    },
    timestamp: {
        type: TimeRanges,
    }
    
})

export default mongoose.model("Orden", orderSchema)