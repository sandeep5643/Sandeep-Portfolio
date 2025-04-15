// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const contactRoutes = require("./routes/contactRoute");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: ["http://localhost:5000", "*"],
// 	credentials: true,
// }));

// app.use(express.json());

// // Routes
// app.use("/api", contactRoutes);

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URI, {
//   })
//   .then(() => {
//     console.info("MongoDB connected successfully ✅");
//     // Start server only after DB connection
//     app.listen(PORT, () => {
//       console.info(`Server is running on http://localhost:${PORT} 🚀`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error ❌", err);
//   });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// React static files serve karne ke liye
app.use(express.static(path.join(__dirname, "..", "build")));  // build folder root me hai

// API route
app.use("/api", contactRoutes);

// ⭐️ Ye React ke SPA routes handle karega
app.get(PORT, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
