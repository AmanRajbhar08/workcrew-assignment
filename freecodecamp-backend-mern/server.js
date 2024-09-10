const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/authRoutes");
require("dotenv").config(); // To load environment variables

const app = express();

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Allow your frontend origin
  credentials: true, // Allow credentials to be sent with requests
};

app.use(cors(corsOptions)); // Apply CORS with options
app.use(express.json()); // To parse JSON bodies

// Define API routes
app.use("/api/auth", userRoutes); // Adjusted path

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
