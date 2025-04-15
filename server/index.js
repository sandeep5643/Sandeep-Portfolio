const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5000", "*"],
	credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
  })
  .then(() => {
    console.info("MongoDB connected successfully ✅");
    // Start server only after DB connection
    app.listen(PORT, () => {
      console.info(`Server is running on http://localhost:${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err);
  });
