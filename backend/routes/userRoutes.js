const express = require("express");
const { getUserProfile, registerUser, loginUser } = require("../controllers/userController"); // ✅ Ensure all imports exist
const protect = require("../middleware/authMiddleware"); // ✅ Ensure correct import

const router = express.Router();

router.post("/register", registerUser); // ✅ Register Route
router.post("/login", loginUser); // ✅ Login Route
router.get("/profile", protect, getUserProfile); // ✅ Profile Route (Protected)

module.exports = router;
