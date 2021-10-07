// require mongoose
const mongoose = require("mongoose");

// connect DB
const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected ...");
    } catch (error) {
        console.log("Database is not connected !!!", error)
    }
}

module.exports = connectDB
