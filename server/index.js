const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const contactRoutes = require("./routes/contactRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "*"],
  credentials: true,
}));

app.use(express.json());

// Routes for your API
app.use("/api", contactRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.info("MongoDB connected successfully ✅");

    // Serve static files from React build folder
    app.use(express.static(path.join(__dirname, "client", "build"))); // Ensure "client/build" is correct path to your React build

    // Catch-all handler for any routes that aren't API routes and serve the React app
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });

    // Start server only after DB connection
    app.listen(PORT, () => {
      console.info(`Server is running on http://localhost:${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err);
  });