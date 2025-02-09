// Import required modules
import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

// Initialize the Express app
const app = express();
const port = process.env.PORT || 4000;
connectDB() 
const allowedOrigins = [
  'http://localhost:5173', // For local development
  'https://mern-auth-client-93z2.onrender.com' // For production
];
// Middleware
app.use(express.json());// all req wil be passed in json format
app.use(cookieParser());


app.use(cors({
  origin: ["https://mern-auth-client-93z2.onrender.com"], // Only allow frontend URL
  credentials: true, // Allow credentials like cookies and authorization headers
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));





// API Endpoints 
app.get("/", (req, res) => {
    res.send("Api working fine!");
  });
app.use('/api/auth' , authRouter)
app.use('/api/user' , userRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
