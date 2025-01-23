// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to MongoDB database
connectDB();

// Middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "25mb" }));

// Enable CORS for frontend requests during development
if (process.env.NODE_ENV === "development") {
    app.use(
      cors({
        origin: "http://localhost:3000", // Frontend URL during development
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true, // Allow cookies if needed
      })
    );
  } else {
    app.use(cors()); // Enable unrestricted CORS for production (adjust as necessary)
  }

// Register API routes BEFORE serving the frontend
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/posts", postRoutes);

// Serve static files for frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Catch-all route for serving the React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
  });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
