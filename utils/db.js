const mongoose = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/mern"

const URI = process.env.MONGODB_URI;

const connectDb = async ()=>{
    try {
        await mongoose.connect(URI)
        console.log("database was connected successfully");
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}

module.exports=connectDb