import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model('Business', BusinessSchema);
