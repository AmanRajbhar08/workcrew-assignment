const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model
const bcrypt = require("bcryptjs");

// Validation utility function
const validateRegisterInput = (data) => {
  const errors = [];
  if (!data.name || typeof data.name !== "string")
    errors.push("Name is required and should be a string");
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
    errors.push("Valid email is required");
  if (!data.password || data.password.length < 6)
    errors.push("Password must be at least 6 characters long");
  return errors;
};

// Registration route
router.post("/register", async (req, res) => {
  // Validate input
  const errors = validateRegisterInput(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ message: "Validation error", errors });
  }

  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Save hashed password
    });

    await newUser.save();

    // Respond with success
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error", details: error.message });
  }
});

module.exports = router;
