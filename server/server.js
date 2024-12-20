// setup .env
import dotenv from "dotenv"
dotenv.config()

// Connect to MongoDB Database
import connectDB from "./config/DB.js";
connectDB().then(()=>{
    console.log("Connected to MongoDB")
}).catch(err=>{
    console.log(`Can't connected to Database due to, ${err.message}`)
})

// Imports
import app from "./app.js";

// Variables
const PORT = process.env.PORT || 500;

// Listen(Start) the server
app.listen(PORT, () => {
    console.log(`eH-Dev backend server started on port ${PORT}`);
})