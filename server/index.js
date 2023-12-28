require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Enable CORS for a specific route
// app.use("/api/auth", cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Add a middleware to handle CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
