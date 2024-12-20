// Imports
import mongoose from 'mongoose'

// Connect to Database function
const connectDB = async ()=>{
     return mongoose.connect(process.env.MONGO_URI)
}

// Export the connectDB function as default
export default connectDB;