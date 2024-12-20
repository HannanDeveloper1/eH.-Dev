// Imports
import express from "express";
import cors from "cors";

// Assign variables
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Export the app variable as default
export default app;