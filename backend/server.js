const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);  // Create HTTP Server

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Socket.io
const io = socketIo(server, {
  cors: { origin: "*" },
});

// WebSocket Connection
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("taskUpdated", (task) => {
    console.log("Task Updated Event Received:", task);
    io.emit("updateTasks", task);  // Broadcast to all clients
  });

  socket.on("disconnect", () => console.log("Client disconnected:", socket.id));
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
